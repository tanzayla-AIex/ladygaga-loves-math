/** Haese Mathematics: Core Topics HL (2019). Chapter 5 is the sequences spine for this course. */

export const haese = {
  title: "Mathematics: Core Topics HL",
  short: "Haese Core Topics HL 1",
  authors: "Haese, Humphries, Sangwin and Vo (2019)",
  file: "resources/haese-core-topics-hl-1.pdf",
  chapter: "Chapter 5 · Sequences and series",
  pages: "89–129",
  isbn: "978-1-925489-58-3",
};

export const chapter5 = [
  { id: "5", name: "Chapter opener", page: 89, unit: "start" },
  { id: "5A", name: "Number sequences", page: 90, unit: "start" },
  { id: "5B", name: "Arithmetic sequences", page: 92, unit: "arith" },
  { id: "5C", name: "Geometric sequences", page: 98, unit: "geo" },
  { id: "5D", name: "Growth and decay", page: 101, unit: "geo" },
  { id: "5E", name: "Financial mathematics", page: 103, unit: "geo" },
  { id: "5F", name: "Series", page: 111, unit: "arith-sum" },
  { id: "5G", name: "Arithmetic series", page: 114, unit: "arith-sum" },
  { id: "5H", name: "Finite geometric series", page: 119, unit: "geo-sum" },
  { id: "5I", name: "Infinite geometric series", page: 123, unit: "geo-sum" },
  { id: "5A-rev", name: "Review set 5A", page: 126, unit: "mastery" },
  { id: "5B-rev", name: "Review set 5B", page: 128, unit: "mastery" },
];

const byId = Object.fromEntries(chapter5.map((s) => [s.id, s]));

export const lessonRead = {
  "start-ib": {
    refs: ["5", "5A"],
    note: "Skim the chapter opener and 5A so the letters $u_n$ match the book. Do not skip ahead to the sum formulae in 5F–5I yet.",
  },
  "start-list": {
    refs: ["5A"],
    note: "Number sequences: a list in order, the $n^{\\text{th}}$ term $u_n$, and writing the next few terms from a rule.",
  },
  "start-sums": {
    refs: ["5F"],
    note: "Haese names the running total $S_n$ when they reach series (p. 111). We meet $S_n$ as “add the first $n$ terms” here, then return to 5F in unit 03 with the closed formulae.",
  },
  "start-rules": {
    refs: ["5A"],
    note: "Explicit rules $u_n=\\ldots$ live in 5A. Recursive recipes $u_{n+1}=\\ldots$ are the same idea written as “next term from this term”.",
  },
  "start-sigma": {
    refs: ["5F"],
    note: "Sigma notation is introduced with series in 5F. This lesson only expands a short sum. The booklet $S_n$ formulae wait until 5G and 5H.",
  },
  "arith-d": {
    refs: ["5B"],
    note: "Common difference $d$, continuing a list, and the test $2b=a+c$ for three arithmetic terms.",
  },
  "arith-formula": {
    refs: ["5B"],
    note: "The general term $u_n=u_1+(n-1)d$. Watch the $n-1$ steps from the first term.",
  },
  "arith-two-terms": {
    refs: ["5B"],
    note: "Finding $d$ (and then $u_1$) from two given terms at known positions.",
  },
  "arith-find-n": {
    refs: ["5B"],
    note: "Solving $u_n=K$ for $n$, and counting how many terms lie below a bound.",
  },
  "asum-pair": {
    refs: ["5F", "5G"],
    note: "5F is what a series is. 5G is the arithmetic sum $S_n=\\dfrac{n}{2}(u_1+u_n)=\\dfrac{n}{2}\\bigl(2u_1+(n-1)d\\bigr)$.",
  },
  "asum-solve": {
    refs: ["5G"],
    note: "When $S_n$ is given: recover $d$, $u_1$, or $n$. If $n$ is unknown the equation is usually quadratic.",
  },
  "geo-r": {
    refs: ["5C"],
    note: "Common ratio $r=u_2/u_1$, and the test $b^2=ac$ for three geometric terms.",
  },
  "geo-formula": {
    refs: ["5C"],
    note: "$u_n=u_1 r^{n-1}$. Two given terms produce a root; an even power can give two signs.",
  },
  "geo-logs": {
    refs: ["5C", "5D"],
    note: "Finding $n$ from $u_n=K$. 5D (growth and decay) is the same formula in context. Compound interest and depreciation are 5E — syllabus 1.4, extra reading if you want the finance versions.",
  },
  "gsum-finite-l": {
    refs: ["5H"],
    note: "Finite geometric series $S_n=u_1\\dfrac{r^n-1}{r-1}$. Use the $(1-r^n)$ form when $|r|<1$.",
  },
  "gsum-inf-l": {
    refs: ["5I"],
    note: "$S_{\\infty}=\\dfrac{u_1}{1-r}$ only when $|r|<1$. Repeating decimals are infinite geometric series, as in 5I.",
  },
  "rec-lesson": {
    refs: ["5A", "5C"],
    note: "Haese writes arithmetic and geometric sequences as explicit lists. $u_{n+1}=u_n+d$ and $u_{n+1}=r\\,u_n$ are those same sequences as recipes. Mixed rules ($\\times$ and $+$) are extra practice beyond Chapter 5.",
  },
  "spec-lesson": {
    refs: ["5G"],
    note: "Triangular piles are the arithmetic series $1+2+\\cdots+n$ from 5G. Grouped integers: the group sizes themselves form an arithmetic sequence (5B), and the last integer in a group is an arithmetic series of those sizes (5G).",
  },
  "mix-k-l": {
    refs: ["5B", "5C"],
    note: "Three terms in $k$: use 5B’s arithmetic test or 5C’s geometric test, never both on the same part.",
  },
  "mix-hidden": {
    refs: ["5B", "5C", "5G", "5I"],
    note: "One sequence sitting inside another, then the greatest $S_n$ of a decreasing arithmetic sequence (5G) or $S_{\\infty}$ of a geometric one (5I).",
  },
  "mast-plan": {
    refs: ["5A-rev", "5B-rev"],
    note: "Work Review sets 5A and 5B after the in-app mastery items. They mix every section of Chapter 5 on one paper.",
  },
};

