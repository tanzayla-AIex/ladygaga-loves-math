export const checkInKey = {
  id: "checkin",
  title: "Sequence Check-In — answer key",
  sourceTitle: "Sequence Check-In",
  file: "resources/sequence-check-in.pdf",
  marks: 40,
  intro:
    "Worked answers by question number, matching the Check-In paper. Question wording is not copied; each item names the given values so you can line it up with your copy. Paper 1 items stay exact. Paper 2 rounding is only at the end.",
  items: [
    {
      n: "1",
      marks: 6,
      about: "Arithmetic sequence with $u_1=36$ and $u_5=12$.",
      parts: [
        {
          label: "(a)",
          about: "Find $u_{13}$.",
          steps: [
            "We need $u_{13}=u_1+(13-1)d$, so the missing piece is $d$.",
            "From term 1 to term 5 there are $4$ steps: $d=\\dfrac{12-36}{4}=\\dfrac{-24}{4}=-6$. Using $5$ in the denominator is the usual off-by-one.",
            "Then $u_{13}=36+12(-6)=36-72=-36$. Negative is fine: the sequence is decreasing.",
          ],
          answer: "$u_{13}=-36$",
        },
        {
          label: "(b)",
          about: "The sum of the first $n$ terms is zero. Find $n$.",
          steps: [
            "This is $S_n=0$, not a term equal to zero.",
            "$S_n=\\dfrac{n}{2}\\bigl(72+(n-1)(-6)\\bigr)=0$. The factor $n$ is not zero, so $72-6n+6=0$.",
            "$78=6n \\Rightarrow n=13$. The list is symmetric about zero, so the totals cancel at $13$ terms.",
          ],
          answer: "$n=13$",
        },
      ],
    },
    {
      n: "2",
      marks: 6,
      about: "Arithmetic sequence with $u_{10}=16$ and $S_{25}=100$. Find $k$ such that $u_k=0$.",
      parts: [
        {
          label: "",
          about: "Find $u_1$ and $d$ first, then the zero term.",
          steps: [
            "You cannot jump to $u_k=0$ until $u_1$ and $d$ are known. Translate both facts into equations.",
            "$u_{10}=16$ means $u_1+9d=16$.",
            "$S_{25}=100$ means $\\dfrac{25}{2}(2u_1+24d)=100 \\Rightarrow u_1+12d=4$.",
            "Subtract: $(u_1+12d)-(u_1+9d)=4-16 \\Rightarrow 3d=-12 \\Rightarrow d=-4$.",
            "Then $u_1=16-9(-4)=52$.",
            "Now $u_k=0$: $52+(k-1)(-4)=0 \\Rightarrow k-1=13 \\Rightarrow k=14$.",
          ],
          answer: "$k=14$ (with $d=-4$, $u_1=52$)",
        },
      ],
    },
    {
      n: "3",
      marks: 16,
      about: "General terms $u_1=k-5$, $u_2=3-2k$, $u_3=5k+3$.",
      parts: [
        {
          label: "(a.i)",
          about: "The sequence is arithmetic. Find $k$.",
          steps: [
            "Equal gaps: $2u_2=u_1+u_3$. This is linear, so one value of $k$.",
            "$2(3-2k)=(k-5)+(5k+3) \\Rightarrow 6-4k=6k-2 \\Rightarrow 8=10k$.",
            "So $k=\\dfrac{4}{5}$. Leave it as a fraction on Paper 1.",
          ],
          answer: "$k=\\dfrac{4}{5}$",
        },
        {
          label: "(a.ii)",
          about: "Hence find $u_3$.",
          steps: [
            "Substitute the $k$ you just found: $u_3=5\\left(\\dfrac{4}{5}\\right)+3=4+3=7$.",
          ],
          answer: "$u_3=7$",
        },
        {
          label: "(b.i)",
          about: "Show that $k=12$ makes the first three terms geometric.",
          steps: [
            "Substitute first, then check the ratios. “Show that” marks are the steps.",
            "$u_1=7$, $u_2=3-24=-21$, $u_3=60+3=63$.",
            "$\\dfrac{u_2}{u_1}=\\dfrac{-21}{7}=-3$ and $\\dfrac{u_3}{u_2}=\\dfrac{63}{-21}=-3$. Same ratio, so geometric.",
          ],
          answer: "Terms $7,\\ -21,\\ 63$ with $r=-3$",
        },
        {
          label: "(b.ii)",
          about: "Why $S_{\\infty}$ does not exist.",
          steps: [
            "$|r|=3>1$, so the terms grow rather than tend to $0$.",
            "The booklet formula $S_{\\infty}=\\dfrac{u_1}{1-r}$ is only valid when $|r|<1$. That one sentence is the explain mark.",
          ],
          answer: "$|r|=3>1$",
        },
        {
          label: "(c.i)",
          about: "Show that $k^{2}-10k-24=0$.",
          steps: [
            "Geometric for a general $k$: $u_2^{2}=u_1 u_3$.",
            "$(3-2k)^{2}=(k-5)(5k+3)$. Left: $9-12k+4k^{2}$. Right: $5k^{2}-22k-15$.",
            "$0=k^{2}-10k-24$.",
          ],
          answer: "$k^{2}-10k-24=0$",
        },
        {
          label: "(c.ii)",
          about: "The first three terms for the second value of $k$.",
          steps: [
            "$(k-12)(k+2)=0$. Discard $k=12$. The other root is $k=-2$.",
            "$u_1=-2-5=-7$, $u_2=3+4=7$, $u_3=-10+3=-7$.",
          ],
          answer: "$-7,\\ 7,\\ -7$ (so $r=-1$)",
        },
        {
          label: "(c.iii)",
          about: "Write down $S_{2m}$ for this second $k$.",
          steps: [
            "With $r=-1$ the terms alternate $-7,\\ 7,\\ -7,\\ 7,\\ldots$. Each pair cancels.",
            "An even number of terms $2m$ therefore sums to $0$.",
          ],
          answer: "$S_{2m}=0$",
        },
      ],
    },
    {
      n: "4",
      marks: 7,
      about: "Geometric sequence with $u_1=80$ and $u_4=0.74088$. Then those first two geometric terms are $u_1$ and $u_{11}$ of an arithmetic sequence.",
      parts: [
        {
          label: "(a)",
          about: "Find the second geometric term (real $r$).",
          steps: [
            "$u_4=u_1 r^{3} \\Rightarrow 80 r^{3}=0.74088 \\Rightarrow r^{3}=0.009261 \\Rightarrow r=0.21$.",
            "Then $u_2=80\\times 0.21=16.8$.",
          ],
          answer: "$u_2=16.8$",
        },
        {
          label: "(b)",
          about: "Greatest $S_n$ of the arithmetic sequence, 2 d.p.",
          steps: [
            "The arithmetic sequence has first term $80$ and eleventh term $16.8$.",
            "$80+10d=16.8 \\Rightarrow d=-6.32$.",
            "Sums increase while terms are positive. $80-6.32(n-1)=0 \\Rightarrow n-1\\approx 12.66$, so $u_{13}>0$ and $u_{14}<0$.",
            "$S_{13}=\\dfrac{13}{2}\\bigl(160+12(-6.32)\\bigr)=\\dfrac{13}{2}\\times 84.16=547.04$.",
            "$S_{14}=547.04+u_{14}$ is smaller because $u_{14}<0$.",
          ],
          answer: "$547.04$",
        },
      ],
    },
    {
      n: "5",
      marks: 5,
      about: "Infinite series $\\displaystyle\\sum_{k=0}^{\\infty}\\dfrac{53}{1000}\\left(\\dfrac{1}{100}\\right)^{k}$, then the repeating decimal $0.2535353\\ldots$.",
      parts: [
        {
          label: "(a)",
          about: "Exact value of $S_{\\infty}$.",
          steps: [
            "The $k=0$ term is $u_1=\\dfrac{53}{1000}$. Each next term multiplies by $r=\\dfrac{1}{100}$.",
            "$\\left|\\dfrac{1}{100}\\right|<1$, so $S_{\\infty}=\\dfrac{53/1000}{1-1/100}=\\dfrac{53/1000}{99/100}=\\dfrac{53}{990}$.",
          ],
          answer: "$\\dfrac{53}{990}$",
        },
        {
          label: "(b)",
          about: "Express $0.2535353\\ldots$ as a reduced fraction, using (a).",
          steps: [
            "Split off the non-repeating first decimal: $0.2535353\\ldots=0.2+0.0535353\\ldots$.",
            "The repeating tail $0.0535353\\ldots$ is exactly the series in (a), so it equals $\\dfrac{53}{990}$.",
            "$0.2+\\dfrac{53}{990}=\\dfrac{1}{5}+\\dfrac{53}{990}=\\dfrac{198}{990}+\\dfrac{53}{990}=\\dfrac{251}{990}$.",
            "$251$ and $990$ share no common factor greater than $1$.",
          ],
          answer: "$\\dfrac{251}{990}$",
        },
      ],
    },
  ],
};
