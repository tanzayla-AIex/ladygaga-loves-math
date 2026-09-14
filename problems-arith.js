export const problems = [
  {
    id: "a1",
    skill: "arith-id",
    level: "foundation",
    prompt: "The sequence $11,\\ 15,\\ 19,\\ 23,\\ \\ldots$ is arithmetic. Write down the common difference $d$.",
    answer: { type: "number", value: 4 },
    input: { kind: "text", placeholder: "d" },
    need: {
      goal: "the common difference $d$",
      have: "consecutive terms of an arithmetic sequence",
      first: "$d$ is the amount you add to get from one term to the next. Subtract a term from the following one. “Write down” means this should be immediate.",
    },
    hints: [
      {
        k: "Why we subtract rather than divide",
        b: "Arithmetic means <em>add the same number each time</em>. That number is $d=u_2-u_1$. (If you divided, you would be looking for a common ratio — that is geometric.)",
      },
      {
        k: "Read it off the list",
        b: "$d=15-11=4$. Checking the next gap: $19-15=4$ as well, so it really is common.",
      },
    ],
    solution: "$d=4$.",
  },
  {
    id: "a2",
    skill: "arith-id",
    level: "foundation",
    prompt: "An arithmetic sequence begins $7,\\ 9.5,\\ 12,\\ \\ldots$. Find the next term.",
    answer: { type: "number", value: 14.5 },
    input: { kind: "text", placeholder: "u4" },
    need: {
      goal: "the fourth term $u_4$",
      have: "the first three terms",
      first: "You cannot continue the list until you know the common difference. Find $d$ from the first two terms, then add $d$ once more.",
    },
    hints: [
      {
        k: "Why $d$ comes first",
        b: "The next term is “the last given term plus $d$.” Without $d$ you are guessing. So $d=u_2-u_1$ is the missing piece.",
      },
      {
        k: "Then take one more step",
        b: "$d=9.5-7=2.5$. The third term is already $12$, so $u_4=12+2.5=14.5$.",
      },
    ],
    solution: "$u_4=14.5$.",
  },
  {
    id: "a3",
    skill: "arith-id",
    level: "practice",
    prompt: "The first three terms of a sequence are $a+3$, $2a+4$ and $a+9$. Given that the sequence is arithmetic, find $a$.",
    answer: { type: "number", value: 2 },
    input: { kind: "text", placeholder: "a" },
    need: {
      goal: "the value of $a$",
      have: "three terms in $a$, and the fact they form an arithmetic sequence",
      first: "For three terms to be arithmetic, the step from the first to the second must equal the step from the second to the third. Equivalently, twice the middle equals the sum of the two sides: $2u_2=u_1+u_3$.",
    },
    hints: [
      {
        k: "Why $2u_2=u_1+u_3$",
        b: "If the gaps are equal, then $u_2-u_1=u_3-u_2$. Rearranging gives $2u_2=u_1+u_3$. That is the arithmetic test IB expects you to write down on a “find $k$” or “find $a$” question.",
      },
      {
        k: "Write the equation",
        b: "$2(2a+4)=(a+3)+(a+9)$, so $4a+8=2a+12$.",
      },
      {
        k: "Solve, then glance back",
        b: "$2a=4$, so $a=2$. The terms become $5,\\ 8,\\ 11$, which really do go up by $3$ each time. That check is worth the five seconds.",
      },
    ],
    solution: "$a=2$. The terms are $5,\\ 8,\\ 11$.",
  },
  {
    id: "a4",
    skill: "arith-nth",
    level: "foundation",
    prompt: "In an arithmetic sequence, $u_1=-5$ and $d=8$. Find $u_{11}$.",
    answer: { type: "number", value: 75 },
    input: { kind: "text", placeholder: "u11" },
    need: {
      goal: "$u_{11}$",
      have: "$u_1=-5$, $d=8$ and $n=11$",
      first: "Every value the booklet formula needs is already given. Use $u_n=u_1+(n-1)d$. The $(n-1)$ is the number of steps from the first term to the term you want.",
    },
    hints: [
      {
        k: "Why it is $n-1$ steps, not $n$",
        b: "To get from term $1$ to term $11$ you take ten steps, not eleven. If you use $n$ by accident you are one $d$ too far — the classic off-by-one.",
      },
      {
        k: "Put it into the booklet formula",
        b: "$u_{11}=-5+(11-1)\\times 8=-5+80=75$.",
      },
    ],
    solution: "$u_{11}=75$.",
  },
  {
    id: "a5",
    skill: "arith-nth",
    level: "practice",
    prompt: "An arithmetic sequence has $u_n=4n-1$. Find $u_{20}$.",
    answer: { type: "number", value: 79 },
    input: { kind: "text", placeholder: "u20" },
    need: {
      goal: "$u_{20}$",
      have: "an explicit formula already written in terms of $n$",
      first: "When $u_n$ is given as an expression in $n$, just substitute. You may read $d=4$ from the coefficient of $n$, but you do not need that extra step here.",
    },
    hints: [
      {
        k: "Why substitution is enough",
        b: "This already is the $n^{\\text{th}}$ term. The question is not asking you to derive $d$; it is asking for one value of that formula.",
      },
      {
        k: "Substitute $n=20$",
        b: "$u_{20}=4(20)-1=80-1=79$.",
      },
    ],
    solution: "$u_{20}=79$.",
  },
  {
    id: "a6",
    skill: "arith-nth",
    level: "practice",
    prompt: "The first three terms of an arithmetic sequence are $7,\\ 9.5,\\ 12$. Find the $41^{\\text{st}}$ term.",
    answer: { type: "number", value: 107 },
    input: { kind: "text", placeholder: "u41" },
    need: {
      goal: "$u_{41}$",
      have: "the first three terms",
      first: "The booklet formula needs $u_1$, $d$ and $n$. You have $u_1=7$ and $n=41$, so the missing piece is $d$.",
    },
    hints: [
      {
        k: "Why we find $d$ before $u_{41}$",
        b: "You cannot take forty steps if you do not know the size of a step. $d=u_2-u_1$ uses the terms you were given.",
      },
      {
        k: "Then the formula",
        b: "$d=9.5-7=2.5$. So $u_{41}=7+(41-1)(2.5)=7+40\\times 2.5=7+100=107$.",
      },
    ],
    solution: "$u_{41}=107$.",
  },
  {
    id: "a7",
    skill: "arith-two",
    level: "practice",
    prompt: "The $5^{\\text{th}}$ term of an arithmetic sequence is $30$ and the $13^{\\text{th}}$ term is $70$. Find the common difference $d$.",
    answer: { type: "number", value: 5 },
    input: { kind: "text", placeholder: "d" },
    need: {
      goal: "$d$",
      have: "$u_5=30$ and $u_{13}=70$",
      first: "Between position $5$ and position $13$ there are $13-5=8$ equal steps of size $d$. So the difference of the terms is $8d$, not $13d$ and not $5d$.",
    },
    hints: [
      {
        k: "Why the gap is $8$, not $13$ or $5$",
        b: "Each step adds one $d$. Walking from the $5^{\\text{th}}$ term to the $13^{\\text{th}}$ term is eight steps, so $u_{13}-u_5=8d$. Using $13$ or $5$ in the denominator is the usual slip.",
      },
      {
        k: "Solve for $d$",
        b: "$d=\\dfrac{70-30}{8}=\\dfrac{40}{8}=5$.",
      },
    ],
    solution: "$d=5$.",
  },
  {
    id: "a8",
    skill: "arith-two",
    level: "practice",
    prompt: "The $5^{\\text{th}}$ term of an arithmetic sequence is $30$ and the $13^{\\text{th}}$ term is $70$. Find the first term $u_1$.",
    answer: { type: "number", value: 10 },
    input: { kind: "text", placeholder: "u1" },
    need: {
      goal: "$u_1$",
      have: "$u_5=30$ and $u_{13}=70$",
      first: "The formula for $u_1$ still needs $d$. Find $d$ from the two given terms, then step back from $u_5$ to $u_1$.",
    },
    hints: [
      {
        k: "Why $d$ before $u_1$",
        b: "You know a later term, not the first. To walk backwards you need the step size. Same two terms as the previous skill: $d=\\dfrac{70-30}{8}=5$.",
      },
      {
        k: "Walk four steps back",
        b: "$u_5=u_1+4d$, so $30=u_1+4\\times 5=u_1+20$, hence $u_1=10$. Check: $u_{13}=10+12\\times 5=70$.",
      },
    ],
    solution: "$u_1=10$.",
  },
  {
    id: "a9",
    skill: "arith-two",
    level: "challenge",
    prompt: "In an arithmetic sequence, $u_{21}=-37$ and $u_4=-3$. Find $u_1$.",
    answer: { type: "number", value: 3 },
    input: { kind: "text", placeholder: "u1" },
    need: {
      goal: "$u_1$",
      have: "two terms, neither of which is the first, and one of them is later than the other",
      first: "Signs are easy to drop here. Find $d=\\dfrac{u_{21}-u_4}{21-4}$ carefully, then use $u_4=u_1+3d$.",
    },
    hints: [
      {
        k: "Why the order of subtraction matters",
        b: "Match the terms with the positions: later minus earlier, over later index minus earlier index. $d=\\dfrac{-37-(-3)}{21-4}=\\dfrac{-34}{17}=-2$. If you forget the two minuses, $d$ comes out positive and everything afterwards is wrong.",
      },
      {
        k: "Now recover $u_1$",
        b: "$u_4=u_1+3d \\Rightarrow -3=u_1+3(-2)=u_1-6$, so $u_1=3$.",
      },
    ],
    solution: "$u_1=3$.",
  },
  {
    id: "a10",
    skill: "arith-n",
    level: "practice",
    prompt: "An arithmetic sequence has $u_1=2$ and $d=3$. Find $n$ such that $u_n=152$.",
    answer: { type: "number", value: 51 },
    input: { kind: "text", placeholder: "n" },
    need: {
      goal: "the position $n$",
      have: "$u_1=2$, $d=3$, and the value of that term, $152$",
      first: "Set the booklet formula equal to $152$ and solve for $n$. You are not summing anything — this is a term, not $S_n$.",
    },
    hints: [
      {
        k: "Why this is $u_n$, not $S_n$",
        b: "The question gives a single term equal to $152$. If it had said “the sum of the first $n$ terms is $152$,” that would be a different (usually quadratic) equation.",
      },
      {
        k: "Solve",
        b: "$2+(n-1)3=152 \\Rightarrow 3(n-1)=150 \\Rightarrow n-1=50 \\Rightarrow n=51$.",
      },
    ],
    solution: "$n=51$.",
  },
  {
    id: "a11",
    skill: "arith-n",
    level: "practice",
    prompt: "Consider $11,\\ 15,\\ 19,\\ 23,\\ \\ldots$. How many terms are less than $100$?",
    answer: { type: "number", value: 23 },
    input: { kind: "text", placeholder: "number of terms" },
    need: {
      goal: "the largest integer $n$ with $u_n<100$",
      have: "$u_1=11$, $d=4$",
      first: "This is an inequality, not $u_n=100$. Solve $u_n<100$, then take the greatest whole number $n$ that works, and check the next term as well.",
    },
    hints: [
      {
        k: "Why an inequality, not an equation",
        b: "Nothing in the sequence has to equal $100$. You want every term still below that bound. Write $11+4(n-1)<100$.",
      },
      {
        k: "Solve, then check the neighbours",
        b: "$4(n-1)<89$, so $n-1<22.25$, hence $n\\le 23$. Check: $u_{23}=11+22\\times 4=99<100$ and $u_{24}=103>100$. So there are $23$ such terms.",
      },
    ],
    solution: "$23$ terms.",
  },
  {
    id: "a12",
    skill: "arith-n",
    level: "challenge",
    prompt: "Find the number of terms in the arithmetic sequence $3,\\ 9,\\ 15,\\ \\ldots,\\ 1353$.",
    answer: { type: "number", value: 226 },
    input: { kind: "text", placeholder: "n" },
    need: {
      goal: "how many terms, including both ends",
      have: "first term $3$, last term $1353$",
      first: "Find $d$ from the first two terms, then set $u_n=1353$. The last term is $u_n$, not $S_n$.",
    },
    hints: [
      {
        k: "Why we still need $d$",
        b: "Knowing the two ends is not enough until you know the step. $d=9-3=6$.",
      },
      {
        k: "Set the last term equal to $1353$",
        b: "$3+(n-1)6=1353 \\Rightarrow 6(n-1)=1350 \\Rightarrow n-1=225 \\Rightarrow n=226$. Include both $3$ and $1353$.",
      },
    ],
    solution: "$n=226$.",
  },
  {
    id: "a13",
    skill: "arith-word",
    level: "practice",
    prompt: "A theatre has $20$ rows. There are $15$ seats in the first row, and each next row has $2$ more seats. How many seats are in the $20^{\\text{th}}$ row?",
    answer: { type: "number", value: 53 },
    input: { kind: "text", placeholder: "seats in row 20" },
    need: {
      goal: "$u_{20}$, the seats in row $20$",
      have: "$u_1=15$, $d=2$, $n=20$",
      first: "This is an $n^{\\text{th}}$-term question, not a total. The word “in the $20^{\\text{th}}$ row” means one term, so use $u_n=u_1+(n-1)d$, not $S_n$.",
    },
    hints: [
      {
        k: "Why this is not a sum",
        b: "IB applications love to mix “how many in the last row” with “how many altogether.” Last row is $u_n$. Altogether would be $S_n$.",
      },
      {
        k: "Use the booklet formula",
        b: "$u_{20}=15+19\\times 2=15+38=53$.",
      },
    ],
    solution: "$53$ seats.",
  },
  {
    id: "a14",
    skill: "arith-word",
    level: "practice",
    prompt: "On day $1$ a runner trains $1000\\,\\text{m}$, then increases by $250\\,\\text{m}$ each day. On which day does she run $10\\,\\text{km}$ in training? (Give the day number.)",
    answer: { type: "number", value: 37 },
    input: { kind: "text", placeholder: "day n" },
    need: {
      goal: "$n$ such that $u_n=10000$",
      have: "$u_1=1000\\,\\text{m}$, $d=250\\,\\text{m}$",
      first: "The units do not match yet. Convert $10\\,\\text{km}$ to metres, then solve $u_n=10000$. This is still a term, not a total distance.",
    },
    hints: [
      {
        k: "Why the units have to match first",
        b: "You cannot set $1000+250(n-1)=10$. One side is metres, the other is kilometres. $10\\,\\text{km}=10000\\,\\text{m}$.",
      },
      {
        k: "Solve for the day",
        b: "$1000+250(n-1)=10000 \\Rightarrow 250(n-1)=9000 \\Rightarrow n-1=36 \\Rightarrow n=37$. So day $37$.",
      },
    ],
    solution: "Day $37$.",
  },
  {
    id: "a15",
    skill: "arith-two",
    level: "challenge",
    prompt: "A choir is arranged in arithmetic rows. There are $20$ singers in the $4^{\\text{th}}$ row and $32$ in the $8^{\\text{th}}$ row. Find the common difference $d$.",
    answer: { type: "number", value: 3 },
    input: { kind: "text", placeholder: "d" },
    need: {
      goal: "$d$",
      have: "$u_4=20$ and $u_8=32$",
      first: "Treat the row number as $n$. Four equal steps separate row $4$ from row $8$, so $d=\\dfrac{u_8-u_4}{4}$.",
    },
    hints: [
      {
        k: "Why four steps, not eight",
        b: "From the $4^{\\text{th}}$ row to the $8^{\\text{th}}$ row you add $d$ four times. $8-4=4$, not $8$.",
      },
      {
        k: "Compute $d$",
        b: "$d=\\dfrac{32-20}{4}=3$.",
      },
    ],
    solution: "$d=3$.",
  },
];
