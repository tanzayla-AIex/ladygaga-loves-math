export const problems = [
  {
    id: "as1",
    skill: "asum-basic",
    level: "foundation",
    prompt: "An arithmetic series has five terms. The first term is $2$ and the last term is $32$. Find the sum of the series.",
    answer: { type: "number", value: 85 },
    input: { kind: "text", placeholder: "S5" },
    need: {
      goal: "$S_5$",
      have: "$n=5$, $u_1=2$ and $u_5=32$",
      first: "You already have first and last, so the booklet form $S_n=\\dfrac{n}{2}(u_1+u_n)$ is the one that matches. You do not need $d$ — finding it would be extra work.",
    },
    hints: [
      {
        k: "Why this formula, not the other one",
        b: "The formula booklet gives two versions of $S_n$. Use the one whose ingredients you have. Here that is first and last, not first and $d$.",
      },
      {
        k: "Substitute",
        b: "$S_5=\\dfrac{5}{2}(2+32)=\\dfrac{5}{2}\\times 34=85$.",
      },
    ],
    solution: "$S_5=85$.",
  },
  {
    id: "as2",
    skill: "asum-basic",
    level: "practice",
    prompt: "For the arithmetic sequence $11,\\ 15,\\ 19,\\ 23,\\ \\ldots$, find $S_{20}$.",
    answer: { type: "number", value: 980 },
    input: { kind: "text", placeholder: "S20" },
    need: {
      goal: "$S_{20}$, the sum of the first $20$ terms",
      have: "the list, so $u_1=11$ and $d=4$, and $n=20$",
      first: "This is a total, not the $20^{\\text{th}}$ term. After reading $d$ from the list, use $S_n=\\dfrac{n}{2}\\bigl(2u_1+(n-1)d\\bigr)$.",
    },
    hints: [
      {
        k: "Why $S_{20}$ is not $u_{20}$",
        b: "Students often find the $20^{\\text{th}}$ term and stop. $u_{20}$ is one number; $S_{20}$ is the sum of twenty numbers.",
      },
      {
        k: "Booklet formula",
        b: "$d=15-11=4$. Then $S_{20}=\\dfrac{20}{2}\\bigl(2\\times 11+19\\times 4\\bigr)=10(22+76)=10\\times 98=980$.",
      },
    ],
    solution: "$S_{20}=980$.",
  },
  {
    id: "as3",
    skill: "asum-basic",
    level: "practice",
    prompt: "Find the sum of the arithmetic series $17+27+37+\\cdots+417$.",
    answer: { type: "number", value: 8897 },
    input: { kind: "text", placeholder: "sum" },
    need: {
      goal: "the sum of every term from $17$ to $417$",
      have: "first term, last term, and (from the list) $d=10$",
      first: "You cannot use $\\dfrac{n}{2}(u_1+u_n)$ until you know $n$. Find $n$ by setting $u_n=417$, then sum.",
    },
    hints: [
      {
        k: "Why $n$ has to be found first",
        b: "The last term is $u_n=417$, but that does not tell you how many terms there are until you know $d$. From the list, $d=10$.",
      },
      {
        k: "Find $n$",
        b: "$17+10(n-1)=417 \\Rightarrow 10(n-1)=400 \\Rightarrow n=41$.",
      },
      {
        k: "Now the sum is easy",
        b: "$S_{41}=\\dfrac{41}{2}(17+417)=\\dfrac{41}{2}\\times 434=41\\times 217=8897$.",
      },
    ],
    solution: "$8897$.",
  },
  {
    id: "as4",
    skill: "asum-unknown",
    level: "practice",
    prompt: "In an arithmetic series, $u_1=-7$ and $S_{20}=620$. Find $d$.",
    answer: { type: "number", value: 4 },
    input: { kind: "text", placeholder: "d" },
    need: {
      goal: "$d$",
      have: "$u_1=-7$ and $S_{20}=620$, so $n=20$",
      first: "The sum formula is an equation in the one unknown $d$. Put the knowns into $S_n=\\dfrac{n}{2}\\bigl(2u_1+(n-1)d\\bigr)$ and solve. Watch the sign of $u_1$.",
    },
    hints: [
      {
        k: "Why we use the “$d$” form of $S_n$",
        b: "You were not given $u_{20}$. You were given $u_1$, $n$ and $S_n$, so the form with $d$ in it is the one that still has your unknown.",
      },
      {
        k: "Solve",
        b: "$620=\\dfrac{20}{2}\\bigl(2(-7)+19d\\bigr)=10(-14+19d)$. So $62=-14+19d$, $76=19d$, $d=4$.",
      },
    ],
    solution: "$d=4$.",
  },
  {
    id: "as5",
    skill: "asum-unknown",
    level: "practice",
    prompt: "The second term of an arithmetic sequence is $7$. The sum of the first four terms is $12$. Find $d$.",
    answer: { type: "number", value: -8 },
    input: { kind: "text", placeholder: "d" },
    need: {
      goal: "$d$",
      have: "$u_2=7$ and $S_4=12$",
      first: "Two facts, two unknowns $u_1$ and $d$. Translate both into equations, then substitute. Negative $d$ is allowed — the sequence may be decreasing.",
    },
    hints: [
      {
        k: "Why two equations",
        b: "Neither sentence gives you $u_1$ on its own. $u_2=7$ is $u_1+d=7$. $S_4=12$ is $\\dfrac{4}{2}(2u_1+3d)=12$, which simplifies to $2u_1+3d=6$.",
      },
      {
        k: "Substitute",
        b: "From the first equation $u_1=7-d$. Then $2(7-d)+3d=6 \\Rightarrow 14-2d+3d=6 \\Rightarrow 14+d=6$, so $d=-8$. The terms are $15,\\ 7,\\ -1,\\ -9$, which do add to $12$.",
      },
    ],
    solution: "$d=-8$ (and $u_1=15$).",
  },
  {
    id: "as6",
    skill: "asum-unknown",
    level: "challenge",
    prompt: "For the arithmetic series $2+5+8+\\cdots$, find $n$ such that $S_n=1365$.",
    answer: { type: "number", value: 30 },
    input: { kind: "text", placeholder: "n" },
    need: {
      goal: "$n$",
      have: "$u_1=2$, $d=3$, $S_n=1365$",
      first: "When $n$ is inside $S_n$, the formula becomes a quadratic. Write $S_n$ in terms of $n$, set it equal to $1365$, and keep the positive integer root.",
    },
    hints: [
      {
        k: "Why a quadratic appears",
        b: "$n$ multiplies a bracket that also contains $n$, so you get an $n^2$ term. That is normal for “find $n$ given $S_n$” on AA HL.",
      },
      {
        k: "Form the equation",
        b: "$S_n=\\dfrac{n}{2}\\bigl(4+3(n-1)\\bigr)=\\dfrac{n}{2}(3n+1)$. Then $n(3n+1)=2730$, so $3n^2+n-2730=0$.",
      },
      {
        k: "Solve",
        b: "Discriminant $1+4\\times 3\\times 2730=32761=181^2$. Then $n=\\dfrac{-1+181}{6}=30$ (discard the negative root).",
      },
    ],
    solution: "$n=30$.",
  },
  {
    id: "as7",
    skill: "asum-from-s",
    level: "practice",
    prompt: "The sum of the first $n$ terms of an arithmetic sequence is $S_n=3n^2-2n$. Find $u_1$ and $u_2$.",
    answer: { type: "list", values: [1, 7] },
    input: { kind: "text", placeholder: "u1, u2" },
    need: {
      goal: "$u_1$ and $u_2$",
      have: "a formula for $S_n$",
      first: "$u_1$ is $S_1$ — a total of one term. Then $u_2=S_2-S_1$, because $S_2$ includes the extra second term.",
    },
    hints: [
      {
        k: "Why we do not start with $d$",
        b: "You were given the sum formula, not $u_1$ and $d$. Recover terms from sums first; $d$ can wait.",
      },
      {
        k: "Two substitutions",
        b: "$S_1=3-2=1$, so $u_1=1$. $S_2=3(4)-4=8$, so $u_2=8-1=7$.",
      },
    ],
    solution: "$u_1=1$, $u_2=7$.",
  },
  {
    id: "as8",
    skill: "asum-from-s",
    level: "challenge",
    prompt: "The sum of the first $n$ terms of a sequence is $S_n=n^2+4n$ (you are not told it is arithmetic). Find an expression for $u_n$ when $n\\ge 2$. Write your answer in the form $an+b$.",
    answer: { type: "list", values: [2, 3] },
    input: { kind: "text", placeholder: "a, b for an+b" },
    need: {
      goal: "$u_n$ in the form $an+b$",
      have: "$S_n=n^2+4n$",
      first: "The question did not say arithmetic, so do not use $u_n=u_1+(n-1)d$. The safe identity is $u_n=S_n-S_{n-1}$.",
    },
    hints: [
      {
        k: "Why we refuse the arithmetic formula (for now)",
        b: "IB sometimes gives $S_n$ without saying the sequence is arithmetic. If you assume $d$ too early you can still get lucky, but the method they want is $u_n=S_n-S_{n-1}$.",
      },
      {
        k: "Subtract",
        b: "$S_{n-1}=(n-1)^2+4(n-1)=n^2+2n-3$. Then $u_n=(n^2+4n)-(n^2+2n-3)=2n+3$. So $a=2$, $b=3$.",
      },
    ],
    solution: "$u_n=2n+3$ (so $a=2$, $b=3$).",
  },
  {
    id: "as9",
    skill: "asum-sigma",
    level: "practice",
    prompt: "Find $\\displaystyle\\sum_{n=1}^{20} 3n$.",
    answer: { type: "number", value: 630 },
    input: { kind: "text", placeholder: "sum" },
    need: {
      goal: "the sum $3+6+\\cdots+60$",
      have: "an arithmetic sequence with $u_1=3$, $d=3$ and $20$ terms",
      first: "Factor out the $3$ if you like: $3\\displaystyle\\sum_{n=1}^{20}n$, and $\\sum n$ is the triangular-number formula. Or use $S_{20}$ for first $3$, last $60$.",
    },
    hints: [
      {
        k: "Why factoring helps",
        b: "A constant factor comes out of a sum. $3(1+2+\\cdots+20)$ is easier than twenty separate multiplications.",
      },
      {
        k: "Evaluate",
        b: "$3\\times\\dfrac{20\\times 21}{2}=3\\times 210=630$. Same result: $S_{20}=\\dfrac{20}{2}(3+60)=10\\times 63=630$.",
      },
    ],
    solution: "$630$.",
  },
  {
    id: "as10",
    skill: "asum-sigma",
    level: "challenge",
    prompt: "Find $\\displaystyle\\sum_{n=21}^{100} 3n$.",
    answer: { type: "number", value: 14520 },
    input: { kind: "text", placeholder: "sum" },
    need: {
      goal: "a sigma sum that does not start at $n=1$",
      have: "the same general term $3n$",
      first: "A sum from $21$ to $100$ is “all the way to $100$, minus the first $20$.” Write $\\displaystyle\\sum_{n=1}^{100}3n-\\sum_{n=1}^{20}3n$.",
    },
    hints: [
      {
        k: "Why we subtract two full sums",
        b: "The booklet formulae start at the first term. There is no new formula for “start in the middle” — you take a difference of two $S_n$ values. This is the same idea as $B-A=C$ earlier.",
      },
      {
        k: "Compute",
        b: "$3\\left(\\dfrac{100\\times 101}{2}-\\dfrac{20\\times 21}{2}\\right)=3(5050-210)=3\\times 4840=14520$.",
      },
    ],
    solution: "$14520$.",
  },
  {
    id: "as14",
    skill: "asum-sigma",
    level: "practice",
    prompt: "Let $A=\\displaystyle\\sum_{r=1}^{10}(2r+1)$, $B=\\displaystyle\\sum_{r=1}^{20}(2r+1)$ and $C=\\displaystyle\\sum_{r=11}^{20}(2r+1)$. Find $B-A$.",
    answer: { type: "number", value: 320 },
    input: { kind: "text", placeholder: "B − A" },
    need: {
      goal: "$B-A$",
      have: "the same general term $2r+1$, with different limits",
      first: "You do not have to expand twenty terms. $B$ is “the first twenty” and $A$ is “the first ten”, so $B-A$ is exactly the leftover block $C$. Then use the arithmetic-sum formula on that block.",
    },
    hints: [
      {
        k: "Why $B-A$ is $C$",
        b: "Adding from $r=1$ to $20$ is adding $1$ to $10$, then $11$ to $20$. So $B=A+C$, hence $B-A=C$. This is the same split as in unit 01, now with enough terms to need $S_n$.",
      },
      {
        k: "Now it is an arithmetic series",
        b: "For $r=11$ to $r=20$, the terms are $23,\\ 25,\\ \\ldots,\\ 41$. That is $10$ terms of an arithmetic sequence with first term $23$ and last term $41$.",
      },
      {
        k: "Use the booklet sum",
        b: "$S=\\dfrac{10}{2}(23+41)=5\\times 64=320$. Check: $A=\\dfrac{10}{2}(3+21)=120$ and $B=\\dfrac{20}{2}(3+41)=440$, so $B-A=320$ as well.",
      },
    ],
    solution: "$B-A=320$.",
  },
  {
    id: "as11",
    skill: "asum-word",
    level: "practice",
    prompt: "Arturo swims $200\\,\\text{m}$ in week $1$ and $30\\,\\text{m}$ more each week, for $52$ weeks. How far does he swim altogether?",
    answer: { type: "number", value: 50180 },
    input: { kind: "text", placeholder: "total metres" },
    need: {
      goal: "$S_{52}$",
      have: "$u_1=200$, $d=30$, $n=52$",
      first: "The word “altogether” is the signal for a sum. Finding only the last week would answer a different question.",
    },
    hints: [
      {
        k: "Why this is $S_n$, not $u_n$",
        b: "“How far in the final week?” would be $u_{52}$. “How far altogether?” adds every week: $S_{52}$.",
      },
      {
        k: "Sum",
        b: "$u_{52}=200+51\\times 30=1730$, then $S_{52}=\\dfrac{52}{2}(200+1730)=26\\times 1930=50180$.",
      },
    ],
    solution: "$50180\\,\\text{m}$.",
  },
  {
    id: "as12",
    skill: "asum-word",
    level: "challenge",
    prompt: "An $81\\,\\text{m}$ rope is cut into $n$ pieces whose lengths form an arithmetic sequence. The shortest piece is $1.5\\,\\text{m}$ and the longest is $7.5\\,\\text{m}$. Find $n$.",
    answer: { type: "number", value: 18 },
    input: { kind: "text", placeholder: "n" },
    need: {
      goal: "$n$",
      have: "total length $S_n=81$, $u_1=1.5$, $u_n=7.5$",
      first: "You have first, last and the sum. That is exactly the ingredients of $S_n=\\dfrac{n}{2}(u_1+u_n)$. Find $n$ before $d$.",
    },
    hints: [
      {
        k: "Why $d$ can wait",
        b: "People reach for $d=\\dfrac{7.5-1.5}{n-1}$ and then get stuck with two unknowns. The sum formula already has $n$ as the only unknown.",
      },
      {
        k: "Solve",
        b: "$81=\\dfrac{n}{2}(1.5+7.5)=\\dfrac{n}{2}\\times 9=4.5n$, so $n=18$.",
      },
    ],
    solution: "$n=18$.",
  },
  {
    id: "as13",
    skill: "asum-word",
    level: "challenge",
    prompt: "Find the sum of all multiples of $8$ between $1$ and $900$ inclusive.",
    answer: { type: "number", value: 50624 },
    input: { kind: "text", placeholder: "sum" },
    need: {
      goal: "the sum $8+16+\\cdots+896$",
      have: "an arithmetic sequence of multiples of $8$",
      first: "$900$ itself is not a multiple of $8$, so the last term is not $900$. Find the last multiple of $8$ that is still $\\le 900$, then find how many terms, then sum.",
    },
    hints: [
      {
        k: "Why the last term is $896$, not $900$",
        b: "$8\\times 112=896$ and $8\\times 113=904>900$. Inclusive of $900$ does not magically include a term that is not a multiple of $8$.",
      },
      {
        k: "Sum the $112$ terms",
        b: "$S=\\dfrac{112}{2}(8+896)=56\\times 904=50624$. Equivalently $8(1+2+\\cdots+112)=8\\times\\dfrac{112\\times 113}{2}$.",
      },
    ],
    solution: "$50624$.",
  },
];
