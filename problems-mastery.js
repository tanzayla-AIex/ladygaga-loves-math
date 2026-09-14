export const problems = [
  {
    id: "x1a",
    skill: "mast-ap",
    level: "mastery",
    prompt: "The first term and the $5^{\\text{th}}$ term of an arithmetic sequence are $30$ and $10$ respectively. Find the $13^{\\text{th}}$ term.",
    answer: { type: "number", value: -30 },
    input: { kind: "text", placeholder: "u13" },
    need: {
      goal: "$u_{13}$",
      have: "$u_1=30$ and $u_5=10$",
      first: "The formula for $u_{13}$ needs $d$. Between term $1$ and term $5$ there are $4$ steps, not $5$, so $d=\\dfrac{u_5-u_1}{4}$.",
    },
    hints: [
      {
        k: "Why we cannot jump straight to $u_{13}$",
        b: "You only know two terms. The booklet formula $u_n=u_1+(n-1)d$ still needs $d$. Finding $d$ is the whole of part (a)’s first job on this style of Paper 1 question.",
      },
      {
        k: "Find $d$, watching the $n-1$",
        b: "$d=\\dfrac{10-30}{5-1}=\\dfrac{-20}{4}=-5$. Using $5$ in the denominator is the usual off-by-one.",
      },
      {
        k: "Now the term you were asked for",
        b: "$u_{13}=30+(13-1)(-5)=30-60=-30$. Negative is fine: the sequence is decreasing.",
      },
    ],
    solution: "$u_{13}=-30$.",
  },
  {
    id: "x1b",
    skill: "mast-ap",
    level: "mastery",
    prompt: "For the same arithmetic sequence ($u_1=30$, $d=-5$), the sum of the first $n$ terms is zero. Find $n$.",
    answer: { type: "number", value: 13 },
    input: { kind: "text", placeholder: "n" },
    need: {
      goal: "$n$ with $S_n=0$",
      have: "$u_1=30$, $d=-5$",
      first: "Set $S_n=0$. For $n\\neq 0$ the bracket in $\\dfrac{n}{2}\\bigl(2u_1+(n-1)d\\bigr)$ must be zero. You are not being asked for a term this time — “the sum of the first $n$ terms is zero” is $S_n$.",
    },
    hints: [
      {
        k: "Why the bracket, not $n$, is what we set to zero",
        b: "A product is zero only if a factor is zero. $n$ is a number of terms, so $n>0$. That leaves $2u_1+(n-1)d=0$.",
      },
      {
        k: "Solve",
        b: "$60+(n-1)(-5)=0 \\Rightarrow 60-5n+5=0 \\Rightarrow 65=5n \\Rightarrow n=13$. The list runs $30,\\ 25,\\ \\ldots$ down through $0$ and symmetrically back; the totals cancel at $n=13$.",
      },
    ],
    solution: "$n=13$. (The terms walk from $30$ down through $0$ at $u_7$ and the list is symmetric about zero.)",
  },
  {
    id: "x2",
    skill: "mast-zero",
    level: "mastery",
    prompt: "For an arithmetic sequence, $u_{10}=20$ and $S_{25}=125$. Find $k$ such that $u_k=0$.",
    answer: { type: "number", value: 14 },
    input: { kind: "text", placeholder: "k" },
    need: {
      goal: "the position $k$ of the zero term",
      have: "one term and one sum — not yet $u_1$ or $d$",
      first: "Turn both facts into equations in $u_1$ and $d$. Find $d$ (and $u_1$) before you set $u_k=0$.",
    },
    hints: [
      {
        k: "Why two equations before $u_k=0$",
        b: "You were not given $u_1$ or $d$. “Which term is zero?” needs both. Translate $u_{10}=20$ as $u_1+9d=20$, and $S_{25}=125$ as $u_1+12d=5$.",
      },
      {
        k: "Subtract to get $d$",
        b: "$(u_1+12d)-(u_1+9d)=5-20 \\Rightarrow 3d=-15 \\Rightarrow d=-5$. Then $u_1=20-9(-5)=65$.",
      },
      {
        k: "Now the zero term",
        b: "$65+(k-1)(-5)=0 \\Rightarrow k-1=13 \\Rightarrow k=14$. We needed $u_1$ and $d$ first because $u_k=0$ is one equation with those two unknowns still in it.",
      },
    ],
    solution: "$k=14$.",
  },
  {
    id: "x3a",
    skill: "mast-k",
    level: "mastery",
    prompt: "A sequence has $u_1=k-5$, $u_2=3-2k$, $u_3=5k+3$. If the sequence is arithmetic, find $k$.",
    answer: { type: "number", value: 0.8 },
    input: { kind: "text", placeholder: "k" },
    need: {
      goal: "$k$",
      have: "three terms in $k$, arithmetic case",
      first: "Use $2u_2=u_1+u_3$. This is linear — one value of $k$.",
    },
    hints: [
      {
        k: "Why the arithmetic test, not the geometric one",
        b: "This part says the sequence is arithmetic, so equal gaps: $2u_2=u_1+u_3$. The geometric condition $u_2^2=u_1 u_3$ is a later part with a different $k$.",
      },
      {
        k: "Solve the linear equation",
        b: "$2(3-2k)=(k-5)+(5k+3) \\Rightarrow 6-4k=6k-2 \\Rightarrow 8=10k \\Rightarrow k=\\dfrac{4}{5}$. (Paper 1: leave it as $\\dfrac{4}{5}$, not $0.8$, unless you prefer the decimal.)",
      },
    ],
    solution: "$k=\\dfrac{4}{5}$. Then $u_3=7$.",
  },
  {
    id: "x3b",
    skill: "mast-k",
    level: "mastery",
    prompt: "For the same general terms as the previous question, now take $k=12$. The first three terms form a geometric sequence. Find the common ratio $r$. Then explain: does $S_\\infty$ exist? Enter the common ratio only (the infinite sum does not exist because $|r|>1$).",
    answer: { type: "number", value: -3 },
    input: { kind: "text", placeholder: "r" },
    need: {
      goal: "$r$ when $k=12$",
      have: "the three formulas in $k$",
      first: "Substitute $k=12$ to get the three numbers, then $r=u_2/u_1$. Check it matches $u_3/u_2$.",
    },
    hints: [
      {
        k: "Why we substitute $k=12$ first",
        b: "The three formulae are still in $k$. Until you put $k=12$ in, you cannot see $r$. “Show that the first three terms form a geometric sequence” means compute them, then check $\\dfrac{u_2}{u_1}=\\dfrac{u_3}{u_2}$.",
      },
      {
        k: "The three terms and $r$",
        b: "$u_1=7$, $u_2=3-24=-21$, $u_3=63$. Then $r=\\dfrac{-21}{7}=-3$ and $\\dfrac{63}{-21}=-3$. Same ratio, so geometric.",
      },
      {
        k: "Why $S_{\\infty}$ does not exist",
        b: "$|r|=3>1$, so the terms grow rather than tend to $0$. The booklet formula for $S_{\\infty}$ is only valid when $|r|<1$. That one sentence is the explain mark.",
      },
    ],
    solution: "$r=-3$. $S_\\infty$ does not exist.",
  },
  {
    id: "x3c",
    skill: "mast-k",
    level: "mastery",
    prompt: "The same sequence is geometric for a second value of $k$ (not $12$). Find that value of $k$.",
    answer: { type: "number", value: -2 },
    input: { kind: "text", placeholder: "the other k" },
    need: {
      goal: "the other root of the geometric condition",
      have: "$u_1=k-5$, $u_2=3-2k$, $u_3=5k+3$",
      first: "Set $u_2^2=u_1 u_3$. You should get a quadratic. One root is $k=12$; the other is what we want.",
    },
    hints: [
      {
        k: "Why a quadratic this time",
        b: "Geometric means $u_2^2=u_1 u_3$. Expanding gives a quadratic, so two roots can work. One of them is the $k=12$ you have already used; the question wants the other.",
      },
      {
        k: "Expand",
        b: "$(3-2k)^2=(k-5)(5k+3)$. Left: $9-12k+4k^2$. Right: $5k^2-22k-15$. So $0=k^2-10k-24=(k-12)(k+2)$.",
      },
      {
        k: "The second root",
        b: "Discard $k=12$. The other value is $k=-2$. The terms are $-7,\\ 7,\\ -7$ with $r=-1$, and the even partial sums $S_{2m}$ are $0$.",
      },
    ],
    solution: "$k=-2$. The terms are $-7,7,-7$ with $r=-1$, so $S_{2m}=0$.",
  },
  {
    id: "x4a",
    skill: "mast-mix",
    level: "mastery",
    prompt: "A geometric sequence has first term $50$ and fourth term $3.2$. Find the second term (take the real common ratio).",
    answer: { type: "number", value: 20 },
    input: { kind: "text", placeholder: "u2" },
    need: {
      goal: "$u_2$",
      have: "$u_1=50$, $u_4=3.2$",
      first: "Find $r$ from $50 r^3=3.2$, then $u_2=50r$.",
    },
    hints: [
      { k: "Equation for $r$", b: "$r^3=3.2/50=0.064$, so $r=0.4$." },
      { k: "Second term", b: "$u_2=50\\times 0.4$." },
    ],
    solution: "$20$.",
  },
  {
    id: "x4b",
    skill: "mast-mix",
    level: "mastery",
    prompt: "The first two terms of that geometric sequence ($50$ and $20$) are also the first term and the $11$th term of an arithmetic sequence. Find the greatest value of $S_n$ for this arithmetic sequence.",
    answer: { type: "number", value: 442 },
    input: { kind: "text", placeholder: "greatest Sn" },
    need: {
      goal: "maximum $S_n$ of the AP",
      have: "AP with $u_1=50$ and $u_{11}=20$",
      first: "Find $d$ from those two arithmetic terms. Then find the last positive term and compare nearby sums.",
    },
    hints: [
      { k: "Find $d$ first", b: "$50+10d=20 \\Rightarrow d=-3$." },
      { k: "When terms hit zero", b: "$50+(n-1)(-3)=0 \\Rightarrow n-1=50/3\\approx 16.67$. So $u_{17}>0$ and $u_{18}<0$." },
      { k: "Compare sums", b: "$S_{17}=\\frac{17}{2}\\bigl(100+16(-3)\\bigr)=\\frac{17}{2}\\times 52=442$. $S_{18}=442+u_{18}$ is smaller." },
    ],
    solution: "$442$.",
  },
  {
    id: "x5a",
    skill: "mast-dec",
    level: "mastery",
    prompt: "Find the exact value of $\\displaystyle\\sum_{k=0}^{\\infty}\\dfrac{47}{1000}\\left(\\dfrac{1}{100}\\right)^k$ as a fraction in lowest terms. Enter numerator, then denominator.",
    answer: { type: "list", values: [47, 990] },
    input: { kind: "text", placeholder: "numerator, denominator" },
    need: {
      goal: "$S_\\infty$ in lowest terms",
      have: "a geometric series starting at $k=0$",
      first: "Read $u_1=47/1000$ and $r=1/100$. Check $|r|<1$, then $u_1/(1-r)$.",
    },
    hints: [
      { k: "Identify $u_1$ and $r$", b: "The $k=0$ term is $47/1000$. Each next term multiplies by $1/100$." },
      { k: "Formula", b: "$S_\\infty=\\dfrac{47/1000}{99/100}=\\dfrac{47}{990}$." },
    ],
    solution: "$47/990$.",
  },
  {
    id: "x5b",
    skill: "mast-dec",
    level: "mastery",
    prompt: "Use the previous sum to write the repeating decimal $0.2474747\\ldots$ as a fraction in lowest terms. Enter numerator, then denominator.",
    answer: { type: "list", values: [49, 198] },
    input: { kind: "text", placeholder: "numerator, denominator" },
    need: {
      goal: "$0.2474747\\ldots$ as a reduced fraction",
      have: "$0.0474747\\ldots=47/990$ from the previous series",
      first: "Split off the non-repeating $0.2$, then add $47/990$.",
    },
    hints: [
      { k: "Split the decimal", b: "$0.2474747\\ldots=0.2+0.0474747\\ldots$." },
      { k: "Reuse part (a)", b: "$0.0474747\\ldots=47/990$." },
      { k: "Add", b: "$\\dfrac{1}{5}+\\dfrac{47}{990}=\\dfrac{198}{990}+\\dfrac{47}{990}=\\dfrac{245}{990}=\\dfrac{49}{198}$." },
    ],
    solution: "$49/198$.",
  },
];
