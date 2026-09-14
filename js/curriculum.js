export const units = [
  {
    id: "start",
    index: "01",
    title: "What a sequence is",
    blurb: "IB notation $u_n$ and $S_n$, explicit and recursive formulae, sigma notation. Haese Core Topics HL 1, Chapter 5A (and a first look at 5F).",
    skills: [
      { id: "seq-notation", name: "Read $u_n$ and $S_n$", problemIds: ["s1", "s2", "s3"] },
      { id: "seq-explicit", name: "Use an explicit formula", problemIds: ["s4", "s5"] },
      { id: "seq-recursive", name: "Follow a recursive recipe", problemIds: ["s6", "s7"] },
      { id: "seq-sigma", name: "Expand a short sum", problemIds: ["s8", "s9", "s10"] },
    ],
    lessons: [
      {
        id: "start-ib",
        title: "How AA HL writes sequences",
        minutes: 7,
        sections: [
          {
            type: "say",
            html: "This course is <b>Mathematics: analysis and approaches HL</b>, taught from Haese Core Topics HL 1, Chapter 5. Learn the letters first. Formulae arrive later, one idea at a time.",
          },
          {
            type: "letters",
            items: [
              { tex: "u_n", name: "$n^{\\text{th}}$ term", when: "every list" },
              { tex: "u_1", name: "first term", when: "the start" },
              { tex: "S_n", name: "sum of first $n$", when: "running total" },
              { tex: "d", name: "common difference", when: "from unit 02", later: true },
              { tex: "r", name: "common ratio", when: "from unit 04", later: true },
              { tex: "S_{\\infty}", name: "infinite sum", when: "from unit 05", later: true },
            ],
          },
          {
            type: "cards",
            items: [
              { title: "Write down", body: "Immediate. Almost no working." },
              { title: "Find / calculate", body: "Get the value and show the steps." },
              { title: "Show that", body: "The answer is given. Marks are the path." },
              { title: "Hence", body: "Reuse the last part. Do not start over." },
              { title: "Explain", body: "One short reason — often why $S_{\\infty}$ exists." },
              { title: "Paper 1 / 2", body: "P1: no calculator, exact. P2: GDC allowed." },
            ],
          },
        ],
      },
      {
        id: "start-list",
        title: "A list with positions",
        minutes: 6,
        sections: [
          {
            type: "say",
            html: "A sequence is a list in a definite order. Tap a seat: the chair is the position $n$, the card is the value $u_n$.",
          },
          { type: "seats", terms: [2, 5, 10, 3, 7] },
          {
            type: "watch",
            html: "<strong>Index vs value.</strong> In $2,5,10,\\ldots$ the third term is $10$, not $3$. $n$ is the seat. $u_n$ is who sits there.",
          },
        ],
      },
      {
        id: "start-sums",
        title: "Running totals $S_n$",
        minutes: 6,
        sections: [
          {
            type: "say",
            html: "$S_n$ is everything up to term $n$. Watch the stack grow — each bar is the running total, not the single term.",
          },
          {
            type: "bars",
            title: "Sequence $4,7,10,13$",
            values: [4, 11, 21, 34],
            labels: ["4", "11", "21", "34"],
            names: ["$S_1$", "$S_2$", "$S_3$", "$S_4$"],
            caption: "$S_1=4$, $S_2=4+7=11$, $S_3=11+10=21$, $S_4=21+13=34$.",
          },
          {
            type: "demo",
            title: "Peel off one term",
            next: "Show the peel",
            stages: [
              {
                html: "$S_4$ is the whole stack $34$. $S_3$ is the stack without the last block, $21$.",
              },
              {
                html: "What is left is the last term: $$u_4=S_4-S_3=34-21=13$$ In general $u_n=S_n-S_{n-1}$.",
              },
            ],
          },
        ],
      },
      {
        id: "start-rules",
        title: "Two kinds of rule",
        minutes: 8,
        sections: [
          {
            type: "compare",
            left: {
              title: "Explicit — plug in $n$",
              body: "$u_n=10n$. Position in, term out.",
              terms: [10, 20, 30],
            },
            right: {
              title: "Recursive — a recipe",
              body: "$u_1=10$, then $u_{n+1}=u_n+10$.",
              terms: [10, 20, 30],
              jumps: ["+10", "+10"],
            },
          },
          {
            type: "walk",
            title: "Follow the recipe. Do not skip.",
            terms: [10, 20, 30, 40],
            jumps: ["+10", "+10", "+10"],
            notes: [
              "Given: $u_1=10$.",
              "Apply once: $u_2=10+10=20$.",
              "Apply again: $u_3=20+10=30$.",
              "Same list as $u_n=10n$ — two descriptions, one sequence.",
            ],
          },
          {
            type: "watch",
            html: "<strong>Starting index.</strong> Some books start at $n=0$. Here, sequences start at $n=1$ unless a problem says otherwise.",
          },
        ],
      },
      {
        id: "start-sigma",
        title: "Sigma notation",
        minutes: 6,
        sections: [
          {
            type: "say",
            html: "Sigma is an “add these” machine. Bottom: where the index starts. Top: where it stops. Write every term, then add.",
          },
          {
            type: "sigma",
            tex: "\\sum_{r=1}^{3}(2r)",
            index: "r",
            from: 1,
            terms: ["2(1)=2", "2(2)=4", "2(3)=6"],
            total: "Add: $2+4+6=12$.",
          },
          {
            type: "split",
            total: 6,
            cut: 3,
          },
          {
            type: "say",
            html: "For a short leftover block, expand and add. You do not need an arithmetic-series formula yet — that is unit 03.",
          },
        ],
      },
    ],
  },
  {
    id: "arith",
    index: "02",
    title: "Arithmetic sequences",
    blurb: "Syllabus 1.2 · Haese 5B: common difference $d$, the formula $u_n=u_1+(n-1)d$, finding $n$, and applications.",
    skills: [
      { id: "arith-id", name: "Spot $d$ and continue a list", problemIds: ["a1", "a2", "a3"] },
      { id: "arith-nth", name: "Use $u_n=u_1+(n-1)d$", problemIds: ["a4", "a5", "a6"] },
      { id: "arith-two", name: "Two given terms $\\to$ $u_1$ and $d$", problemIds: ["a7", "a8", "a9", "a15"] },
      { id: "arith-n", name: "Find $n$ or count terms", problemIds: ["a10", "a11", "a12"] },
      { id: "arith-word", name: "Applications (find $u_n$)", problemIds: ["a13", "a14"] },
    ],
    lessons: [
      {
        id: "arith-d",
        title: "The common difference",
        minutes: 7,
        sections: [
          {
            type: "say",
            html: "Arithmetic means the <em>same add</em> every step. That add is $d$. Negative $d$ walks backwards.",
          },
          {
            type: "hops",
            start: 11,
            d: 4,
            count: 4,
            caption: "Every jump is $+4$, so $d=4$. Check: $15-11=19-15=23-19$.",
          },
          {
            type: "say",
            html: "To test three numbers $a,b,c$, see whether the middle is the average of its neighbours.",
          },
          { type: "balance", kind: "arith", a: 11, b: 15, c: 19, ok: true },
        ],
      },
      {
        id: "arith-formula",
        title: "The $n^{\\text{th}}$ term formula",
        minutes: 8,
        sections: [
          {
            type: "assemble",
            title: "Count the jumps, not the seats",
            parts: [
              { tex: "u_1", mean: "start here" },
              { op: "+" },
              { tex: "(n-1)", mean: "this many jumps" },
              { tex: "d", mean: "each jump" },
            ],
            caption: "From term $1$ to term $n$ there are $n-1$ steps. Always.",
          },
          {
            type: "hops",
            title: "$u_1=7$, $d=2.5$",
            start: 7,
            d: 2.5,
            count: 4,
            later: { n: 41, v: 107 },
            caption: "Three jumps to $u_4$. Forty jumps to $u_{41}$: $7+40\\times 2.5=107$.",
          },
          {
            type: "need",
            goal: "$u_n$ (a later term)",
            have: "any two of $u_1$, $d$, $n$ — or two terms at known positions",
            first: "If $d$ is missing, find $d$ before you hunt for $u_n$.",
          },
          {
            type: "watch",
            html: "<strong>Off-by-one.</strong> From term $1$ to term $5$ there are $4$ steps, not $5$.",
          },
        ],
      },
      {
        id: "arith-two-terms",
        title: "When you are given two terms",
        minutes: 8,
        sections: [
          {
            type: "hops",
            title: "$u_5=30$ and $u_{13}=70$",
            start: 30,
            d: 40,
            count: 2,
            labels: [5, 13],
            show: ["30", "70"],
            jump: "8\\text{ jumps}",
            caption: "The change is $70-30=40$ across $8$ jumps, so $d=40/8=5$.",
          },
          {
            type: "method",
            title: "Two known terms",
            steps: [
              { do: "Count the gap in positions", see: "$13-5=8$ jumps." },
              { do: "Divide the change in values", see: "$d=(70-30)/8=5$." },
              { do: "Walk back to $u_1$", see: "$u_5=u_1+4d \\Rightarrow 30=u_1+20 \\Rightarrow u_1=10$." },
              { do: "Check on the other given term", see: "$u_{13}=10+12\\times 5=70$. Matches." },
            ],
          },
        ],
      },
      {
        id: "arith-find-n",
        title: "Which term is this?",
        minutes: 7,
        sections: [
          {
            type: "say",
            html: "The wall is $100$. Walk the sequence until the next jump would cross it.",
          },
          {
            type: "hops",
            start: 11,
            d: 4,
            count: 5,
            later: { n: 23, v: 99 },
            caption: "$11+(n-1)4<100 \\Rightarrow n-1<22.25$, so the last safe term is $n=23$, and $u_{23}=99$.",
          },
          {
            type: "method",
            title: "Solve for $n$",
            steps: [
              { do: "Write $u_n=u_1+(n-1)d$", see: "Here $11+(n-1)4$." },
              { do: "Set the inequality or equation", see: "Less than $100$: $<100$. Equal to a value: $=K$." },
              { do: "Solve, then take the integer that the question wants", see: "Greatest $n$ below the wall, or the exact seat if it lands on $K$." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "arith-sum",
    index: "03",
    title: "Arithmetic series",
    blurb: "Syllabus 1.3 · Haese 5F–5G: the two formulae for $S_n$, recovering $u_n$ from $S_n$, and totals in context.",
    skills: [
      { id: "asum-basic", name: "Compute $S_n$", problemIds: ["as1", "as2", "as3"] },
      { id: "asum-unknown", name: "Find $d$, $u_1$, or $n$ from a sum", problemIds: ["as4", "as5", "as6"] },
      { id: "asum-from-s", name: "$u_n$ from a formula for $S_n$", problemIds: ["as7", "as8"] },
      { id: "asum-sigma", name: "Sigma sums of linear terms", problemIds: ["as9", "as14", "as10"] },
      { id: "asum-word", name: "Totals in context", problemIds: ["as11", "as12", "as13"] },
    ],
    lessons: [
      {
        id: "asum-pair",
        title: "Why the sum formula works",
        minutes: 8,
        sections: [
          {
            type: "say",
            html: "Do not memorise $S_n$ yet. Pair the list with its reverse. Every pair becomes the same total.",
          },
          { type: "pairs", terms: [2, 9, 16, 23, 30] },
          {
            type: "assemble",
            title: "What the pairing becomes",
            parts: [
              { tex: "S_n", mean: "the sum" },
              { op: "=" },
              { tex: "\\dfrac{n}{2}", mean: "half the pairs" },
              { tex: "(u_1+u_n)", mean: "each pair’s total" },
            ],
            caption: "No last term? Replace $u_n$ by $u_1+(n-1)d$ to get the twin booklet formula.",
          },
          {
            type: "need",
            goal: "$S_n$",
            have: "$n$, and either (first and last) or (first and $d$)",
            first: "Write down $n$. Then pick the formula that matches what you already have.",
          },
        ],
      },
      {
        id: "asum-solve",
        title: "When the sum is given",
        minutes: 8,
        sections: [
          {
            type: "method",
            title: "$S_n$ is a number, $n$ is unknown",
            steps: [
              { do: "Write the $S_n$ formula you can fill", see: "Usually $\\dfrac{n}{2}\\bigl(2u_1+(n-1)d\\bigr)=K$." },
              { do: "Clear the $2$, expand, collect", see: "You get a quadratic in $n$." },
              { do: "Keep the sensible root", see: "Discard $n\\le 0$ and (almost always) a non-integer." },
            ],
          },
          {
            type: "bars",
            title: "If you are given a formula for $S_n$",
            values: [1, 8, 21, 40],
            labels: ["1", "8", "21", "40"],
            names: ["$S_1$", "$S_2$", "$S_3$", "$S_4$"],
            caption: "$u_1=S_1$. After that, peel: $u_n=S_n-S_{n-1}$. That works even if nobody said “arithmetic”.",
          },
          {
            type: "watch",
            html: "<strong>Two different questions.</strong> If the problem already says the sequence is arithmetic, you may use $u_n=u_1+(n-1)d$. If it only gives $S_n$, do not assume arithmetic until you check $u_{n+1}-u_n$.",
          },
        ],
      },
    ],
  },
  {
    id: "geo",
    index: "04",
    title: "Geometric sequences",
    blurb: "Syllabus 1.4 · Haese 5C (and 5D–5E for growth and finance): common ratio $r$, $u_n=u_1 r^{n-1}$, and the first term that exceeds a bound.",
    skills: [
      { id: "geo-id", name: "Spot $r$ and write $u_n$", problemIds: ["g1", "g2", "g3"] },
      { id: "geo-two", name: "Two terms $\\to$ $r$ and $u_1$", problemIds: ["g4", "g5", "g6"] },
      { id: "geo-n", name: "Find $n$ or the first term past a bound", problemIds: ["g7", "g8", "g9"] },
      { id: "geo-sign", name: "Negative $r$ and two possible sequences", problemIds: ["g10", "g11"] },
      { id: "geo-word", name: "Growth in context", problemIds: ["g12", "g13"] },
    ],
    lessons: [
      {
        id: "geo-r",
        title: "The common ratio",
        minutes: 7,
        sections: [
          {
            type: "say",
            html: "Geometric means the <em>same multiply</em> every step. That multiply is $r$. Boxes scale; they do not take equal steps.",
          },
          { type: "scale", terms: [10, 20, 40, 80], r: 2 },
          {
            type: "say",
            html: "To test three terms $a,b,c$, compare $b^{2}$ with $ac$.",
          },
          { type: "balance", kind: "geo", a: 10, b: 20, c: 40, ok: true },
          {
            type: "strip",
            terms: [8, -4, 2, -1],
            jumps: ["\\times(-\\tfrac{1}{2})", "\\times(-\\tfrac{1}{2})", "\\times(-\\tfrac{1}{2})"],
          },
          {
            type: "say",
            html: "A fraction for $r$ shrinks the terms. A negative $r$ flips the sign each time.",
          },
        ],
      },
      {
        id: "geo-formula",
        title: "The $n^{\\text{th}}$ term formula",
        minutes: 8,
        sections: [
          {
            type: "assemble",
            title: "Multiply $n-1$ times, not $n$",
            parts: [
              { tex: "u_1", mean: "start here" },
              { op: "\\times" },
              { tex: "r^{n-1}", mean: "this many multiplies" },
            ],
            caption: "From $u_1$ to $u_4$ is three multiplies, so $u_4=u_1 r^{3}$.",
          },
          {
            type: "walk",
            title: "$u_1=5$, $u_4=40$",
            terms: [5, 10, 20, 40, 80],
            jumps: ["\\times 2", "\\times 2", "\\times 2", "\\times 2"],
            notes: [
              "Start at $5$.",
              "One multiply.",
              "Two multiplies.",
              "$u_4=5r^{3}=40 \\Rightarrow r^{3}=8 \\Rightarrow r=2$ (real cube root).",
              "Then $u_5=5\\times 2^{4}=80$.",
            ],
          },
          {
            type: "need",
            goal: "$u_n$",
            have: "$u_1$ and $r$, or two terms at known positions",
            first: "Find $r$ first if it is missing. Then raise $r$ to the power $n-1$, not $n$. An even root of a positive number has two signs unless every term is positive.",
          },
        ],
      },
      {
        id: "geo-logs",
        title: "When $n$ is unknown",
        minutes: 7,
        sections: [
          {
            type: "method",
            title: "First term past a wall",
            steps: [
              { do: "Write $u_1 r^{n-1}>K$", see: "Or $=K$ if you want the exact seat." },
              { do: "Take logs (or the GDC solver)", see: "$n-1=\\log(K/u_1)/\\log r$." },
              { do: "Take the integer the question wants", see: "Smallest $n$ that beats the wall." },
              { do: "Check the term before and the term itself", see: "Rounding can lie. Compute $u_n$ and $u_{n-1}$." },
            ],
          },
          {
            type: "compare",
            left: {
              title: "This course: $u_1$ is the start",
              body: "$u_4$ is the fourth term of the list.",
              terms: [100, 110, 121],
            },
            right: {
              title: "Haese 5E money: often $u_0$",
              body: "$u_4$ then means “after $4$ years”.",
              terms: [100, 110, 121],
            },
          },
          {
            type: "say",
            html: "Haese 5D–5E is this same multiply in growth, decay, and compound interest. The algebra is still $u_n=u_1 r^{n-1}$.",
          },
        ],
      },
    ],
  },
  {
    id: "geo-sum",
    index: "05",
    title: "Geometric series and infinity",
    blurb: "Haese 5H–5I: finite geometric series, $S_{\\infty}$ when $|r|<1$, repeating decimals, and series in $x$.",
    skills: [
      { id: "gsum-finite", name: "Finite geometric sums", problemIds: ["gs1", "gs2", "gs3"] },
      { id: "gsum-inf", name: "Infinite sums and $|r|<1$", problemIds: ["gs4", "gs5", "gs6", "gs7"] },
      { id: "gsum-n", name: "Smallest $n$ with $S_n>K$", problemIds: ["gs8", "gs9"] },
      { id: "gsum-decimal", name: "Repeating decimals", problemIds: ["gs10"] },
      { id: "gsum-x", name: "Convergence in terms of $x$", problemIds: ["gs11", "gs12"] },
    ],
    lessons: [
      {
        id: "gsum-finite-l",
        title: "Adding a geometric list",
        minutes: 8,
        sections: [
          { type: "shift", u1: 3, r: 2, n: 4 },
          {
            type: "need",
            goal: "$S_n$",
            have: "$u_1$, $r$, and $n$",
            first: "Write $r$ as a fraction if you can. If $r=1$, every term is $u_1$ and $S_n=n u_1$. Otherwise use $S_n=u_1\\dfrac{1-r^n}{1-r}$.",
          },
        ],
      },
      {
        id: "gsum-inf-l",
        title: "Sums that go on forever",
        minutes: 8,
        sections: [
          {
            type: "say",
            html: "Keep adding forever only if the leftover $u_1 r^{n}$ fades. That happens when $|r|<1$ — inside the green band.",
          },
          { type: "window", r: 0.5 },
          {
            type: "bars",
            title: "$32,16,8,4,\\ldots$ stacking toward $64$",
            values: [32, 48, 56, 60, 62],
            labels: ["32", "48", "56", "60", "62"],
            names: ["$S_1$", "$S_2$", "$S_3$", "$S_4$", "$S_5$"],
            caption: "The missing bit halves each time. The ceiling is $S_{\\infty}=32/(1-1/2)=64$.",
          },
          {
            type: "pieces",
            terms: ["0.27", "0.0027", "\\cdots"],
            weights: [27, 3, 1],
            caption: "$0.2727\\ldots=\\dfrac{27}{100}+\\dfrac{27}{10000}+\\cdots$, first term $\\dfrac{27}{100}$, ratio $\\dfrac{1}{100}$. Then $S_{\\infty}=\\dfrac{27/100}{1-1/100}=\\dfrac{3}{11}$.",
          },
          {
            type: "method",
            title: "When $r$ is an expression in $x$",
            steps: [
              { do: "Write the common ratio", see: "Example: $r=4x-3$." },
              { do: "Impose $|r|<1$ first", see: "Solve the inequality for $x$." },
              { do: "Only then write $S_{\\infty}$", see: "$S_{\\infty}=u_1/(1-r)$, with $r$ still in $x$ if needed." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "special",
    index: "06",
    title: "Recursive formulas and special sequences",
    blurb: "Recipes that look at the previous term, triangular numbers, grouped integers. Haese 5A and 5G, plus mixed recursion beyond Chapter 5.",
    skills: [
      { id: "rec-arithgeo", name: "Recursive arithmetic and geometric", problemIds: ["r1", "r2"] },
      { id: "rec-mixed", name: "Other recursive rules", problemIds: ["r3", "r4"] },
      { id: "spec-tri", name: "Triangular piles and $S_n=n(n+1)/2$", problemIds: ["r5", "r6"] },
      { id: "spec-group", name: "Grouped patterns", problemIds: ["r7"] },
    ],
    lessons: [
      {
        id: "rec-lesson",
        title: "Recursion as a recipe",
        minutes: 8,
        sections: [
          {
            type: "compare",
            left: {
              title: "Arithmetic recipe",
              body: "$u_{n+1}=u_n+d$",
              terms: [4, 7, 10],
              jumps: ["+3", "+3"],
            },
            right: {
              title: "Geometric recipe",
              body: "$u_{n+1}=r\\,u_n$",
              terms: [7, 14, 28],
              jumps: ["\\times 2", "\\times 2"],
            },
          },
          {
            type: "say",
            html: "Other recipes mix add and multiply. Feed the output back in as the next input.",
          },
          { type: "machine", input: 10, output: 30, rule: "$\\times 2$, then $+10$" },
          {
            type: "walk",
            title: "$u_1=10$, $u_{n+1}=2u_n+10$",
            terms: [10, 30, 70],
            jumps: ["\\times 2+10", "\\times 2+10"],
            notes: [
              "Given $u_1=10$.",
              "$u_2=2\\times 10+10=30$.",
              "$u_3=2\\times 30+10=70$. Only now may you add for $S_3$.",
            ],
          },
        ],
      },
      {
        id: "spec-lesson",
        title: "Triangular numbers and groups",
        minutes: 8,
        sections: [
          { type: "dots", n: 5 },
          {
            type: "method",
            title: "Given a pile total $S$",
            steps: [
              { do: "Set $\\dfrac{n(n+1)}{2}=S$", see: "That is $n^{2}+n-2S=0$." },
              { do: "Keep the positive integer root", see: "That $n$ is the number of rows." },
            ],
          },
          {
            type: "groups",
            sizes: [1, 4, 7, 10],
            caption: "Group sizes $1,4,7,10,\\ldots$ are themselves arithmetic. The last integer in group $n$ is the arithmetic sum of those sizes.",
          },
        ],
      },
    ],
  },
  {
    id: "mixed",
    index: "07",
    title: "Mixing arithmetic and geometric",
    blurb: "AHL favourites from Haese 5B+5C+5G+5I: three terms in $k$, one sequence sitting inside another, and the greatest $S_n$.",
    skills: [
      { id: "mix-k", name: "Three terms in $k$: arithmetic or geometric", problemIds: ["m1", "m2", "m3"] },
      { id: "mix-inside", name: "Arithmetic terms that form a geometric sequence", problemIds: ["m4", "m5"] },
      { id: "mix-max", name: "Greatest $S_n$ for a decreasing arithmetic sequence", problemIds: ["m6"] },
      { id: "mix-compare", name: "Compare an arithmetic sequence with a geometric one", problemIds: ["m7", "m8"] },
    ],
    lessons: [
      {
        id: "mix-k-l",
        title: "Three terms and a letter $k$",
        minutes: 9,
        sections: [
          {
            type: "say",
            html: "You are given three terms in $k$. Pick a door — do not recycle the $k$ from the other door.",
          },
          {
            type: "doors",
            left: {
              title: "Make them arithmetic",
              test: "$2u_2=u_1+u_3$",
              body: "Linear in $k$. One value. Then read $d$.",
            },
            right: {
              title: "Make them geometric",
              test: "$u_2^{2}=u_1 u_3$",
              body: "Usually quadratic. Two values of $k$. The obvious one is often already used — find the other, then $r=u_2/u_1$.",
            },
          },
          {
            type: "watch",
            html: "<strong>After $r$.</strong> If $|r|\\ge 1$, $S_{\\infty}$ does not exist. If $r=-1$, the even partial sums $S_{2m}$ are $0$.",
          },
        ],
      },
      {
        id: "mix-hidden",
        title: "One sequence inside another",
        minutes: 8,
        sections: [
          {
            type: "compare",
            left: {
              title: "Geometric list",
              body: "First two terms $A$, $B$.",
              terms: ["A", "B", "\\cdots"],
              jumps: ["\\times r"],
            },
            right: {
              title: "Those same numbers, arithmetic",
              body: "$u_1=A$ and $u_{11}=B$, so $d=\\dfrac{B-A}{10}$.",
              terms: ["A", "\\cdots", "B"],
            },
          },
          {
            type: "bars",
            title: "Decreasing arithmetic: $S_n$ rises, then falls",
            values: [20, 34, 42, 44, 40],
            labels: ["20", "34", "42", "44", "40"],
            names: ["$S_1$", "$S_2$", "$S_3$", "$S_4$", "$S_5$"],
            caption: "Terms $20,14,8,2,-4$. The greatest $S_n$ is at the last $n$ with $u_n\\ge 0$. Check $S_n$ and $S_{n+1}$ around that turn.",
          },
        ],
      },
    ],
  },
  {
    id: "mastery",
    index: "08",
    title: "Mastery workshop",
    blurb: "Paper 1 / Paper 2 multi-part items, then Haese Review sets 5A and 5B.",
    skills: [
      { id: "mast-ap", name: "Arithmetic: later term and $S_n=0$", problemIds: ["x1a", "x1b"] },
      { id: "mast-zero", name: "Arithmetic: which term is zero?", problemIds: ["x2"] },
      { id: "mast-k", name: "Parameter $k$: arithmetic and geometric cases", problemIds: ["x3a", "x3b", "x3c"] },
      { id: "mast-mix", name: "Geometric sequence feeding an arithmetic sum", problemIds: ["x4a", "x4b"] },
      { id: "mast-dec", name: "Infinite series and a repeating decimal", problemIds: ["x5a", "x5b"] },
    ],
    lessons: [
      {
        id: "mast-plan",
        title: "A plan for long questions",
        minutes: 6,
        sections: [
          {
            type: "method",
            title: "Three lines before you calculate",
            steps: [
              { do: "What are we finding?", see: "A term, a sum, a value of $k$, or the greatest $S_n$." },
              { do: "What must we have?", see: "Arithmetic term: $u_1$ and $d$. Geometric term: $u_1$ and $r$. Infinite sum: $|r|<1$ first." },
              { do: "What should we find first — and why?", see: "Almost always $d$ or $r$. Every later formula is built from those." },
            ],
          },
          {
            type: "demo",
            title: "Hence is an arrow, not a reset",
            next: "Show the carry",
            stages: [
              { html: "<b>(a)</b> Find $d$ from two terms." },
              { html: "<b>(b) Hence</b> find $S_{20}$. Carry $d$ across. Do not go back to the raw list and start again." },
            ],
          },
        ],
      },
    ],
  },
];

export const formulas = [
  {
    id: "un-ap",
    title: "Arithmetic $n^{\\text{th}}$ term",
    tex: "u_n=u_1+(n-1)d",
    need: ["the first term $u_1$", "the common difference $d$", "the position $n$"],
    first: "If $d$ is unknown, find $d$ from two terms first. You cannot use this formula without it.",
  },
  {
    id: "d-ap",
    title: "Common difference from two terms",
    tex: "d=\\dfrac{u_q-u_p}{q-p}",
    need: ["two terms $u_p$ and $u_q$, and their positions $p$ and $q$"],
    first: "The denominator is how many steps lie between the two positions, not the larger index itself.",
  },
  {
    id: "sn-ap-1",
    title: "Arithmetic series (first and last)",
    tex: "S_n=\\dfrac{n}{2}(u_1+u_n)",
    need: ["$n$", "$u_1$", "$u_n$"],
    first: "Use this booklet form when the last term is already known. You do not need $d$.",
  },
  {
    id: "sn-ap-2",
    title: "Arithmetic series (first and $d$)",
    tex: "S_n=\\dfrac{n}{2}\\bigl(2u_1+(n-1)d\\bigr)",
    need: ["$n$", "$u_1$", "$d$"],
    first: "Use this twin form when you do not yet have $u_n$. Both forms are in the formula booklet.",
  },
  {
    id: "un-from-s",
    title: "A term from partial sums",
    tex: "u_1=S_1,\\qquad u_n=S_n-S_{n-1}\\ (n\\ge 2)",
    need: ["a formula, or values, for $S_n$"],
    first: "This is not in the booklet, but examiners expect it. Do not assume the sequence is arithmetic until you check $u_{n+1}-u_n$.",
  },
  {
    id: "un-gp",
    title: "Geometric $n^{\\text{th}}$ term",
    tex: "u_n=u_1 r^{n-1}",
    need: ["$u_1$", "$r$", "$n$"],
    first: "If $r$ is unknown, find it from $\\dfrac{u_q}{u_p}=r^{q-p}$. The power is the gap in the positions.",
  },
  {
    id: "sn-gp",
    title: "Finite geometric series",
    tex: "S_n=\\dfrac{u_1(r^n-1)}{r-1}=\\dfrac{u_1(1-r^n)}{1-r}\\quad (r\\neq 1)",
    need: ["$u_1$", "$r$", "$n$"],
    first: "The two forms are identical. The second is kinder when $|r|<1$. If $r=1$, then $S_n=n u_1$.",
  },
  {
    id: "sinf",
    title: "Sum to infinity",
    tex: "S_{\\infty}=\\dfrac{u_1}{1-r}\\quad\\text{provided }|r|<1",
    need: ["$u_1$", "$r$ with $|r|<1$"],
    first: "Always check $|r|<1$ before using this. If $|r|\\ge 1$, write that $S_{\\infty}$ does not exist because the terms do not tend to zero.",
  },
  {
    id: "rec",
    title: "Recursive arithmetic / geometric",
    tex: "u_{n+1}=u_n+d\\qquad\\text{or}\\qquad u_{n+1}=r\\,u_n",
    need: ["the first term $u_1$", "the rule"],
    first: "Generate terms in order. A recursive rule does not let you jump to $u_{10}$ until you have an explicit formula.",
  },
];

export function unitById(id) {
  return units.find((u) => u.id === id);
}

export function allProblemIds() {
  return units.flatMap((u) => u.skills.flatMap((s) => s.problemIds));
}
