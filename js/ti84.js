const FUNCS = new Set([
  "sin",
  "cos",
  "tan",
  "asin",
  "acos",
  "atan",
  "ln",
  "log",
  "logbase",
  "sqrt",
  "abs",
  "seq",
  "sum",
  "round",
  "ipart",
  "fpart",
  "int",
  "min",
  "max",
  "npr",
  "ncr",
]);

const ALPHA = {
  math: "A",
  apps: "B",
  prgm: "C",
  vars: "D",
  sin: "E",
  cos: "F",
  tan: "G",
  pow: "H",
  sq: "I",
  comma: "J",
  lpar: "K",
  rpar: "L",
  div: "M",
  log: "N",
  n7: "O",
  n8: "P",
  n9: "Q",
  mul: "R",
  ln: "S",
  n4: "T",
  n5: "U",
  n6: "V",
  sub: "W",
  sto: "X",
  n1: "Y",
  n2: "Z",
  n3: "θ",
  xtn: "n",
  n0: " ",
};

export const ti = {
  screen: "home",
  second: false,
  alpha: false,
  entry: "",
  cursor: 0,
  history: [],
  ans: 0,
  lastEntry: "",
  angle: "radian",
  uExpr: "n",
  tblStart: 1,
  tblStep: 1,
  tblRow: 0,
  mathIndex: 0,
  solverEq: "7+(n-1)*2.5=107",
  solverGuess: "10",
  solverFocus: "eq",
  error: null,
  wantFrac: false,
};

const MATH_ITEMS = [
  { label: "►Frac", run: "frac" },
  { label: "►Dec", run: "dec" },
  { label: "seq(", insert: "seq(" },
  { label: "sum(", insert: "sum(" },
  { label: "√(", insert: "sqrt(" },
  { label: "logBASE(", insert: "logBASE(" },
  { label: "Solver...", run: "solver" },
  { label: "nPr(", insert: "nPr(" },
  { label: "nCr(", insert: "nCr(" },
];

function tiError(code) {
  const err = new Error(code);
  err.ti = code;
  return err;
}

function tokenize(src) {
  const s = String(src)
    .replace(/π/g, "pi")
    .replace(/√/g, "sqrt")
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/−/g, "-")
    .replace(/·/g, "*");
  const tokens = [];
  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    if (/\s/.test(ch)) {
      i += 1;
      continue;
    }
    if (/[0-9.]/.test(ch) || (ch === "E" && i && /[0-9.]/.test(s[i - 1]))) {
      let j = i;
      if (s[j] === ".") j += 1;
      while (/[0-9]/.test(s[j])) j += 1;
      if (s[j] === ".") {
        j += 1;
        while (/[0-9]/.test(s[j])) j += 1;
      }
      if (s[j] === "E" || s[j] === "e") {
        j += 1;
        if (s[j] === "+" || s[j] === "-") j += 1;
        while (/[0-9]/.test(s[j])) j += 1;
      }
      const raw = s.slice(i, j);
      const v = Number(raw);
      if (!Number.isFinite(v)) throw tiError("ERR:SYNTAX");
      tokens.push({ t: "num", v });
      i = j;
      continue;
    }
    if (/[A-Za-zπθ]/.test(ch)) {
      let j = i + 1;
      while (/[A-Za-z0-9θ]/.test(s[j])) j += 1;
      tokens.push({ t: "id", n: s.slice(i, j) });
      i = j;
      continue;
    }
    if (ch === "(") {
      tokens.push({ t: "(" });
      i += 1;
      continue;
    }
    if (ch === ")") {
      tokens.push({ t: ")" });
      i += 1;
      continue;
    }
    if (ch === "{") {
      tokens.push({ t: "{" });
      i += 1;
      continue;
    }
    if (ch === "}") {
      tokens.push({ t: "}" });
      i += 1;
      continue;
    }
    if (ch === ",") {
      tokens.push({ t: "," });
      i += 1;
      continue;
    }
    if (ch === "=") {
      tokens.push({ t: "=" });
      i += 1;
      continue;
    }
    if (ch === "+" || ch === "*" || ch === "/" || ch === "^") {
      tokens.push({ t: ch });
      i += 1;
      continue;
    }
    if (ch === "-") {
      const prev = tokens[tokens.length - 1];
      const unary = !prev || ["+", "-", "*", "/", "^", "(", ",", "=", "{"].includes(prev.t);
      tokens.push({ t: unary ? "~" : "-" });
      i += 1;
      continue;
    }
    throw tiError("ERR:SYNTAX");
  }
  return insertImplicit(tokens);
}

function isFn(tok) {
  return tok && tok.t === "id" && FUNCS.has(tok.n.toLowerCase());
}

function isValueTok(tok) {
  return tok && (tok.t === "num" || tok.t === ")" || tok.t === "}" || (tok.t === "id" && !FUNCS.has(tok.n.toLowerCase())));
}