export const unitRead = {
  start: { refs: ["5A", "5F"], note: "Start in 5A. Short sigma is previewed from 5F; you do not need the sum formulae yet." },
  arith: { refs: ["5B"], note: "All of this unit is 5B. Totals $S_n$ wait for 5G." },
  "arith-sum": { refs: ["5F", "5G"], note: "Series language in 5F, then arithmetic $S_n$ in 5G." },
  geo: { refs: ["5C", "5D", "5E"], note: "5C is the core. 5D growth/decay and 5E finance are syllabus 1.4 applications of the same $r$." },
  "geo-sum": { refs: ["5H", "5I"], note: "Finite sums in 5H, infinite sums and $|r|<1$ in 5I." },
  special: { refs: ["5A", "5G"], note: "Recursive recipes sit next to 5A; triangular totals use 5G." },
  mixed: { refs: ["5B", "5C", "5G", "5I"], note: "AHL-style mixing of arithmetic and geometric, using 5B–5C and the two sum sections." },
  mastery: { refs: ["5A-rev", "5B-rev"], note: "Haese Review 5A and 5B are the textbook’s mixed papers. Use them with the in-app mastery set." },
};

export function sectionById(id) {
  return byId[id];
}

export function formatRefs(ids) {
  return (ids || [])
    .map((id) => {
      const s = byId[id];
      if (!s) return id;
      if (id === "5") return `Ch 5 p. ${s.page}`;
      return `${s.id} ${s.name} (p. ${s.page})`;
    })
    .join(" · ");
}

export function readingForLesson(lessonId) {
  return lessonRead[lessonId] || null;
}

export function readingForUnit(unitId) {
  return unitRead[unitId] || null;
}

export function pdfHref(page) {
  const extra = page ? `#page=${page}` : "";
  return `${haese.file}${extra}`;
}
