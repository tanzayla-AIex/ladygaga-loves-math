export const gdcCats = [
  { id: "home", name: "Home screen" },
  { id: "graphing", name: "Graphing" },
  { id: "algebra", name: "Algebra" },
  { id: "tables", name: "Tables" },
  { id: "sequences", name: "Sequences" },
];

export const gdcLessons = [
  {
    id: "home-eval",
    cat: "home",
    title: "Evaluate an expression",
    keys: ["type", "enter"],
    steps: [
      { do: "Type the expression on the home screen", see: "Use $(-)$ for a leading negative, not the minus key." },
      { do: "Press ENTER", see: "The value appears on the right. That value is now Ans." },
    ],
    apply: { line: "7+(41-1)*2.5" },
  },
  {
    id: "home-ans",
    cat: "home",
    title: "Reuse Ans",
    keys: ["2nd", "(−)", "enter"],
    steps: [
      { do: "Compute something first", see: "ENTER stores the result as Ans." },
      { do: "2nd then (−)", see: "That is Ans. Type /2 and ENTER to halve the last answer." },
    ],
    apply: { line: "107/2" },
  },
  {
    id: "home-frac",
    cat: "home",
    title: "MATH ►Frac",
    keys: ["MATH", "1", "enter"],
    steps: [
      { do: "Get a decimal on the home screen", see: "Example: 1÷6." },
      { do: "MATH, choose ►Frac, ENTER", see: "The calculator writes the exact fraction when it can." },
    ],
    apply: { line: "1/6", frac: true },
  },
  {
    id: "home-mode",
    cat: "home",
    title: "MODE: FUNC or SEQ",
    keys: ["mode", "3", "4"],
    steps: [
      { do: "Press MODE", see: "1–2 are radian/degree. 3 is FUNC. 4 is SEQ." },
      { do: "FUNC for graphs in $X$", see: "X,T,θ,n types X. Use this for algebra and graphing." },
      { do: "SEQ for sequences in $n$", see: "X,T,θ,n types $n$. Use this for $u_n$ and $S_n$." },
    ],
    apply: { mode: "func", screen: "mode" },
  },
  {
    id: "graph-y1",
    cat: "graphing",
    title: "Graph $Y_1$",
    keys: ["mode", "y=", "GRAPH"],
    steps: [
      { do: "MODE → 3:FUNC", see: "You are graphing in $X$, not listing terms." },
      { do: "Press y=", see: "The Y= editor. Type the formula for $Y_1$." },
      { do: "Type $x^2-4$", see: "X,T,θ,n inserts X. $x^2$ is the $x^2$ key." },
      { do: "Press GRAPH", see: "A parabola. It crosses the $x$-axis at $-2$ and $2$." },
    ],
    apply: { mode: "func", y1: "x^2-4", xmin: -6, xmax: 6, ymin: -8, ymax: 10, screen: "graph" },
  },
  {
    id: "graph-window",
    cat: "graphing",
    title: "Set the WINDOW",
    keys: ["window", "zoom"],
    steps: [
      { do: "Press WINDOW", see: "Xmin, Xmax, Ymin, Ymax. ENTER walks down the list." },
      { do: "Or press ZOOM", see: "This tool’s ZOOM is ZStandard: $[-10,10]$ on both axes." },
      { do: "Then GRAPH", see: "If you see nothing, the window is the usual culprit — not the formula." },
    ],
    apply: { mode: "func", y1: "x^2-4", xmin: -10, xmax: 10, ymin: -10, ymax: 10, screen: "window" },
  },
  {
    id: "graph-trace",
    cat: "graphing",
    title: "TRACE along a curve",
    keys: ["GRAPH", "trace", "◀", "▶"],
    steps: [
      { do: "GRAPH the function first", see: "You need a picture before you can walk on it." },
      { do: "Press TRACE", see: "A cursor sits on $Y_1$. The bottom of the screen shows $X$ and $Y$." },
      { do: "◀ and ▶", see: "The cursor slides. This is how you read a point off the graph." },
    ],
    apply: { mode: "func", y1: "x^2-4", xmin: -6, xmax: 6, ymin: -8, ymax: 10, traceX: 1, screen: "trace" },
  },
  {
    id: "graph-exp",
    cat: "graphing",
    title: "Graph an exponential",
    keys: ["y=", "GRAPH"],
    steps: [
      { do: "MODE → FUNC, then y=", see: "Growth looks like $Y_1=5\\times 2^{x}$ or $Y_1=e^{x}$ (2nd LN)." },
      { do: "GRAPH", see: "The curve climbs. WINDOW: try Xmin$=0$ if you only want $x\\ge 0$." },
    ],
    apply: { mode: "func", y1: "5*2^x", xmin: -1, xmax: 5, ymin: -2, ymax: 80, screen: "graph" },
  },
  {
    id: "alg-zero",
    cat: "algebra",
    title: "Find a zero (root)",
    keys: ["2nd", "trace", "2"],
    steps: [
      { do: "Graph $Y_1$ so it actually crosses the $x$-axis", see: "If the graph misses the axis, CALC cannot find a zero." },
      { do: "2nd TRACE (CALC)", see: "Choose 2:zero." },
      { do: "Read $X$", see: "That $X$ solves $Y_1=0$. For $x^2-4$, you get $\\pm 2$ (one at a time)." },
    ],
    apply: { mode: "func", y1: "x^2-4", xmin: -6, xmax: 6, ymin: -8, ymax: 10, zero: true },
  },
  {
    id: "alg-value",
    cat: "algebra",
    title: "EVALUATE $Y_1$ at a point",
    keys: ["2nd", "trace", "1"],
    steps: [
      { do: "GRAPH $Y_1$", see: "CALC 1:value is “what is $Y$ when $X=$ …?”" },
      { do: "2nd TRACE → 1:value", see: "In this tool, TRACE with $X$ set is that read-out." },
      { do: "Read $Y$", see: "For $Y_1=x^2-4$ at $X=3$, $Y=5$." },
    ],
    apply: { mode: "func", y1: "x^2-4", xmin: -6, xmax: 6, ymin: -8, ymax: 10, traceX: 3, screen: "trace" },
  },
  {
    id: "alg-solver",
    cat: "algebra",
    title: "EQUATION SOLVER",
    keys: ["MATH", "7", "enter"],
    steps: [
      { do: "MATH → Solver", see: "Type a full equation with $=$ in it." },
      { do: "ENTER to the guess line", see: "Give a starting $n$ (or $X$). The solver walks from there." },
      { do: "ENTER again", see: "Use this when the unknown is buried: $7+(n-1)2.5=107$." },
    ],
    apply: { solverEq: "7+(n-1)*2.5=107", solverGuess: "10", screen: "solver" },
  },
  {
    id: "alg-quad",
    cat: "algebra",
    title: "Solve a quadratic by graphing",
    keys: ["y=", "GRAPH", "2nd", "trace"],
    steps: [
      { do: "Rewrite as $Y_1=0$", see: "$x^2-5x+6=0$ becomes $Y_1=x^2-5x+6$." },
      { do: "GRAPH, then CALC zero twice", see: "Each crossing is a root. Here $X=2$ and $X=3$." },
      { do: "Do not skip the picture", see: "The graph tells you how many real roots before you calculate." },
    ],
    apply: { mode: "func", y1: "x^2-5x+6", xmin: -1, xmax: 6, ymin: -2, ymax: 8, screen: "graph" },
  },
  {
    id: "tab-table",
    cat: "tables",
    title: "TABLE of values",
    keys: ["y=", "2nd", "GRAPH"],
    steps: [
      { do: "Enter $Y_1$ (FUNC) or $u(n)$ (SEQ)", see: "The table reads that formula. Empty Y= means a useless table." },
      { do: "2nd GRAPH", see: "That is TABLE, not GRAPH. Columns are $X$ and $Y_1$, or $n$ and $u(n)$." },
      { do: "▼ to scroll", see: "Use this to hunt when a term first exceeds a bound." },
    ],
    apply: { mode: "func", y1: "x^2-4", tblStart: -3, tblStep: 1, screen: "table" },
  },
  {
    id: "tab-tblset",
    cat: "tables",
    title: "TBLSET: start and step",
    keys: ["2nd", "window"],
    steps: [
      { do: "2nd WINDOW", see: "That is TBLSET, hiding behind WINDOW." },
      { do: "Set TblStart and ΔTbl", see: "Start $1$, step $1$ for sequences. Start $0$, step $0.5$ for a tighter function table." },
      { do: "2nd GRAPH", see: "The table now begins where you asked." },
    ],
    apply: { mode: "seq", uExpr: "7+(n-1)*2.5", tblStart: 1, tblStep: 1, screen: "tblset" },
  },
  {
    id: "seq-list",
    cat: "sequences",
    title: "seq( lists terms",
    keys: ["stat", "enter"],
    steps: [
      { do: "MODE → SEQ, or just use seq( on the home screen", see: "STAT types seq( in this tool." },
      { do: "seq(formula, n, start, end)", see: "seq(7+(n-1)*2.5,n,1,6) lists the first six arithmetic terms." },
      { do: "ENTER", see: "A list in braces. That is $u_1$ through $u_6$." },
    ],
    apply: { mode: "seq", line: "seq(7+(n-1)*2.5,n,1,6)" },
  },
  {
    id: "seq-sum",
    cat: "sequences",
    title: "sum(seq( for $S_n$",
    keys: ["MATH", "sum(", "enter"],
    steps: [
      { do: "Wrap seq( in sum(", see: "$S_n$ is the sum of the listed terms, not the last term." },
      { do: "sum(seq($u_n$, n, 1, n))", see: "Here $S_{20}$ for $u_n=7+(n-1)2.5$." },
      { do: "Check $|r|<1$ yourself before an infinite sum", see: "The GDC will still add $n$ terms even if $S_{\\infty}$ does not exist." },
    ],
    apply: { mode: "seq", line: "sum(seq(7+(n-1)*2.5,n,1,20))" },
  },
  {
    id: "seq-un-graph",
    cat: "sequences",
    title: "Graph $u(n)$ as points",
    keys: ["mode", "y=", "GRAPH"],
    steps: [
      { do: "MODE → 4:SEQ", see: "y= now edits $u(n)$, not $Y_1$." },
      { do: "Type the formula in $n$", see: "Example: $7+(n-1)2.5$." },
      { do: "GRAPH", see: "Dots, not a filled curve — a sequence is a list of points." },
    ],
    apply: { mode: "seq", uExpr: "7+(n-1)*2.5", xmin: 0, xmax: 12, ymin: 0, ymax: 40, screen: "graph" },
  },
  {
    id: "seq-logn",
    cat: "sequences",
    title: "Find $n$ with logs",
    keys: ["log", "÷", "enter"],
    steps: [
      { do: "From $u_1 r^{n-1}=K$", see: "$n-1=\\log(K/u_1)/\\log r$." },
      { do: "Type it, ENTER", see: "Then take the integer the question wants, and check $u_n$ and $u_{n-1}$." },
    ],
    apply: { mode: "seq", line: "log(1000/5)/log(2)+1" },
  },
];

export function lessonById(id) {
  return gdcLessons.find((l) => l.id === id) || gdcLessons[0];
}

export function lessonsIn(cat) {
  return gdcLessons.filter((l) => l.cat === cat);
}