function isStartTok(tok) {
  return tok && (tok.t === "num" || tok.t === "(" || tok.t === "{" || tok.t === "id" || tok.t === "~");
}

function insertImplicit(tokens) {
  const out = [];
  for (let i = 0; i < tokens.length; i += 1) {
    const a = out[out.length - 1];
    const b = tokens[i];
    if (a && b && isValueTok(a) && isStartTok(b) && !(isFn(a) && b.t === "(")) {
      out.push({ t: "*" });
    }
    out.push(b);
  }
  return out;
}

function parse(src) {
  const tokens = tokenize(src);
  let i = 0;
  const peek = () => tokens[i];
  const eat = (t) => {
    if (peek() && (peek().t === t || peek().n === t)) {
      i += 1;
      return tokens[i - 1];
    }
    return null;
  };

  function args() {
    const list = [];
    if (peek() && peek().t === ")") return list;
    list.push(parseEq());
    while (eat(",")) list.push(parseEq());
    return list;
  }

  function parseEq() {
    let left = parseAdd();
    if (eat("=")) {
      const right = parseAdd();
      return { t: "eq", left, right };
    }
    return left;
  }

  function parseAdd() {
    let node = parseMul();
    for (;;) {
      if (eat("+")) node = { t: "op", op: "+", a: node, b: parseMul() };
      else if (eat("-")) node = { t: "op", op: "-", a: node, b: parseMul() };
      else break;
    }
    return node;
  }

  function parseMul() {
    let node = parsePow();
    for (;;) {
      if (eat("*")) node = { t: "op", op: "*", a: node, b: parsePow() };
      else if (eat("/")) node = { t: "op", op: "/", a: node, b: parsePow() };
      else break;
    }
    return node;
  }

  function parsePow() {
    let node = parseUnary();
    if (eat("^")) node = { t: "op", op: "^", a: node, b: parsePow() };
    return node;
  }

  function parseUnary() {
    if (eat("~")) return { t: "op", op: "~", a: parseUnary() };
    return parsePrimary();
  }

  function parsePrimary() {
    const num = eat("num");
    if (num) return { t: "num", v: num.v };
    if (eat("{")) {
      const list = [];
      if (!eat("}")) {
        list.push(parseEq());
        while (eat(",")) list.push(parseEq());
        if (!eat("}")) throw tiError("ERR:SYNTAX");
      }
      return { t: "list", items: list };
    }
    if (eat("(")) {
      const inner = parseEq();
      if (!eat(")")) throw tiError("ERR:SYNTAX");
      return inner;
    }
    const id = peek() && peek().t === "id" ? tokens[i++] : null;
    if (!id) throw tiError("ERR:SYNTAX");
    if (eat("(")) {
      const name = id.n.toLowerCase();
      if (name === "seq") {
        const expr = parseEq();
        if (!eat(",")) throw tiError("ERR:SYNTAX");
        const vtok = peek();
        if (!vtok || vtok.t !== "id") throw tiError("ERR:SYNTAX");
        i += 1;
        if (!eat(",")) throw tiError("ERR:SYNTAX");
        const start = parseEq();
        if (!eat(",")) throw tiError("ERR:SYNTAX");
        const end = parseEq();
        let step = { t: "num", v: 1 };
        if (eat(",")) step = parseEq();
        if (!eat(")")) throw tiError("ERR:SYNTAX");
        return { t: "seq", expr, v: vtok.n, start, end, step };
      }
      const list = args();
      if (!eat(")")) throw tiError("ERR:SYNTAX");
      return { t: "call", name, args: list };
    }
    return { t: "id", n: id.n };
  }

  if (!peek()) throw tiError("ERR:SYNTAX");
  const tree = parseEq();
  if (peek()) throw tiError("ERR:SYNTAX");
  return tree;
}

function angle(x) {
  return ti.angle === "degree" ? (x * Math.PI) / 180 : x;
}

function fromAngle(x) {
  return ti.angle === "degree" ? (x * 180) / Math.PI : x;
}

function nPr(n, r) {
  if (r < 0 || n < r || !Number.isInteger(n) || !Number.isInteger(r)) throw tiError("ERR:DOMAIN");
  let p = 1;
  for (let i = 0; i < r; i += 1) p *= n - i;
  return p;
}

function nCr(n, r) {
  if (r < 0 || n < r) throw tiError("ERR:DOMAIN");
  r = Math.min(r, n - r);
  let p = 1;
  for (let i = 1; i <= r; i += 1) p = (p * (n - r + i)) / i;
  return p;
}

