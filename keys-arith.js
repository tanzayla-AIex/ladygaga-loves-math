export const arithKey = {
  id: "arith",
  title: "Arithmetic sequences — answer key",
  sourceTitle: "[MAA 1.2–1.3] Arithmetic sequences (Nikolaidis)",
  file: "resources/maa-1.2-1.3-arithmetic-sequences.pdf",
  intro:
    "Answers by question number for the 65-item arithmetic worksheet. Each item names the given values so you can match it to your PDF. Exact values unless the question uses a GDC and asks to round.",
  items: [
    {
      n: "1",
      about: "Sequence $2,5,10,3,7,4,\\ldots$ (no pattern).",
      parts: [
        { label: "(a)", steps: ["$u_1$ is the first listed number. $S_1$ is a total of one term, so it equals $u_1$."], answer: "$u_1=2$, $S_1=2$" },
        { label: "(b)", steps: ["$u_2=5$. $S_2=2+5=7$."], answer: "$u_2=5$, $S_2=7$" },
        { label: "(c)", steps: ["$S_5=2+5+10+3+7=27$."], answer: "$S_5=27$" },
      ],
    },
    {
      n: "2",
      about: "The sequence of positive integers $1,2,3,\\ldots$.",
      parts: [
        { label: "(a)", steps: ["Read off the list, or use $u_n=n$."], answer: "$u_2=2$, $u_{20}=20$" },
        { label: "(b)", steps: ["$S_5=1+2+3+4+5=15$, or $\\dfrac{5\\times 6}{2}$."], answer: "$S_5=15$" },
        { label: "(c)", steps: ["The $n^{\\text{th}}$ term is the number $n$ itself."], answer: "$u_n=n$" },
      ],
    },
    {
      n: "3",
      about: "Explicit formula $u_n=10n$.",
      parts: [
        { label: "(a)", steps: ["Put $n=1,2,3$ in."], answer: "$10,\\ 20,\\ 30$" },
        { label: "(b)", steps: ["$u_{10}=100$."], answer: "$100$" },
        { label: "(c)", steps: ["$S_1=10$, $S_2=30$, $S_3=60$."], answer: "$10,\\ 30,\\ 60$" },
      ],
    },
    {
      n: "4",
      about: "Explicit formula $u_n=10n^{2}$.",
      parts: [
        { label: "(a)", steps: ["$u_1=10$, $u_2=40$, $u_3=90$."], answer: "$10,\\ 40,\\ 90$" },
        { label: "(b)", steps: ["$u_{10}=10\\times 100=1000$."], answer: "$1000$" },
        { label: "(c)", steps: ["$S_1=10$, $S_2=50$, $S_3=140$."], answer: "$10,\\ 50,\\ 140$" },
      ],
    },
    {
      n: "5",
      about: "Explicit formula $u_n=10^{n}$.",
      parts: [
        { label: "(a)", steps: ["$10^{1}=10$, $10^{2}=100$, $10^{3}=1000$. This is not $10n$."], answer: "$10,\\ 100,\\ 1000$" },
        { label: "(b)", steps: ["$u_{10}=10^{10}=10\\,000\\,000\\,000$."], answer: "$10^{10}$" },
        { label: "(c)", steps: ["$S_1=10$, $S_2=110$, $S_3=1110$."], answer: "$10,\\ 110,\\ 1110$" },
      ],
    },
    {
      n: "6",
      about: "Recursive: $u_1=10$, $u_{n+1}=u_n+10$.",
      parts: [
        { label: "(a)", steps: ["Add $10$ each time: $10,\\ 20,\\ 30$."], answer: "$10,\\ 20,\\ 30$" },
        { label: "(b)", steps: ["$S_1=10$, $S_2=30$, $S_3=60$."], answer: "$10,\\ 30,\\ 60$" },
      ],
    },
    {
      n: "7",
      about: "Recursive: $u_1=10$, $u_{n+1}=2u_n+10$.",
      parts: [
        { label: "(a)", steps: ["$u_2=2(10)+10=30$, $u_3=2(30)+10=70$. You cannot skip $u_2$."], answer: "$10,\\ 30,\\ 70$" },
        { label: "(b)", steps: ["$S_1=10$, $S_2=40$, $S_3=110$."], answer: "$10,\\ 40,\\ 110$" },
      ],
    },
    {
      n: "8",
      about: "Three short sigma sums.",
      parts: [
        { label: "(a)", steps: ["$\\sum_{r=1}^{3}(2r)=2+4+6=12$."], answer: "$12$" },
        { label: "(b)", steps: ["$\\sum_{r=1}^{3} r^{2}=1+4+9=14$."], answer: "$14$" },
        { label: "(c)", steps: ["$\\sum_{r=1}^{3} 2^{r}=2+4+8=14$."], answer: "$14$" },
      ],
    },
    {
      n: "9",
      about: "$A=\\sum_{r=1}^{10}(2r+1)$, $B$ to $20$, $C$ from $11$ to $20$.",
      parts: [
        {
          label: "(a)",
          steps: [
            "$A=\\dfrac{10}{2}(3+21)=120$.",
            "$B=\\dfrac{20}{2}(3+41)=440$.",
            "$C=\\dfrac{10}{2}(23+41)=320$.",
          ],
          answer: "$A=120$, $B=440$, $C=320$",
        },
        { label: "(b)", steps: ["The sum from 1 to 20 is the sum from 1 to 10 plus the sum from 11 to 20."], answer: "$B=A+C$" },
      ],
    },
    {
      n: "10",
      about: "Arithmetic sequence $11,15,19,23,\\ldots$.",
      parts: [
        { label: "(a)", steps: ["$d=4$. $u_{101}=11+100\\times 4=411$. $S_{101}=\\dfrac{101}{2}(11+411)=21311$."], answer: "$u_{101}=411$, $S_{101}=21311$" },
        { label: "(b)", steps: ["$S_{20}=10\\bigl(22+19\\times 4\\bigr)=980$."], answer: "$980$" },
        { label: "(c)", steps: ["$u_n=11+4(n-1)=4n+7$."], answer: "$u_n=4n+7$" },
        { label: "(d)", steps: ["$4n+7=51 \\Rightarrow n=11$."], answer: "$n=11$" },
      ],
    },
    {
      n: "11",
      about: "$u_1=-5$, $u_5=27$.",
      parts: [
        { label: "(a)", steps: ["$-5+4d=27 \\Rightarrow d=8$."], answer: "$d=8$" },
        { label: "(b)", steps: ["$u_{11}=-5+10\\times 8=75$."], answer: "$75$" },
        { label: "(c)", steps: ["$S_{11}=\\dfrac{11}{2}(-5+75)=385$."], answer: "$385$" },
        { label: "(d)", steps: ["$-5+8(n-1)=155 \\Rightarrow n=21$."], answer: "$n=21$" },
      ],
    },
    {
      n: "12",
      about: "$u_5=30$, $u_{13}=70$.",
      parts: [
        { label: "(a)", steps: ["$8d=40 \\Rightarrow d=5$. Then $u_1=30-4\\times 5=10$."], answer: "$u_1=10$, $d=5$" },
        { label: "(b)", steps: ["$u_n=10+5(n-1)=5n+5$."], answer: "$u_n=5n+5$" },
        { label: "(c)", steps: ["$S_n=\\dfrac{n}{2}(15+5n)=\\dfrac{5n(n+3)}{2}$."], answer: "$S_n=\\dfrac{5n(n+3)}{2}$" },
        { label: "(d)", steps: ["$u_{20}=105$, $S_{20}=1150$."], answer: "$u_{20}=105$, $S_{20}=1150$" },
      ],
    },
    {
      n: "13",
      about: "$S_1=10$, $S_2=25$.",
      parts: [
        { label: "(a)", steps: ["$u_1=S_1=10$, $u_2=S_2-S_1=15$."], answer: "$u_1=10$, $u_2=15$" },
        { label: "(b)", steps: ["$d=5$."], answer: "$d=5$" },
        { label: "(c)", steps: ["Terms $10,15,20,25$, so $S_3=45$, $S_4=70$."], answer: "$S_3=45$, $S_4=70$" },
        { label: "(d)", steps: ["$S_n=\\dfrac{n}{2}(15+5n)=\\dfrac{5n(n+3)}{2}$."], answer: "$S_n=\\dfrac{5n(n+3)}{2}$" },
      ],
    },
    {
      n: "14",
      about: "Sums of $2r+1$.",
      parts: [
        { label: "(a)", steps: ["(i) $3+5+7=15$. (ii) $\\dfrac{200}{2}(3+401)=40400$. (iii) $40400-15=40385$."], answer: "$15$, $40400$, $40385$" },
        { label: "(b)", steps: ["$\\dfrac{100}{2}(203+401)=30200$."], answer: "$30200$" },
      ],
    },
    {
      n: "15",
      about: "$11,15,19,\\ldots$ terms less than $100$.",
      parts: [
        { label: "(a)", steps: ["$11+4(n-1)<100 \\Rightarrow n\\le 23$. Check: $u_{23}=99$, $u_{24}=103$."], answer: "$23$ terms" },
        { label: "(b)", steps: ["Last term less than $100$ is $u_{23}=99$."], answer: "$99$" },
        { label: "(c)", steps: ["$S_{23}=\\dfrac{23}{2}(11+99)=1265$."], answer: "$1265$" },
      ],
    },
    {
      n: "16",
      about: "$7,\\ 9.5,\\ 12$.",
      parts: [
        { label: "(a)", steps: ["$d=2.5$. $u_{41}=7+40\\times 2.5=107$."], answer: "$107$" },
        { label: "(b)", steps: ["$S_{101}=\\dfrac{101}{2}(14+100\\times 2.5)=13332$."], answer: "$13332$" },
      ],
    },
    {
      n: "17",
      about: "Five arithmetic terms, first $2$, last $32$.",
      parts: [{ label: "", steps: ["We have first, last and $n$, so $S_5=\\dfrac{5}{2}(2+32)=85$. No need for $d$."], answer: "$85$" }],
    },
    {
      n: "18",
      about: "$u_1=2$, $u_3=8$.",
      parts: [
        { label: "(a)", steps: ["$2+2d=8 \\Rightarrow d=3$."], answer: "$d=3$" },
        { label: "(b)", steps: ["$u_{20}=2+19\\times 3=59$."], answer: "$59$" },
        { label: "(c)", steps: ["$S_{20}=10(4+57)=610$."], answer: "$610$" },
      ],
    },
    {
      n: "19",
      about: "Arithmetic with $u_1=5$, $u_4=40$. Find $u_2$.",
      parts: [{ label: "", steps: ["$5+3d=40 \\Rightarrow d=\\dfrac{35}{3}$. Then $u_2=5+\\dfrac{35}{3}=\\dfrac{50}{3}$."], answer: "$\\dfrac{50}{3}$" }],
    },
    {
      n: "20",
      about: "Arturo: $200\\,\\text{m}$ then $+30\\,\\text{m}$ each week, $52$ weeks.",
      parts: [
        { label: "(a)", steps: ["Final week is $u_{52}=200+51\\times 30=1730$."], answer: "$1730\\,\\text{m}$" },
        { label: "(b)", steps: ["Altogether means $S_{52}=26(200+1730)=50180$."], answer: "$50180\\,\\text{m}$" },
      ],
    },
    {
      n: "21",
      about: "Theatre: $15$ seats, then $+2$ per row, $20$ rows.",
      parts: [
        { label: "(a)", steps: ["$u_{20}=15+19\\times 2=53$."], answer: "$53$ seats" },
        { label: "(b)", steps: ["$S_{20}=10(15+53)=680$."], answer: "$680$ seats" },
      ],
    },
    {
      n: "22",
      about: "Runner: $1000\\,\\text{m}$, then $+250\\,\\text{m}$, until $10\\,\\text{km}$.",
      parts: [
        { label: "(a)", steps: ["$10\\,\\text{km}=10000\\,\\text{m}$. $1000+250(n-1)=10000 \\Rightarrow n=37$."], answer: "day $37$" },
        { label: "(b)", steps: ["$S_{37}=\\dfrac{37}{2}(1000+10000)=203500$ metres exactly."], answer: "$203500\\,\\text{m}$" },
      ],
    },
    {
      n: "23",
      about: "Deposits $100,125,150,\\ldots$ dollars.",
      parts: [
        { label: "(a)", steps: ["$d=25$. $u_{17}=100+16\\times 25=500$."], answer: "$500$" },
        { label: "(b)", steps: ["$S_{17}=\\dfrac{17}{2}(100+500)=5100$."], answer: "$5100$" },
      ],
    },
    {
      n: "24",
      about: "Salary $45000$, then $+1750$ each year.",
      parts: [
        { label: "(a)", steps: ["$u_5=45000+4\\times 1750=52000$."], answer: "$52000$ USD" },
        { label: "(b)", steps: ["$S_{10}=5(90000+9\\times 1750)=528750$."], answer: "$528750$ USD" },
      ],
    },
    {
      n: "25",
      about: "Choir: $u_4=20$, $u_8=32$, then $u_1=11$ and $10$ rows.",
      parts: [
        { label: "(a)", steps: ["$4d=12 \\Rightarrow d=3$."], answer: "$d=3$" },
        { label: "(b)", steps: ["$S_{10}=5\\bigl(22+9\\times 3\\bigr)=245$."], answer: "$245$ singers" },
      ],
    },
    {
      n: "26",
      about: "Leaves: $24,40,56,72,\\ldots$ in October.",
      parts: [
        { label: "(a)", steps: ["$d=16$. $u_{21}=24+20\\times 16=344$."], answer: "$344$" },
        { label: "(b)", steps: ["$S_{31}=\\dfrac{31}{2}(48+30\\times 16)=8184$."], answer: "$8184$" },
      ],
    },
    {
      n: "27",
      about: "$u_1=7$, $u_{20}=64$, $u_n=3709$.",
      parts: [
        { label: "(a)", steps: ["$7+19d=64 \\Rightarrow d=3$."], answer: "$d=3$" },
        { label: "(b)", steps: ["$7+3(n-1)=3709 \\Rightarrow n=1235$."], answer: "$n=1235$" },
      ],
    },
    {
      n: "28",
      about: "$u_2=7$ and $S_4=12$. Find $u_1$ and $d$.",
      parts: [
        {
          label: "",
          steps: [
            "$u_1+d=7$ and $\\dfrac{4}{2}(2u_1+3d)=12 \\Rightarrow 2u_1+3d=6$.",
            "Substitute $u_1=7-d$: $14-2d+3d=6 \\Rightarrow d=-8$, $u_1=15$.",
            "Check: $15+7+(-1)+(-9)=12$. A negative $d$ is allowed.",
          ],
          answer: "$u_1=15$, $d=-8$",
        },
      ],
    },
    {
      n: "29",
      about: "$u_2=7$, $S_5=50$. Find $d$.",
      parts: [
        {
          label: "",
          steps: [
            "$u_1+d=7$ and $\\dfrac{5}{2}(2u_1+4d)=50 \\Rightarrow u_1+2d=10$.",
            "Then $7+d=10 \\Rightarrow d=3$.",
          ],
          answer: "$d=3$",
        },
      ],
    },
    {
      n: "30",
      about: "$d=11$, $u_{27}=263$.",
      parts: [
        { label: "(a)", steps: ["$u_1+26\\times 11=263 \\Rightarrow u_1=-23$."], answer: "$u_1=-23$" },
        { label: "(b)", steps: ["$-23+11(n-1)=516 \\Rightarrow n=50$. Then $S_{50}=25(-46+49\\times 11)=12325$."], answer: "$n=50$, $S_{50}=12325$" },
      ],
    },
    {
      n: "31",
      about: "$2,5,8,11,\\ldots$.",
      parts: [
        { label: "(a)", steps: ["$d=3$. $u_{101}=2+300=302$."], answer: "$302$" },
        { label: "(b)", steps: ["$2+3(n-1)=152 \\Rightarrow n=51$."], answer: "$n=51$" },
      ],
    },
    {
      n: "32",
      about: "Series $2+5+8+\\cdots$.",
      parts: [
        { label: "(a)", steps: ["$S_n=\\dfrac{n}{2}(4+3(n-1))=\\dfrac{n(3n+1)}{2}$."], answer: "$S_n=\\dfrac{n(3n+1)}{2}$" },
        { label: "(b)", steps: ["$3n^{2}+n-2730=0$. Discriminant $181^{2}$, so $n=30$."], answer: "$n=30$" },
      ],
    },
    {
      n: "33",
      about: "$u_1=-2$, $u_4=16$, $u_n=11998$.",
      parts: [
        { label: "(a)", steps: ["$-2+3d=16 \\Rightarrow d=6$."], answer: "$d=6$" },
        { label: "(b)", steps: ["$-2+6(n-1)=11998 \\Rightarrow n=2001$."], answer: "$n=2001$" },
      ],
    },
    {
      n: "34",
      about: "$u_{21}=-37$, $u_4=-3$.",
      parts: [
        { label: "(a)", steps: ["$d=\\dfrac{-37-(-3)}{17}=-2$. Then $u_1=-3-3(-2)=3$."], answer: "$d=-2$, $u_1=3$" },
        { label: "(b)", steps: ["$S_{10}=5(6+9(-2))=-60$."], answer: "$S_{10}=-60$" },
      ],
    },
    {
      n: "35",
      about: "$u_1=-7$, $S_{20}=620$.",
      parts: [
        { label: "(a)", steps: ["$10(-14+19d)=620 \\Rightarrow d=4$."], answer: "$d=4$" },
        { label: "(b)", steps: ["$u_{78}=-7+77\\times 4=301$."], answer: "$301$" },
      ],
    },
    {
      n: "36",
      about: "$u_n=3n$.",
      parts: [
        { label: "(a)", steps: ["$3,6,9$."], answer: "$3,\\ 6,\\ 9$" },
        {
          label: "(b)",
          steps: [
            "(i) $\\sum_{n=1}^{20}3n=3\\times\\dfrac{20\\times 21}{2}=630$.",
            "(ii) Difference of two sums: $3\\left(\\dfrac{100\\times 101}{2}-\\dfrac{20\\times 21}{2}\\right)=14520$.",
            "Or treat $63+66+\\cdots+300$ as $80$ terms: $\\dfrac{80}{2}(63+300)=14520$.",
          ],
          answer: "$630$, $14520$",
        },
      ],
    },
    {
      n: "37",
      about: "$u_n=3n-2$.",
      parts: [
        { label: "(a)", steps: ["$u_1=1$, $u_2=4$, $u_3=7$."], answer: "$1,\\ 4,\\ 7$" },
        { label: "(b)", steps: ["$S_{20}=10(1+58)=590$."], answer: "$590$" },
      ],
    },
    {
      n: "38",
      about: "$u_n=2n+5$.",
      parts: [
        { label: "(a)", steps: ["$u_1=7$, $u_2=9$, so $d=2$."], answer: "$d=2$" },
        { label: "(b)", steps: ["$2n+5=115 \\Rightarrow n=55$. Then $S_{55}=\\dfrac{55}{2}(7+115)=3355$."], answer: "$n=55$, $S_{55}=3355$" },
      ],
    },
    {
      n: "39",
      about: "$3,9,15,\\ldots,1353$.",
      parts: [
        { label: "(a)", steps: ["$d=6$."], answer: "$d=6$" },
        { label: "(b)", steps: ["$3+6(n-1)=1353 \\Rightarrow n=226$."], answer: "$n=226$" },
        { label: "(c)", steps: ["$S=113(3+1353)=153228$."], answer: "$153228$" },
      ],
    },
    {
      n: "40",
      about: "$S_{40}=1900$, $u_{40}=106$.",
      parts: [
        {
          label: "",
          steps: [
            "$\\dfrac{40}{2}(u_1+106)=1900 \\Rightarrow u_1=-11$.",
            "$-11+39d=106 \\Rightarrow d=3$.",
          ],
          answer: "$u_1=-11$, $d=3$",
        },
      ],
    },
    {
      n: "41",
      about: "Same type as Q27: $u_1=7$, $u_{20}=64$, $u_n=3709$.",
      parts: [
        { label: "(a)", steps: ["$d=3$."], answer: "$d=3$" },
        { label: "(b)", steps: ["$n=1235$."], answer: "$n=1235$" },
      ],
    },
    {
      n: "42",
      about: "$u_5=27$, $u_{16}=115$, $u_n=155$.",
      parts: [
        { label: "(a)", steps: ["$11d=88 \\Rightarrow d=8$, $u_1=-5$. Then $-5+8(n-1)=155 \\Rightarrow n=21$."], answer: "$n=21$" },
        { label: "(b)", steps: ["$S_{21}=\\dfrac{21}{2}(-5+155)=1575$."], answer: "$1575$" },
      ],
    },
    {
      n: "43",
      about: "First two terms $5$ and $13$.",
      parts: [
        { label: "(a)", steps: ["$d=8$, so $u_n=8n-3$."], answer: "$u_n=8n-3$" },
        { label: "(b)", steps: ["$8n-3<400 \\Rightarrow n\\le 50$. Check $u_{50}=397$, $u_{51}=405$."], answer: "$50$ terms" },
      ],
    },
    {
      n: "44",
      about: "$S_1=7$, $S_2=18$.",
      parts: [
        { label: "(a)", steps: ["$u_1=S_1=7$."], answer: "$7$" },
        { label: "(b)", steps: ["$u_2=11$, so $d=4$."], answer: "$d=4$" },
        { label: "(c)", steps: ["$u_4=7+3\\times 4=19$."], answer: "$19$" },
      ],
    },
    {
      n: "45",
      about: "Sum of multiples of $3$ from $3$ to $3750$.",
      parts: [{ label: "", steps: ["$n=1250$ terms. $s=\\dfrac{1250}{2}(3+3750)=2345625$."], answer: "$s=2345625$" }],
    },
    {
      n: "46",
      about: "$81\\,\\text{m}$ rope, shortest $1.5\\,\\text{m}$, longest $7.5\\,\\text{m}$.",
      parts: [
        {
          label: "",
          steps: [
            "$81=\\dfrac{n}{2}(1.5+7.5)=4.5n \\Rightarrow n=18$.",
            "$1.5+17d=7.5 \\Rightarrow d=\\dfrac{6}{17}$.",
          ],
          answer: "$n=18$, $d=\\dfrac{6}{17}$",
        },
      ],
    },
    {
      n: "47",
      about: "$17+27+\\cdots+417$.",
      parts: [{ label: "", steps: ["$d=10$. Last term gives $n=41$. $S=\\dfrac{41}{2}(17+417)=8897$."], answer: "$8897$" }],
    },
    {
      n: "48",
      about: "$7+10+13+\\cdots+157$, and $\\sum_{r=1}^{51}(3r+4)$.",
      parts: [
        { label: "(a)", steps: ["$7+3(n-1)=157 \\Rightarrow n=51$. $S=\\dfrac{51}{2}(7+157)=4182$."], answer: "$4182$" },
        { label: "(b)", steps: ["$3r+4$ from $r=1$ to $51$ is the same list $7,10,\\ldots,157$."], answer: "$4182$" },
      ],
    },
    {
      n: "49",
      about: "$5+9+13+\\cdots+85$.",
      parts: [
        { label: "(a)", steps: ["$u_n=4n+1$. Last term $85$ gives $n=21$."], answer: "$u_n=4n+1$" },
        { label: "(b)", steps: ["$\\displaystyle\\sum_{n=1}^{21}(4n+1)$."], answer: "$\\sum_{n=1}^{21}(4n+1)$" },
      ],
    },
    {
      n: "50",
      about: "Positive terms of $85,78,71,\\ldots$.",
      parts: [
        {
          label: "",
          steps: [
            "$d=-7$. $85-7(n-1)>0 \\Rightarrow n\\le 13$. Check $u_{13}=1>0$, $u_{14}=-6$.",
            "$S_{13}=\\dfrac{13}{2}(85+1)=559$.",
          ],
          answer: "$559$",
        },
      ],
    },
    {
      n: "51",
      about: "Spends $a$ in year 1, $+d$ each year; year 8 is twice year 4; year 20 is $4000$.",
      parts: [
        {
          label: "",
          steps: [
            "$a+7d=2(a+3d) \\Rightarrow a=d$.",
            "$a+19d=4000$ and $a=d$ give $20d=4000$, so $d=200$.",
          ],
          answer: "$d=200$",
        },
      ],
    },
    {
      n: "52",
      about: "Series $-6+1+8+15+\\cdots$, smallest $n$ with $S_n>10000$.",
      parts: [
        {
          label: "",
          steps: [
            "$d=7$, $u_1=-6$. $S_n=\\dfrac{n}{2}(7n-19)$.",
            "$S_{54}=9693<10000$ and $S_{55}=10065>10000$.",
          ],
          answer: "$n=55$",
        },
      ],
    },
    {
      n: "53",
      about: "Terms $a+3$, $2a+4$, $a+9$.",
      parts: [
        { label: "(a)", steps: ["$2(2a+4)=(a+3)+(a+9) \\Rightarrow a=2$."], answer: "$a=2$" },
        { label: "(b)", steps: ["The terms become $5,8,11$, which go up by $3$."], answer: "terms $5,8,11$ with $d=3$" },
      ],
    },
    {
      n: "54",
      about: "First four terms $2$, $a-b$, $2a+b+7$, $3a-b$ (as printed).",
      parts: [
        {
          label: "",
          steps: [
            "Four arithmetic terms means equal gaps: $2u_2=u_1+u_3$ and $2u_3=u_2+u_4$.",
            "If those four expressions do not give a consistent pair $(a,b)$, check the PDF’s exact third and fourth terms (the print can stack $+7$ onto $2a+b$). Solve the two gap equations as written on your copy.",
          ],
          answer: "Solve $2u_2=u_1+u_3$ and $2u_3=u_2+u_4$ from the printed terms",
        },
      ],
    },
    {
      n: "55",
      about: "$\\dfrac{u_5}{u_{12}}=\\dfrac{6}{13}$, all terms positive, $u_1 u_3=32$. Find $S_{100}$.",
      parts: [
        {
          label: "",
          steps: [
            "$(u_1+4d)/(u_1+11d)=6/13 \\Rightarrow 7u_1=14d \\Rightarrow u_1=2d$.",
            "$u_1 u_3=2d\\cdot 4d=8d^{2}=32 \\Rightarrow d^{2}=4$. Positive terms force $d=2$, $u_1=4$.",
            "$S_{100}=50(8+99\\times 2)=10300$.",
          ],
          answer: "$S_{100}=10300$",
        },
      ],
    },
    {
      n: "56",
      about: "Arithmetic, $S_n=3n^{2}-2n$.",
      parts: [
        { label: "(a)", steps: ["$u_1=S_1=1$. $S_2=8$, so $u_2=7$."], answer: "$u_1=1$, $u_2=7$" },
        { label: "(b)", steps: ["$u_n=S_n-S_{n-1}=6n-5$. (Or $u_1=1$, $d=6$.)"], answer: "$u_n=6n-5$" },
      ],
    },
    {
      n: "57",
      about: "$S_n=n^{2}-2n$ (the question does <em>not</em> say arithmetic).",
      parts: [
        { label: "(a)", steps: ["$S_1=-1$, $S_2=0$, $S_3=3$, so the terms are $-1,\\ 1,\\ 3$."], answer: "$-1,\\ 1,\\ 3$" },
        { label: "(b)", steps: ["Because arithmetic was not given, use $u_n=S_n-S_{n-1}=2n-3$."], answer: "$u_n=2n-3$" },
      ],
    },
    {
      n: "58",
      about: "$S_n=n^{2}+4n$.",
      parts: [
        { label: "(a)", steps: ["$S_4=32$, $S_5=45$, so $u_5=13$."], answer: "$S_4=32$, $S_5=45$, $u_5=13$" },
        { label: "(b)", steps: ["$u_n=S_n-S_{n-1}=2n+3$."], answer: "$u_n=2n+3$" },
        { label: "(c)", steps: ["$u_n-u_{n-1}=(2n+3)-(2n+1)=2$, a constant, so the sequence is arithmetic."], answer: "$d=2$" },
      ],
    },
    {
      n: "59",
      about: "$5,9,13,17,\\ldots$.",
      parts: [
        { label: "(a)", steps: ["$5+4(n-1)<100 \\Rightarrow n=24$. Check $u_{24}=97$, $u_{25}=101$."], answer: "$24$ terms" },
        { label: "(b)", steps: ["Greatest term less than $100$ is $97$."], answer: "$97$" },
        { label: "(c)", steps: ["$S_{24}=12(5+97)=1224$."], answer: "$1224$" },
        { label: "(d)", steps: ["$S_n=n(2n+3)$. $S_{21}=945<1000$ and $S_{22}=1034>1000$."], answer: "$n=21$" },
      ],
    },
    {
      n: "60",
      about: "Triangular piles of cans.",
      parts: [
        { label: "(a)", steps: ["Bottom row $20$: $S=\\dfrac{20\\times 21}{2}=210$."], answer: "$210$" },
        { label: "(b)", steps: ["$n(n+1)/2=3240 \\Rightarrow n^{2}+n-6480=0 \\Rightarrow n=80$."], answer: "$80$" },
        {
          label: "(c)",
          steps: [
            "$n(n+1)/2=S \\Rightarrow n^{2}+n-2S=0$.",
            "For $S=2100$, the discriminant $1+8400=16801$ is not a perfect square ($129^{2}=16641$, $130^{2}=16900$), so $n$ is not an integer.",
          ],
          answer: "cannot form a triangular pile",
        },
      ],
    },
    {
      n: "61",
      about: "$1,4,7,10,13,\\ldots$.",
      parts: [
        { label: "(a)", steps: ["$u_{11}=1+10\\times 3=31$."], answer: "$31$" },
        { label: "(b)", steps: ["$S_n=\\dfrac{n}{2}(2+3(n-1))=\\dfrac{n(3n-1)}{2}$."], answer: "$S_n=\\dfrac{n(3n-1)}{2}$" },
        { label: "(c)", steps: ["$S_{100}=50(300-1)=14950$."], answer: "$14950$" },
        { label: "(d)", steps: ["$n(3n-1)/2=477 \\Rightarrow 3n^{2}-n-954=0$. Discriminant $107^{2}$, so $n=18$."], answer: "$n=18$" },
      ],
    },
    {
      n: "62",
      about: "Terms $2k+3$, $5k-2$, $10k-15$.",
      parts: [
        { label: "(a)", steps: ["$2(5k-2)=(2k+3)+(10k-15) \\Rightarrow k=4$."], answer: "$k=4$" },
        { label: "(b)", steps: ["$11,\\ 18,\\ 25$."], answer: "$11,\\ 18,\\ 25$" },
        { label: "(c)", steps: ["$d=7$."], answer: "$d=7$" },
        { label: "(d)", steps: ["$u_{20}=11+19\\times 7=144$."], answer: "$144$" },
        { label: "(e)", steps: ["$S_{15}=\\dfrac{15}{2}(22+98)=900$."], answer: "$900$" },
      ],
    },
    {
      n: "63",
      about: "First three terms in $x$; the sequence is arithmetic when $x=3$, and for one other $x$.",
      parts: [
        {
          label: "(a)",
          steps: [
            "Substitute $x=3$ into the three printed expressions. Check $2u_2=u_1+u_3$. The common difference is $u_2-u_1$.",
          ],
          answer: "write the three numbers, then $d=u_2-u_1$",
        },
        {
          label: "(c)",
          steps: [
            "Set $2u_2=u_1+u_3$ with the expressions still in $x$. You get a polynomial equation.",
            "One root is the given $x=3$. Factor $(x-3)$ out to find the other root, then write the three terms and $S_4$ for that $x$.",
          ],
          answer: "the other root of $2u_2=u_1+u_3$",
        },
      ],
    },
    {
      n: "64",
      about: "Multiples of $8$ and $6$ between $1$ and $900$.",
      parts: [
        { label: "(a)", steps: ["Last multiple of $8$ is $896$, so $n=112$. $S=\\dfrac{112}{2}(8+896)=50624$."], answer: "$50624$" },
        { label: "(b)", steps: ["From $104$ to $896$: $n=100$. $S=50(104+896)=50000$."], answer: "$50000$" },
        { label: "(c)", steps: ["LCM $24$: $24+\\cdots+888$, $n=37$. $S=37\\times 456=16872$."], answer: "$16872$" },
        { label: "(d)", steps: ["Multiples of $8$ but not $6$: $50624-16872=33752$."], answer: "$33752$" },
        { label: "(e)", steps: ["Multiples of $6$ to $900$: $n=150$, $S=67950$. Union: $50624+67950-16872=101702$."], answer: "$101702$" },
      ],
    },
    {
      n: "65",
      about: "Positive integers grouped $[1]$, $[2,3,4,5]$, … (group sizes $1,4,7,10,\\ldots$).",
      parts: [
        { label: "(a)", steps: ["Group sizes: $u_n=3n-2$. Group $20$ has $58$ integers. Last term of group $20$ is $S_{20}=590$ of those sizes."], answer: "$58$ elements; last term $590$" },
        { label: "(b)", steps: ["Size of group $n$: $3n-2$. Last term of group $n$: $\\dfrac{n(3n-1)}{2}$."], answer: "$3n-2$, $\\dfrac{n(3n-1)}{2}$" },
        { label: "(c)", steps: ["Last of group $19$ is $532$, so the first of group $20$ is $533$."], answer: "$533$" },
        { label: "(d)", steps: ["$58$ terms from $533$ to $590$: $\\dfrac{58}{2}(533+590)=32567$."], answer: "$32567$" },
      ],
    },
  ],
};
