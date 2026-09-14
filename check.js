const KATEX = {
  throwOnError: false,
  strict: "ignore",
  trust: true,
  macros: {
    "\\un": "u_{n}",
    "\\Sn": "S_{n}",
    "\\Sinf": "S_{\\infty}",
  },
};

function texInline(src) {
  return katex.renderToString(src, { ...KATEX, displayMode: false });
}

function texBlock(src) {
  return katex.renderToString(src, { ...KATEX, displayMode: true });
}

export function renderMath(text) {
  if (text == null) return "";
  let s = String(text);
  s = s.replace(/\$n\$th/g, "$n^{\\text{th}}$");
  s = s.replace(/\n/g, "<br>");
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => {
    try {
      return texBlock(tex.trim());
    } catch {
      return tex;
    }
  });
  s = s.replace(/\\\[([\s\S]+?)\\\]/g, (_, tex) => {
    try {
      return texBlock(tex.trim());
    } catch {
      return tex;
    }
  });
  s = s.replace(/\\\(([\s\S]+?)\\\)/g, (_, tex) => {
    try {
      return texInline(tex.trim());
    } catch {
      return tex;
    }
  });
  s = s.replace(/\$([^$]+)\$/g, (_, tex) => {
    try {
      return texInline(tex.trim());
    } catch {
      return tex;
    }
  });
  return s;
}

function normalize(s) {
  return String(s)
    .trim()
    .replace(/−/g, "-")
    .replace(/,/g, "")
    .replace(/\s+/g, "")
    .replace(/^\u2212/, "-");
}

export function parseNumber(raw) {
  if (raw == null) return null;
  let s = normalize(raw);
  s = s.replace(/^[a-zA-Z]+=/, "");
  if (!s) return null;
  const mixed = s.match(/^(-?\d+)(?:_| )(\d+)\/(\d+)$/);
  if (mixed) {
    const whole = Number(mixed[1]);
    const sign = whole < 0 || s.startsWith("-") ? -1 : 1;
    return sign * (Math.abs(whole) + Number(mixed[2]) / Number(mixed[3]));
  }
  const frac = s.match(/^(-?\d+)\/(-?\d+)$/);
  if (frac) {
    const den = Number(frac[2]);
    if (den === 0) return null;
    return Number(frac[1]) / den;
  }
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

function nearlyEqual(a, b, tol = 1e-4) {
  const scale = Math.max(1, Math.abs(b), Math.abs(a));
  return Math.abs(a - b) <= tol * scale || Math.abs(a - b) <= 0.005;
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a || 1;
}

export function checkAnswer(spec, user) {
  if (!spec) return false;
  if (spec.type === "number") {
    const n = parseNumber(user);
    if (n == null) return false;
    return nearlyEqual(n, spec.value, spec.tol ?? 1e-4);
  }
  if (spec.type === "fraction") {
    const n = parseNumber(user);
    if (n == null) return false;
    return nearlyEqual(n, spec.num / spec.den, 1e-6);
  }
  if (spec.type === "choice") {
    return String(user) === String(spec.correct);
  }
  if (spec.type === "text") {
    const u = normalize(user).toLowerCase();
    return (spec.accept || []).some((a) => normalize(a).toLowerCase() === u);
  }
  if (spec.type === "list") {
    const raw = String(user).trim();
    if (spec.values.length === 2 && !raw.includes(",") && !raw.includes(";")) {
      const frac = raw.match(/^(-?\d+)\s*\/\s*(-?\d+)$/);
      if (frac) {
        return nearlyEqual(Number(frac[1]), spec.values[0]) && nearlyEqual(Number(frac[2]), spec.values[1]);
      }
    }
    const parts = String(user)
      .split(/[;,]/)
      .map((p) => parseNumber(p))
      .filter((x) => x != null);
    if (parts.length !== spec.values.length) {
      const alt = String(user)
        .trim()
        .split(/\s+/)
        .map((p) => parseNumber(p))
        .filter((x) => x != null);
      if (alt.length !== spec.values.length) return false;
      return alt.every((v, i) => nearlyEqual(v, spec.values[i], spec.tol ?? 1e-4));
    }
    return parts.every((v, i) => nearlyEqual(v, spec.values[i], spec.tol ?? 1e-4));
  }
  if (spec.type === "pair") {
    const a = parseNumber(user.a);
    const b = parseNumber(user.b);
    if (a == null || b == null) return false;
    return nearlyEqual(a, spec.a, spec.tol ?? 1e-4) && nearlyEqual(b, spec.b, spec.tol ?? 1e-4);
  }
  if (spec.type === "one-of") {
    const n = parseNumber(user);
    if (n == null) return false;
    return spec.values.some((v) => nearlyEqual(n, v, spec.tol ?? 1e-4));
  }
  return false;
}

export function formatAnswer(spec) {
  if (!spec) return "";
  if (spec.type === "number") return String(spec.value);
  if (spec.type === "fraction") {
    const g = gcd(spec.num, spec.den);
    const n = spec.num / g;
    const d = spec.den / g;
    return `${n}/${d}`;
  }
  if (spec.type === "choice") {
    return spec.correct;
  }
  if (spec.type === "list") return spec.values.join(", ");
  if (spec.type === "pair") return `${spec.aLabels?.[0] ?? "first"} = ${spec.a}, ${spec.aLabels?.[1] ?? "second"} = ${spec.b}`;
  if (spec.type === "one-of") return spec.values.join(" or ");
  if (spec.type === "text") return spec.accept[0];
  return "";
}