function ev(node, env) {
  if (!node) throw tiError("ERR:SYNTAX");
  switch (node.t) {
    case "num":
      return node.v;
    case "id": {
      const k = node.n;
      const low = k.toLowerCase();
      if (low === "pi") return Math.PI;
      if (low === "e") return Math.E;
      if (low === "ans") return env.Ans ?? ti.ans;
      if (env[k] != null) return env[k];
      if (env[low] != null) return env[low];
      if (env[k.toUpperCase()] != null) return env[k.toUpperCase()];
      throw tiError("ERR:UNDEFINED");
    }
    case "list":
      return node.items.map((it) => ev(it, env));
    case "eq":
      throw tiError("ERR:SYNTAX");
    case "op": {
      if (node.op === "~") return -ev(node.a, env);
      const a = ev(node.a, env);
      const b = ev(node.b, env);
      if (typeof a !== "number" || typeof b !== "number") throw tiError("ERR:DATA TYPE");
      if (node.op === "+") return a + b;
      if (node.op === "-") return a - b;
      if (node.op === "*") return a * b;
      if (node.op === "/") {
        if (b === 0) throw tiError("ERR:DIVIDE BY 0");
        return a / b;
      }
      if (node.op === "^") return a ** b;
      throw tiError("ERR:SYNTAX");
    }
    case "seq": {
      const start = ev(node.start, env);
      const end = ev(node.end, env);
      const step = ev(node.step, env);
      if (step === 0) throw tiError("ERR:DOMAIN");
      const out = [];
      const nMax = 400;
      for (let n = start, k = 0; step > 0 ? n <= end + 1e-12 : n >= end - 1e-12; n += step, k += 1) {
        if (k > nMax) throw tiError("ERR:OVERFLOW");
        const local = { ...env, [node.v]: n, [node.v.toLowerCase()]: n, [node.v.toUpperCase()]: n };
        out.push(ev(node.expr, local));
      }
      return out;
    }
    case "call":
      return evCall(node, env);
    default:
      throw tiError("ERR:SYNTAX");
  }
}

function num1(args, env) {
  if (args.length !== 1) throw tiError("ERR:ARGUMENT");
  const v = ev(args[0], env);
  if (typeof v !== "number") throw tiError("ERR:DATA TYPE");
  return v;
}

function evCall(node, env) {
  const n = node.name;
  const a = node.args;
  if (n === "sin") return Math.sin(angle(num1(a, env)));
  if (n === "cos") return Math.cos(angle(num1(a, env)));
  if (n === "tan") return Math.tan(angle(num1(a, env)));
  if (n === "asin") return fromAngle(Math.asin(num1(a, env)));
  if (n === "acos") return fromAngle(Math.acos(num1(a, env)));
  if (n === "atan") return fromAngle(Math.atan(num1(a, env)));
  if (n === "ln") {
    const x = num1(a, env);
    if (x <= 0) throw tiError("ERR:DOMAIN");
    return Math.log(x);
  }
  if (n === "log") {
    if (a.length === 2) {
      const x = ev(a[0], env);
      const b = ev(a[1], env);
      if (x <= 0 || b <= 0 || b === 1) throw tiError("ERR:DOMAIN");
      return Math.log(x) / Math.log(b);
    }
    const x = num1(a, env);
    if (x <= 0) throw tiError("ERR:DOMAIN");
    return Math.log10(x);
  }
  if (n === "logbase") {
    if (a.length !== 2) throw tiError("ERR:ARGUMENT");
    const x = ev(a[0], env);
    const b = ev(a[1], env);
    if (x <= 0 || b <= 0 || b === 1) throw tiError("ERR:DOMAIN");
    return Math.log(x) / Math.log(b);
  }
  if (n === "sqrt") {
    const x = num1(a, env);
    if (x < 0) throw tiError("ERR:DOMAIN");
    return Math.sqrt(x);
  }
  if (n === "abs") return Math.abs(num1(a, env));
  if (n === "round") return Math.round(num1(a, env));
  if (n === "ipart" || n === "int") return Math.trunc(num1(a, env));
  if (n === "fpart") {
    const x = num1(a, env);
    return x - Math.trunc(x);
  }
  if (n === "min") return Math.min(ev(a[0], env), ev(a[1], env));
  if (n === "max") return Math.max(ev(a[0], env), ev(a[1], env));
  if (n === "npr") return nPr(Math.round(ev(a[0], env)), Math.round(ev(a[1], env)));
  if (n === "ncr") return nCr(Math.round(ev(a[0], env)), Math.round(ev(a[1], env)));
  if (n === "sum") {
    if (!a.length) throw tiError("ERR:ARGUMENT");
    const list = ev(a[0], env);
    if (!Array.isArray(list)) throw tiError("ERR:DATA TYPE");
    let start = 1;
    let end = list.length;
    if (a[1]) start = ev(a[1], env);
    if (a[2]) end = ev(a[2], env);
    let s = 0;
    for (let i = start; i <= end; i += 1) s += list[i - 1];
    return s;
  }
  throw tiError("ERR:SYNTAX");
}

