export const problems = [
  {
    id: "s1",
    skill: "seq-notation",
    level: "foundation",
    prompt: "A sequence begins $4,\\ 9,\\ 15,\\ 8,\\ 6,\\ \\ldots$ (no special pattern). Write down $u_1$ and $u_4$.",
    answer: { type: "list", values: [4, 8] },
    input: { kind: "text", placeholder: "u1, u4" },
    need: {
      goal: "the first term $u_1$ and the fourth term $u_4$",
      have: "the list of terms written in order",
      first: "IB’s “write down” means you are only being asked to read the list. $u_1$ is whoever sits in position $1$; $u_4$ is whoever sits in position $4$. No formula is hiding here.",
    },
    hints: [
      {
        k: "Why this is not a formula question",
        b: "The command term is <em>write down</em>. That is IB-speak for “the value is sitting on the page.” You are not being asked to find a pattern — the question even says there isn’t one.",
      },
      {
        k: "What $u_n$ actually means",
        b: "The subscript is a seat number. $u_1$ is the first number in the list, $u_4$ is the fourth. People get stuck because they try to ‘work out’ $u_4$ as if $n=4$ had to go into an equation.",
      },
      {
        k: "Read the seats",
        b: "Position $1 \\to 4$, position $2 \\to 9$, position $3 \\to 15$, position $4 \\to 8$. So $u_1=4$ and $u_4=8$.",
      },
    ],
    solution: "$u_1=4$ and $u_4=8$.",
  },
  {
    id: "s2",
    skill: "seq-notation",
    level: "foundation",
    prompt: "For the sequence $3,\\ 8,\\ 13,\\ 18$, find $S_1$ and $S_3$.",
    answer: { type: "list", values: [3, 24] },
    input: { kind: "text", placeholder: "S1, S3" },
    need: {
      goal: "$S_1$ and $S_3$",
      have: "the first four terms of the sequence",
      first: "$S_n$ is not a new kind of term — it is a running total. $S_1$ is just the first term. $S_3$ means add the first three terms, not the third term on its own.",
    },
    hints: [
      {
        k: "Why $S$ looks scary",
        b: "In the booklet, $S_n$ means “add from $u_1$ up to $u_n$.” So $S_1=u_1$ always. If you find yourself hunting for a sum formula here, you have overshot — there are only a few numbers.",
      },
      {
        k: "The first running total",
        b: "$S_1$ is a total of one number: $S_1=3$.",
      },
      {
        k: "Now add three terms, not one",
        b: "$S_3=u_1+u_2+u_3=3+8+13$. The $18$ is $u_4$, so it is not in $S_3$. That mix-up is the usual mistake.",
      },
    ],
    solution: "$S_1=3$, $S_3=24$.",
  },
  {
    id: "s3",
    skill: "seq-notation",
    level: "practice",
    prompt: "A sequence has $S_4=40$ and $S_3=31$. Find $u_4$.",
    answer: { type: "number", value: 9 },
    input: { kind: "text", placeholder: "u4" },
    need: {
      goal: "the single term $u_4$",
      have: "two consecutive partial sums, $S_4$ and $S_3$",
      first: "You were not given the list. You were given totals. A single term is what you add when you go from “sum of three” to “sum of four”, so subtract.",
    },
    hints: [
      {
        k: "Why subtraction, not a sequence formula",
        b: "By definition $S_4=u_1+u_2+u_3+u_4$ and $S_3=u_1+u_2+u_3$. Everything except $u_4$ cancels, so $u_4=S_4-S_3$. This identity is used constantly in AA HL, including when $S_n$ is given as a quadratic.",
      },
      {
        k: "Put the numbers in",
        b: "$u_4=40-31=9$. If you tried $u_n=u_1+(n-1)d$ here, that would be guessing the sequence is arithmetic — the question never said that.",
      },
    ],
    solution: "$u_4=9$.",
  },
  {
    id: "s4",
    skill: "seq-explicit",
    level: "foundation",
    prompt: "A sequence is given by $u_n=10n$. Find the first three terms.",
    answer: { type: "list", values: [10, 20, 30] },
    input: { kind: "text", placeholder: "u1, u2, u3" },
    need: {
      goal: "$u_1$, $u_2$ and $u_3$",
      have: "an explicit formula $u_n=10n$",
      first: "Explicit means “plug the position in.” Replace $n$ by $1$, then $2$, then $3$. You do not need $d$ or $r$.",
    },
    hints: [
      {
        k: "Why we substitute $n$, not invent a pattern",
        b: "The formula already is the pattern. $n$ is the seat number, so $u_1$ means “put $1$ where $n$ is.”",
      },
      {
        k: "The three substitutions",
        b: "$u_1=10\\times 1=10$, $u_2=10\\times 2=20$, $u_3=10\\times 3=30$.",
      },
    ],
    solution: "$u_1=10$, $u_2=20$, $u_3=30$.",
  },
  {
    id: "s5",
    skill: "seq-explicit",
    level: "practice",
    prompt: "A sequence is given by $u_n=10^n$. Find $u_3$.",
    answer: { type: "number", value: 1000 },
    input: { kind: "text", placeholder: "u3" },
    need: {
      goal: "$u_3$",
      have: "the explicit formula $u_n=10^n$",
      first: "Look carefully at the notation before substituting. $10^n$ is a power. $10n$ would have been ten times $n$. They are not the same.",
    },
    hints: [
      {
        k: "Why the notation matters",
        b: "In IB, $10n$ means $10\\times n$, while $10^n$ means $10$ multiplied by itself $n$ times. Mixing those up is one of the most common Paper 1 slips in this topic.",
      },
      {
        k: "Substitute $n=3$",
        b: "$u_3=10^3=10\\times 10\\times 10=1000$, not $30$.",
      },
    ],
    solution: "$u_3=1000$.",
  },
  {
    id: "s6",
    skill: "seq-recursive",
    level: "foundation",
    prompt: "A sequence is defined by $u_1=10$ and $u_{n+1}=u_n+10$. Find $u_1$, $u_2$ and $u_3$.",
    answer: { type: "list", values: [10, 20, 30] },
    input: { kind: "text", placeholder: "u1, u2, u3" },
    need: {
      goal: "the first three terms",
      have: "$u_1=10$ and the rule “each new term is the previous term plus $10$”",
      first: "A recursive formula is a recipe, not a jump. Start from the given $u_1$, apply the rule once to get $u_2$, then once more for $u_3$.",
    },
    hints: [
      {
        k: "Why you cannot skip to $u_3$",
        b: "The rule $u_{n+1}=u_n+10$ only tells you the next term from the one you already have. That is why recursive questions always give a starting term.",
      },
      {
        k: "Walk it forward",
        b: "Given $u_1=10$. Then $u_2=u_1+10=20$, and $u_3=u_2+10=30$. (This is an arithmetic sequence with $d=10$, which is why it matches $u_n=10n$.)",
      },
    ],
    solution: "$u_1=10$, $u_2=20$, $u_3=30$.",
  },
  {
    id: "s7",
    skill: "seq-recursive",
    level: "practice",
    prompt: "A sequence is defined by $u_1=10$ and $u_{n+1}=2u_n+10$. Find $u_3$.",
    answer: { type: "number", value: 70 },
    input: { kind: "text", placeholder: "u3" },
    need: {
      goal: "$u_3$",
      have: "$u_1=10$ and $u_{n+1}=2u_n+10$",
      first: "This rule is neither “add $d$” nor “multiply by $r$” on its own. You must find $u_2$ first, then $u_3$. There is no booklet shortcut that jumps two steps.",
    },
    hints: [
      {
        k: "Why $u_2$ has to come first",
        b: "The recipe only looks one term backwards. Putting $n=1$ gives $u_2$ from $u_1$. Putting $n=2$ then gives $u_3$ from $u_2$.",
      },
      {
        k: "First application",
        b: "$u_2=2(10)+10=30$. Notice it is not $20$ — that would have been the purely arithmetic rule $u_n+10$.",
      },
      {
        k: "Second application",
        b: "$u_3=2(30)+10=70$. If you got $50$, you probably added $10$ twice instead of using the given rule.",
      },
    ],
    solution: "$u_3=70$.",
  },
  {
    id: "s8",
    skill: "seq-sigma",
    level: "foundation",
    prompt: "Express $\\displaystyle\\sum_{r=1}^{3}(2r)$ as a sum of three terms and find its value.",
    answer: { type: "number", value: 12 },
    input: { kind: "text", placeholder: "value of the sum" },
    need: {
      goal: "the value of the sigma sum",
      have: "the general term $2r$, with $r$ running from $1$ to $3$",
      first: "Sigma is just a compact “add these up.” Write the three terms by substituting $r=1$, $r=2$, $r=3$, then add. You do not need a series formula for three terms.",
    },
    hints: [
      {
        k: "Why we expand first",
        b: "IB often says “express as a sum of three terms” to check you can read the notation. The bottom of $\\sum$ is where $r$ starts; the top is where it stops.",
      },
      {
        k: "Write and add",
        b: "$2(1)+2(2)+2(3)=2+4+6=12$.",
      },
    ],
    solution: "$12$.",
  },
  {
    id: "s9",
    skill: "seq-sigma",
    level: "practice",
    prompt: "Let $A=\\displaystyle\\sum_{r=1}^{3}(2r+1)$ and $B=\\displaystyle\\sum_{r=1}^{6}(2r+1)$. Find $B-A$.",
    answer: { type: "number", value: 33 },
    input: { kind: "text", placeholder: "B − A" },
    need: {
      goal: "$B-A$",
      have: "the same general term $2r+1$, with different limits",
      first: "You do not have to expand all six terms of $B$. $B$ is “the first six” and $A$ is “the first three”, so $B-A$ is the leftover block $\\displaystyle\\sum_{r=4}^{6}(2r+1)$. Then expand those three terms and add.",
    },
    hints: [
      {
        k: "Why $B-A$ is the later block",
        b: "Adding from $r=1$ to $6$ is adding $1$ to $3$, then $4$ to $6$. So $B=A+C$ and $B-A=C=\\displaystyle\\sum_{r=4}^{6}(2r+1)$.",
      },
      {
        k: "Expand the three leftover terms",
        b: "For $r=4,5,6$ you get $2(4)+1=9$, $2(5)+1=11$, $2(6)+1=13$. Add: $9+11+13=33$. No series formula is needed — there are only three numbers.",
      },
    ],
    solution: "$B-A=33$.",
  },
  {
    id: "s10",
    skill: "seq-sigma",
    level: "practice",
    prompt: "The $n^{\\text{th}}$ term of a sequence is $u_n=3\\times 2^{n}$. Find $\\displaystyle\\sum_{n=1}^{3} u_n$.",
    answer: { type: "number", value: 42 },
    input: { kind: "text", placeholder: "sum" },
    need: {
      goal: "the sum of the first three listed terms",
      have: "an explicit formula $u_n=3\\times 2^{n}$",
      first: "Substitute $n=1,2,3$ to write the three terms, then add. Three terms do not need a series formula.",
    },
    hints: [
      {
        k: "Why we expand first",
        b: "Sigma with only three terms is the same job as unit 01’s short sums. Put each $n$ into $3\\times 2^{n}$. Do not reach for a geometric-sum formula — you have not been taught that yet, and you do not need it here.",
      },
      { k: "The three terms", b: "$u_1=3\\times 2=6$, $u_2=3\\times 4=12$, $u_3=3\\times 8=24$." },
      { k: "Add", b: "$6+12+24=42$." },
    ],
    solution: "$42$.",
  },
];