function toFrac(x, maxDen = 10000) {
  if (!Number.isFinite(x)) return null;
  const sign = x < 0 ? -1 : 1;
  let v = Math.abs(x);
  if (Math.abs(v - Math.round(v)) < 1e-12) return { n: sign * Math.round(v), d: 1 };
  let a0 = Math.floor(v);
  let n0 = 1;
  let n1 = a0;
  let d0 = 0;
  let d1 = 1;
  v = v - a0;
  for (let i = 0; i < 16 && v > 1e-14; i += 1) {
    v = 1 / v;
    const a = Math.floor(v + 1e-12);
    const n2 = a * n1 + n0;
    const d2 = a * d1 + d0;
    if (d2 > maxDen) break;
    n0 = n1;
    d0 = d1;
    n1 = n2;
    d1 = d2;
    v -= a;
    if (Math.abs(x - (sign * n1) / d1) < 1e-10) break;
  }
  if (Math.abs(x - (sign * n1) / d1) > 1e-8) return null;
  return { n: sign * n1, d: d1 };
}

export function formatValue(v, frac = false) {
  if (Array.isArray(v)) return "{" + v.map((x) => formatValue(x, frac)).join(" ") + "}";
  if (typeof v !== "number" || !Number.isFinite(v)) throw tiError("ERR:OVERFLOW");
  if (frac) {
    const f = toFrac(v);
    if (f) return f.d === 1 ? String(f.n) : `${f.n}/${f.d}`;
  }
  if (Math.abs(v - Math.round(v)) < 1e-11 && Math.abs(v) < 1e12) return String(Math.round(v));
  const abs = Math.abs(v);
  if (abs !== 0 && (abs >= 1e10 || abs < 1e-9)) {
    return v
      .toExponential(8)
      .replace("e+", "E")
      .replace("e-", "E-")
      .replace("e", "E");
  }
  let s = v.toPrecision(9);
  if (s.includes("e")) return s.replace("e+", "E").replace("e-", "E-").replace("e", "E");
  s = String(Number(s));
  return s;
}

export function evaluate(src, env = {}) {
  const tree = parse(src);
  if (tree.t === "eq") throw tiError("ERR:SYNTAX");
  return ev(tree, { Ans: ti.ans, ...env });
}

function solveEq(src, guess) {
  const tree = parse(src);
  if (tree.t !== "eq") throw tiError("ERR:SYNTAX");
  const f = (n) => ev(tree.left, { n, N: n, X: n, Ans: ti.ans }) - ev(tree.right, { n, N: n, X: n, Ans: ti.ans });
  let x0 = guess;
  let x1 = guess === 0 ? 1 : guess * 1.01 + 0.1;
  let f0 = f(x0);
  let f1 = f(x1);
  for (let i = 0; i < 60; i += 1) {
    const den = f1 - f0;
    if (Math.abs(den) < 1e-14) break;
    const x2 = x1 - (f1 * (x1 - x0)) / den;
    if (!Number.isFinite(x2)) break;
    if (Math.abs(x2 - x1) < 1e-10) return x2;
    x0 = x1;
    f0 = f1;
    x1 = x2;
    f1 = f(x2);
  }
  if (Math.abs(f1) < 1e-8) return x1;
  throw tiError("ERR:NO SIGN CHNG");
}

function insert(text) {
  const { entry, cursor } = ti;
  ti.entry = entry.slice(0, cursor) + text + entry.slice(cursor);
  ti.cursor += text.length;
  ti.second = false;
  ti.alpha = false;
}

function del() {
  if (!ti.cursor) return;
  ti.entry = ti.entry.slice(0, ti.cursor - 1) + ti.entry.slice(ti.cursor);
  ti.cursor -= 1;
}

function enterHome() {
  const src = ti.entry.trim();
  if (!src) return;
  try {
    const value = evaluate(src);
    ti.ans = Array.isArray(value) ? value[value.length - 1] : value;
    ti.history.push({ expr: src, result: formatValue(value, ti.wantFrac) });
    if (ti.history.length > 6) ti.history.shift();
    ti.lastEntry = src;
    ti.entry = "";
    ti.cursor = 0;
    ti.wantFrac = false;
  } catch (err) {
    ti.error = err.ti || "ERR:SYNTAX";
    ti.screen = "error";
  }
}

function applyFrac(on) {
  if (!ti.history.length) return;
  const last = ti.history[ti.history.length - 1];
  try {
    const value = evaluate(last.expr);
    last.result = formatValue(value, on);
    if (!Array.isArray(value)) ti.ans = value;
  } catch {
    /* keep */
  }
}

export function press(id) {
  if (ti.screen === "error") {
    if (id === "enter" || id === "clear" || id === "on" || id === "2nd") {
      ti.screen = "home";
      ti.error = null;
      ti.second = false;
    }
    return;
  }

  if (id === "2nd") {
    ti.second = !ti.second;
    ti.alpha = false;
    return;
  }
  if (id === "alpha") {
    ti.alpha = !ti.alpha;
    ti.second = false;
    return;
  }

  if (ti.second) {
    ti.second = false;
    if (id === "mode") {
      ti.screen = "home";
      return;
    }
    if (id === "graph") {
      ti.screen = "table";
      return;
    }
    if (id === "window") {
      ti.screen = "tblset";
      ti.entry = String(ti.tblStart);
      ti.cursor = ti.entry.length;
      ti.solverFocus = "start";
      return;
    }
    if (id === "ln") {
      insert("e^(");
      return;
    }
    if (id === "log") {
      insert("10^(");
      return;
    }
    if (id === "sq") {
      insert("sqrt(");
      return;
    }
    if (id === "pow") {
      insert("pi");
      return;
    }
    if (id === "sin") {
      insert("asin(");
      return;
    }
    if (id === "cos") {
      insert("acos(");
      return;
    }
    if (id === "tan") {
      insert("atan(");
      return;
    }
    if (id === "neg") {
      insert("Ans");
      return;
    }
    if (id === "enter") {
      ti.entry = ti.lastEntry;
      ti.cursor = ti.entry.length;
      return;
    }
    if (id === "comma") {
      insert("E");
      return;
    }
    if (id === "n0") {
      ti.screen = "math";
      ti.mathIndex = 2;
      return;
    }
    if (id === "stat") {
      insert("seq(");
      return;
    }
  }

  if (ti.alpha && ALPHA[id]) {
    insert(ALPHA[id]);
    return;
  }

  if (ti.screen === "math") {
    if (id === "up") {
      ti.mathIndex = (ti.mathIndex + MATH_ITEMS.length - 1) % MATH_ITEMS.length;
      return;
    }
    if (id === "down") {
      ti.mathIndex = (ti.mathIndex + 1) % MATH_ITEMS.length;
      return;
    }
    if (id === "clear") {
      ti.screen = "home";
      return;
    }
    if (id === "enter" || /^n[1-9]$/.test(id)) {
      const idx = id === "enter" ? ti.mathIndex : Number(id.slice(1)) - 1;
      const item = MATH_ITEMS[idx];
      if (!item) return;
      ti.screen = "home";
      if (item.insert) insert(item.insert);
      if (item.run === "frac") applyFrac(true);
      if (item.run === "dec") applyFrac(false);
      if (item.run === "solver") {
        ti.screen = "solver";
        ti.solverFocus = "eq";
        ti.entry = ti.solverEq;
        ti.cursor = ti.entry.length;
      }
      return;
    }
    return;
  }

  if (ti.screen === "mode") {
    if (id === "enter" || id === "clear") {
      ti.screen = "home";
      return;
    }
    if (id === "n1") ti.angle = "radian";
    if (id === "n2") ti.angle = "degree";
    return;
  }

  if (ti.screen === "yeq") {
    if (id === "enter") {
      ti.uExpr = ti.entry.trim() || "n";
      ti.screen = "home";
      ti.entry = "";
      ti.cursor = 0;
      return;
    }
    if (id === "clear") {
      ti.entry = "";
      ti.cursor = 0;
      return;
    }
    if (id === "graph") {
      ti.uExpr = ti.entry.trim() || ti.uExpr;
      ti.screen = "graph";
      return;
    }
  }

  if (ti.screen === "tblset") {
    if (id === "enter") {
      const v = Number(ti.entry);
      if (ti.solverFocus === "start") {
        if (Number.isFinite(v)) ti.tblStart = v;
        ti.solverFocus = "step";
        ti.entry = String(ti.tblStep);
        ti.cursor = ti.entry.length;
      } else {
        if (Number.isFinite(v) && v !== 0) ti.tblStep = v;
        ti.screen = "table";
      }
      return;
    }
  }

  if (ti.screen === "solver") {
    if (id === "up" || id === "down") {
      if (ti.solverFocus === "eq") {
        ti.solverEq = ti.entry;
        ti.solverFocus = "guess";
        ti.entry = ti.solverGuess;
      } else {
        ti.solverGuess = ti.entry;
        ti.solverFocus = "eq";
        ti.entry = ti.solverEq;
      }
      ti.cursor = ti.entry.length;
      return;
    }
    if (id === "enter") {
      if (ti.solverFocus === "eq") {
        ti.solverEq = ti.entry;
        ti.solverFocus = "guess";
        ti.entry = ti.solverGuess;
        ti.cursor = ti.entry.length;
        return;
      }
      ti.solverGuess = ti.entry;
      try {
        const n = solveEq(ti.solverEq, Number(ti.solverGuess) || 0);
        ti.ans = n;
        ti.history.push({ expr: ti.solverEq, result: "n=" + formatValue(n) });
        if (ti.history.length > 6) ti.history.shift();
        ti.screen = "home";
        ti.entry = "";
        ti.cursor = 0;
      } catch (err) {
        ti.error = err.ti || "ERR:NO SIGN CHNG";
        ti.screen = "error";
      }
      return;
    }
    if (id === "clear") {
      ti.screen = "home";
      return;
    }
  }

  if (ti.screen === "table") {
    if (id === "up") {
      ti.tblRow = Math.max(0, ti.tblRow - 1);
      return;
    }
    if (id === "down") {
      ti.tblRow += 1;
      return;
    }
    if (id === "yeq") {
      ti.screen = "yeq";
      ti.entry = ti.uExpr;
      ti.cursor = ti.entry.length;
      return;
    }
    if (id === "graph") {
      ti.screen = "graph";
      return;
    }
    if (id === "clear" || id === "mode") {
      ti.screen = "home";
      return;
    }
    return;
  }

  if (ti.screen === "graph") {
    if (id === "graph") {
      ti.screen = "table";
      return;
    }
    if (id === "clear" || id === "yeq") {
      ti.screen = id === "yeq" ? "yeq" : "home";
      if (id === "yeq") {
        ti.entry = ti.uExpr;
        ti.cursor = ti.entry.length;
      }
      return;
    }
    return;
  }

  if (id === "yeq") {
    ti.screen = "yeq";
    ti.entry = ti.uExpr;
    ti.cursor = ti.entry.length;
    return;
  }
  if (id === "graph") {
    ti.screen = "graph";
    return;
  }
  if (id === "mode") {
    ti.screen = "mode";
    return;
  }
  if (id === "math") {
    ti.screen = "math";
    ti.mathIndex = 0;
    return;
  }
  if (id === "stat") {
    insert("seq(");
    return;
  }
  if (id === "window") {
    ti.screen = "tblset";
    ti.solverFocus = "start";
    ti.entry = String(ti.tblStart);
    ti.cursor = ti.entry.length;
    return;
  }

  if (id === "left") {
    ti.cursor = Math.max(0, ti.cursor - 1);
    return;
  }
  if (id === "right") {
    ti.cursor = Math.min(ti.entry.length, ti.cursor + 1);
    return;
  }
  if (id === "up") {
    if (ti.history.length) {
      ti.entry = ti.history[ti.history.length - 1].expr;
      ti.cursor = ti.entry.length;
    }
    return;
  }
  if (id === "down") return;
  if (id === "del") {
    del();
    return;
  }
  if (id === "clear") {
    if (ti.entry) {
      ti.entry = "";
      ti.cursor = 0;
    } else ti.history = [];
    return;
  }
  if (id === "enter") {
    enterHome();
    return;
  }
  if (id === "on") return;

  const inserts = {
    n0: "0",
    n1: "1",
    n2: "2",
    n3: "3",
    n4: "4",
    n5: "5",
    n6: "6",
    n7: "7",
    n8: "8",
    n9: "9",
    dot: ".",
    plus: "+",
    sub: "-",
    mul: "*",
    div: "/",
    pow: "^",
    lpar: "(",
    rpar: ")",
    comma: ",",
    neg: "-",
    xtn: "n",
    sq: "^2",
    inv: "^-1",
    sin: "sin(",
    cos: "cos(",
    tan: "tan(",
    ln: "ln(",
    log: "log(",
    sto: "Ans",
  };
  if (inserts[id] != null) insert(inserts[id]);
}

export function runLine(src) {
  ti.screen = "home";
  ti.error = null;
  ti.entry = src;
  ti.cursor = src.length;
  enterHome();
}

function entryWithCursor() {
  const e = ti.entry;
  const c = ti.cursor;
  return `${esc(e.slice(0, c))}<span class="ti-cursor">█</span>${esc(e.slice(c))}`;
}

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function uAt(n) {
  return evaluate(ti.uExpr, { n, N: n, X: n });
}

function lcdHome() {
  const rows = ti.history
    .slice(-4)
    .map(
      (h) => `<div class="ti-line"><div class="ti-expr">${esc(h.expr)}</div><div class="ti-out">${esc(h.result)}</div></div>`
    )
    .join("");
  return `${rows}<div class="ti-entry">${entryWithCursor()}</div>`;
}

function lcdMath() {
  const items = MATH_ITEMS.map((it, i) => {
    const n = i + 1;
    const hi = i === ti.mathIndex ? " is-on" : "";
    return `<div class="ti-menu${hi}">${n}:${it.label}</div>`;
  }).join("");
  return `<div class="ti-title">MATH</div>${items}`;
}

function lcdYeq() {
  return `<div class="ti-title">Plot1 Plot2 Plot3</div>
    <div>nMin=1</div>
    <div>u(n)=${entryWithCursor()}</div>
    <div>v(n)=</div>
    <div>w(n)=</div>`;
}

function lcdTable() {
  const start = ti.tblStart + ti.tblRow * ti.tblStep;
  let rows = `<div class="ti-title">n          u(n)</div>`;
  for (let i = 0; i < 7; i += 1) {
    const n = start + i * ti.tblStep;
    let y = "ERROR";
    try {
      y = formatValue(uAt(n));
    } catch {
      /* domain */
    }
    rows += `<div class="ti-tbl"><span>${formatValue(n)}</span><span>${esc(y)}</span></div>`;
  }
  return rows;
}

function lcdTblset() {
  const a = ti.solverFocus === "start" ? entryWithCursor() : esc(String(ti.tblStart));
  const b = ti.solverFocus === "step" ? entryWithCursor() : esc(String(ti.tblStep));
  return `<div class="ti-title">TABLE SETUP</div>
    <div>TblStart=${a}</div>
    <div>ΔTbl=${b}</div>
    <div>Indpnt: Auto</div>
    <div>Depend: Auto</div>`;
}

function lcdSolver() {
  const eq = ti.solverFocus === "eq" ? entryWithCursor() : esc(ti.solverEq);
  const g = ti.solverFocus === "guess" ? entryWithCursor() : esc(ti.solverGuess);
  return `<div class="ti-title">EQUATION SOLVER</div>
    <div>eqn:${eq}</div>
    <div>n=${g}</div>
    <div class="ti-hint">ENTER solves for n</div>`;
}

function lcdMode() {
  return `<div class="ti-title">MODE</div>
    <div>${ti.angle === "radian" ? "►" : " "}1:RADIAN</div>
    <div>${ti.angle === "degree" ? "►" : " "}2:DEGREE</div>
    <div> SEQ  (X,T,θ,n inserts n)</div>
    <div>ENTER to quit</div>`;
}

function lcdError() {
  return `<div class="ti-err">
      <div>${esc(ti.error || "ERR:SYNTAX")}</div>
      <div>1:Quit</div>
      <div>2:Goto</div>
    </div>
    <div class="ti-hint">ENTER to quit</div>`;
}

function lcdGraph() {
  const pts = [];
  for (let i = 0; i < 12; i += 1) {
    const n = i + 1;
    try {
      pts.push({ n, y: uAt(n) });
    } catch {
      /* skip */
    }
  }
  if (!pts.length) return `<div class="ti-title">GRAPH</div><div>Set u(n) in y=</div>`;
  const ys = pts.map((p) => p.y);
  const minY = Math.min(0, ...ys);
  const maxY = Math.max(0, ...ys);
  const span = maxY - minY || 1;
  const w = 280;
  const h = 118;
  const x = (n) => 18 + ((n - 1) / 11) * (w - 28);
  const y = (v) => h - 14 - ((v - minY) / span) * (h - 24);
  const dots = pts.map((p) => `<circle cx="${x(p.n).toFixed(1)}" cy="${y(p.y).toFixed(1)}" r="2.4" />`).join("");
  const axis = `<line x1="18" y1="${y(0).toFixed(1)}" x2="${w - 8}" y2="${y(0).toFixed(1)}" />`;
  return `<div class="ti-title">u(n)=${esc(ti.uExpr)}</div>
    <svg class="ti-svg" viewBox="0 0 ${w} ${h}" aria-hidden="true">${axis}${dots}</svg>`;
}

export function lcdHtml() {
  const second = ti.second ? "2nd" : "";
  const alpha = ti.alpha ? "ALPHA" : "";
  const ang = ti.angle === "degree" ? "DEG" : "RAD";
  let body = lcdHome();
  if (ti.screen === "math") body = lcdMath();
  else if (ti.screen === "yeq") body = lcdYeq();
  else if (ti.screen === "table") body = lcdTable();
  else if (ti.screen === "tblset") body = lcdTblset();
  else if (ti.screen === "solver") body = lcdSolver();
  else if (ti.screen === "mode") body = lcdMode();
  else if (ti.screen === "error") body = lcdError();
  else if (ti.screen === "graph") body = lcdGraph();
  return `<div class="ti-status"><span>${second}</span><span>${alpha}</span><span>${ang}</span><span>SEQ</span></div>
    <div class="ti-lcd-body">${body}</div>`;
}

function key(id, main, second, extra = "") {
  return `<button type="button" class="ti-key ${extra}" data-ti-key="${id}">
    <span class="ti-2nd">${second || ""}</span>
    <span class="ti-main">${main}</span>
  </button>`;
}

export function calculatorHtml() {
  return `<div class="ti84" data-ti84 tabindex="0">
    <div class="ti-brand"><span>TI-84 Plus CE</span><span class="ti-python">T</span></div>
    <div class="ti-bezel">
      <div class="ti-lcd" data-ti-lcd>${lcdHtml()}</div>
    </div>
    <div class="ti-pad">
      <div class="ti-row ti-row-fn">
        ${key("yeq", "y=", "stat plot", "ti-fn")}
        ${key("window", "window", "tblset", "ti-fn")}
        ${key("zoom", "zoom", "", "ti-fn")}
        ${key("trace", "trace", "", "ti-fn")}
        ${key("graph", "graph", "table", "ti-fn")}
      </div>
      <div class="ti-row">
        ${key("2nd", "2nd", "", "ti-gold")}
        ${key("mode", "mode", "quit")}
        ${key("del", "del", "ins")}
        <div class="ti-arrows">
          ${key("up", "▲", "", "ti-arrow")}
          <div class="ti-arrows-mid">
            ${key("left", "◀", "", "ti-arrow")}
            ${key("right", "▶", "", "ti-arrow")}
          </div>
          ${key("down", "▼", "", "ti-arrow")}
        </div>
      </div>
      <div class="ti-row">
        ${key("alpha", "alpha", "A-lock", "ti-green")}
        ${key("xtn", "X,T,θ,n", "link", "ti-xtn")}
        ${key("stat", "stat", "list")}
      </div>
      <div class="ti-row">
        ${key("math", "math", "test")}
        ${key("apps", "apps", "angle")}
        ${key("prgm", "prgm", "draw")}
        ${key("vars", "vars", "")}
        ${key("clear", "clear", "")}
      </div>
      <div class="ti-row">
        ${key("inv", "x⁻¹", "matrix")}
        ${key("sin", "sin", "sin⁻¹")}
        ${key("cos", "cos", "cos⁻¹")}
        ${key("tan", "tan", "tan⁻¹")}
        ${key("pow", "^", "π")}
      </div>
      <div class="ti-row">
        ${key("sq", "x²", "√")}
        ${key("comma", ",", "EE")}
        ${key("lpar", "(", "{")}
        ${key("rpar", ")", "}")}
        ${key("div", "÷", "e")}
      </div>
      <div class="ti-row">
        ${key("log", "log", "10ˣ")}
        ${key("n7", "7", "", "ti-white")}
        ${key("n8", "8", "", "ti-white")}
        ${key("n9", "9", "", "ti-white")}
        ${key("mul", "×", "[")}
      </div>
      <div class="ti-row">
        ${key("ln", "ln", "eˣ")}
        ${key("n4", "4", "", "ti-white")}
        ${key("n5", "5", "", "ti-white")}
        ${key("n6", "6", "", "ti-white")}
        ${key("sub", "−", "]")}
      </div>
      <div class="ti-row">
        ${key("sto", "sto→", "rcl")}
        ${key("n1", "1", "", "ti-white")}
        ${key("n2", "2", "", "ti-white")}
        ${key("n3", "3", "", "ti-white")}
        ${key("plus", "+", "mem")}
      </div>
      <div class="ti-row">
        ${key("on", "on", "off")}
        ${key("n0", "0", "catalog", "ti-white")}
        ${key("dot", ".", "i", "ti-white")}
        ${key("neg", "(−)", "Ans", "ti-white")}
        ${key("enter", "enter", "entry", "ti-enter")}
      </div>
    </div>
  </div>`;
}

export function refreshTi84(root) {
  const lcd = root.querySelector("[data-ti-lcd]");
  if (lcd) lcd.innerHTML = lcdHtml();
  const shell = root.querySelector("[data-ti84]");
  if (shell) {
    shell.classList.toggle("is-2nd", ti.second);
    shell.classList.toggle("is-alpha", ti.alpha);
  }
}

export function bindTi84(root) {
  const shell = root.querySelector("[data-ti84]");
  if (!shell) return;
  shell.querySelectorAll("[data-ti-key]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      press(btn.getAttribute("data-ti-key"));
      refreshTi84(root);
    });
  });
  shell.addEventListener("keydown", (e) => {
    if (handleKeyboard(e)) refreshTi84(root);
  });
}

export function handleKeyboard(e) {
  if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return false;
  const map = {
    Enter: "enter",
    Backspace: "del",
    Escape: "clear",
    ArrowLeft: "left",
    ArrowRight: "right",
    ArrowUp: "up",
    ArrowDown: "down",
    "+": "plus",
    "-": "sub",
    "*": "mul",
    "/": "div",
    "^": "pow",
    "(": "lpar",
    ")": "rpar",
    ",": "comma",
    ".": "dot",
  };
  if (map[e.key]) {
    e.preventDefault();
    press(map[e.key]);
    return true;
  }
  if (e.key >= "0" && e.key <= "9") {
    e.preventDefault();
    press("n" + e.key);
    return true;
  }
  if (e.key === "n" || e.key === "N") {
    e.preventDefault();
    insert("n");
    return true;
  }
  return false;
}

export function selfTest() {
  const saved = { ...ti };
  const results = [];
  function check(src, expect) {
    try {
      const v = evaluate(src);
      const got = formatValue(v);
      const ok = got === String(expect) || Math.abs(Number(got) - Number(expect)) < 1e-8;
      results.push({ src, got, expect, ok });
    } catch (err) {
      results.push({ src, got: err.ti || String(err), expect, ok: false });
    }
  }
  check("7+(41-1)*2.5", 107);
  check("seq(2n,n,1,4)", "{2 4 6 8}");
  check("sum(seq(2n,n,1,4))", 20);
  check("log(8)/log(2)", 3);
  check("32/(1-1/2)", 64);
  check("5*2^(4-1)", 40);
  Object.assign(ti, saved);
  return results;
}
