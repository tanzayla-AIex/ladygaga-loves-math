export const geoKey = {
  id: "geo",
  title: "Geometric sequences — answer key",
  sourceTitle: "[MAA 1.4] Geometric sequences (Nikolaidis)",
  file: "resources/maa-1.4-geometric-sequences.pdf",
  intro:
    "Answers by question number for the 55-item geometric worksheet. Match each item to your PDF by the given values. Use exact values on non-GDC items. $S_{\\infty}$ exists only when $|r|<1$.",
  items: [
    {
      n: "1",
      about: "$10,20,40,80,\\ldots$.",
      parts: [
        { label: "(a)", steps: ["$u_1=10$, $r=2$."], answer: "$u_1=10$, $r=2$" },
        { label: "(b)", steps: ["$u_{10}=10\\times 2^{9}=5120$."], answer: "$5120$" },
        { label: "(c)", steps: ["$S_{10}=\\dfrac{10(2^{10}-1)}{1}=10230$."], answer: "$10230$" },
        { label: "(d)", steps: ["$u_n=10\\times 2^{n-1}$."], answer: "$u_n=10\\cdot 2^{n-1}$" },
        { label: "(e)", steps: ["$10\\times 2^{n-1}=20480 \\Rightarrow 2^{n-1}=2048=2^{11} \\Rightarrow n=12$."], answer: "$n=12$" },
      ],
    },
    {
      n: "2",
      about: "$10,5,2.5,1.25,\\ldots$.",
      parts: [
        { label: "(a)", steps: ["$u_1=10$, $r=\\dfrac{1}{2}$."], answer: "$u_1=10$, $r=\\dfrac{1}{2}$" },
        { label: "(b)", steps: ["$u_{10}=10\\times\\left(\\dfrac{1}{2}\\right)^{9}=\\dfrac{10}{512}=\\dfrac{5}{256}$."], answer: "$\\dfrac{5}{256}$" },
        { label: "(c)", steps: ["$S_{10}=10\\dfrac{1-(1/2)^{10}}{1/2}=20\\left(1-\\dfrac{1}{1024}\\right)=\\dfrac{10230}{512}=19.98046875$."], answer: "$19.98046875$" },
        { label: "(d)", steps: ["$u_n=10\\left(\\dfrac{1}{2}\\right)^{n-1}$."], answer: "$u_n=10\\cdot 2^{1-n}$" },
        { label: "(e)", steps: ["$10\\cdot 2^{1-n}=0.3125=\\dfrac{5}{16} \\Rightarrow 2^{n-1}=32 \\Rightarrow n=6$."], answer: "$n=6$" },
        { label: "(f)", steps: ["$|r|=\\dfrac{1}{2}<1$, so the series converges. $S_{\\infty}=\\dfrac{10}{1-1/2}=20$."], answer: "$S_{\\infty}=20$" },
      ],
    },
    {
      n: "3",
      about: "$u_1=5$, $u_4=40$.",
      parts: [
        { label: "(a)", steps: ["$5r^{3}=40 \\Rightarrow r=2$."], answer: "$r=2$" },
        { label: "(b)", steps: ["$u_5=5\\times 2^{4}=80$."], answer: "$80$" },
        { label: "(c)", steps: ["$S_{10}=5(2^{10}-1)=5115$."], answer: "$5115$" },
        { label: "(d)", steps: ["$5\\times 2^{n-1}>1000 \\Rightarrow 2^{n-1}>200$. $2^{7}=128$, $2^{8}=256$, so $n=9$."], answer: "$n=9$" },
        { label: "(e)", steps: ["$u_9=5\\times 256=1280$."], answer: "$1280$" },
        { label: "(f)", steps: ["$|r|=2>1$, so the terms grow and $S_{\\infty}$ does not exist."], answer: "diverges because $|r|>1$" },
      ],
    },
    {
      n: "4",
      about: "Two infinite series whose first terms are $1$ and whose ratios are $\\pm\\dfrac{2}{5}$ (printed as $1,\\dfrac{2}{5},\\dfrac{4}{25},\\dfrac{8}{125},\\ldots$).",
      parts: [
        {
          label: "(i)",
          steps: [
            "$u_1=1$, $r=\\dfrac{2}{5}$, and $\\left|\\dfrac{2}{5}\\right|<1$.",
            "$S_{\\infty}=\\dfrac{1}{1-2/5}=\\dfrac{5}{3}$.",
            "If your print instead shows $1,\\dfrac{5}{2},\\dfrac{25}{4},\\ldots$, then $|r|=\\dfrac{5}{2}>1$ and the infinite sum does not exist.",
          ],
          answer: "$\\dfrac{5}{3}$",
        },
        {
          label: "(ii)",
          steps: ["Same first term, $r=-\\dfrac{2}{5}$. $S_{\\infty}=\\dfrac{1}{1+2/5}=\\dfrac{5}{7}$."],
          answer: "$\\dfrac{5}{7}$",
        },
      ],
    },
    {
      n: "5",
      about: "$k$, $2k$, $k+60$ consecutive.",
      parts: [
        { label: "(a)", steps: ["Arithmetic: $2(2k)=k+(k+60) \\Rightarrow k=30$. Terms $30,60,90$ with $d=30$."], answer: "$k=30$; $d=30$" },
        { label: "(b)", steps: ["Geometric: $(2k)^{2}=k(k+60)$. For $k\\neq 0$, $k=20$. Terms $20,40,80$ with $r=2$."], answer: "$k=20$; $r=2$" },
      ],
    },
    {
      n: "6",
      about: "$\\sum_{k=1}^{10} 2^{k}$ and $\\sum_{k=1}^{\\infty}(0.5)^{k}$.",
      parts: [
        { label: "(i)", steps: ["$2+4+\\cdots+2^{10}=2(2^{10}-1)/(2-1)=2046$."], answer: "$2046$" },
        { label: "(ii)", steps: ["$|r|=1/2<1$. $S_{\\infty}=\\dfrac{1/2}{1-1/2}=1$."], answer: "$1$" },
      ],
    },
    {
      n: "7",
      about: "$5,15,45,135,\\ldots$.",
      parts: [
        { label: "(a)", steps: ["$5\\times 3^{n-1}<100000 \\Rightarrow 3^{n-1}<20000$. $3^{9}=19683$, so $n=10$ terms."], answer: "$10$ terms" },
        { label: "(b)", steps: ["Greatest is $5\\times 3^{9}=98415$."], answer: "$98415$" },
        { label: "(c)", steps: ["$S_n=\\dfrac{5(3^{n}-1)}{2}$. $S_9=49205<100000$ and $S_{10}=147620$."], answer: "$n=9$" },
      ],
    },
    {
      n: "8",
      about: "Find $u_1$ and $r$ from two pieces of data.",
      parts: [
        { label: "(a)", steps: ["$u_{10}/u_7=r^{3}=27 \\Rightarrow r=3$. Then $u_1=3645/3^{6}=5$."], answer: "$u_1=5$, $r=3$" },
        { label: "(b)", steps: ["$r^{3}=1/27 \\Rightarrow r=1/3$. $u_1=98415\\times 729=71744535$."], answer: "$u_1=71744535$, $r=\\dfrac{1}{3}$" },
        { label: "(c)", steps: ["$S_4/S_2=10 \\Rightarrow r^{2}+1=10 \\Rightarrow r=\\pm 3$. Then $u_1(r+1)=20$ gives $(u_1,r)=(5,3)$ or $(-10,-3)$."], answer: "$(5,3)$ or $(-10,-3)$" },
        { label: "(d)", steps: ["$S_{\\infty}=u_1/(1-r)=40$ and $S_3=35$ give $1-r^{3}=7/8$, so $r=1/2$, $u_1=20$."], answer: "$u_1=20$, $r=\\dfrac{1}{2}$" },
      ],
    },
    {
      n: "9",
      about: "$3,\\ 3(0.9),\\ 3(0.9)^{2},\\ldots$.",
      parts: [
        { label: "(a)", steps: ["$u_{10}=3(0.9)^{9}$. Leave it unsimplified as asked."], answer: "$3(0.9)^{9}$" },
        { label: "(b)", steps: ["$|0.9|<1$. $S_{\\infty}=\\dfrac{3}{1-0.9}=30$."], answer: "$30$" },
      ],
    },
    {
      n: "10",
      about: "$25,5,1,0.2,\\ldots$.",
      parts: [
        { label: "(a)", steps: ["$r=5/25=1/5$."], answer: "$r=\\dfrac{1}{5}$" },
        { label: "(b)", steps: ["$u_{10}=25\\times(1/5)^{9}=5^{-7}$. $u_n=25\\times 5^{1-n}=5^{3-n}$."], answer: "$u_{10}=5^{-7}$, $u_n=5^{3-n}$" },
        { label: "(c)", steps: ["$S_{\\infty}=25/(1-1/5)=125/4$."], answer: "$\\dfrac{125}{4}$" },
      ],
    },
    {
      n: "11",
      about: "$405+270+180+\\cdots$.",
      parts: [
        { label: "(a)", steps: ["$r=270/405=2/3$."], answer: "$r=\\dfrac{2}{3}$" },
        { label: "(b)", steps: ["$u_{15}=405\\times(2/3)^{14}$."], answer: "$405\\left(\\dfrac{2}{3}\\right)^{14}$" },
        { label: "(c)", steps: ["$S_{\\infty}=405/(1-2/3)=1215$."], answer: "$1215$" },
      ],
    },
    {
      n: "12",
      about: "$18,54,162,486$.",
      parts: [
        { label: "(a)", steps: ["$54/18=162/54=486/162=3$. All consecutive ratios equal, so geometric."], answer: "$r=3$" },
        { label: "(b)", steps: ["$u_n=18\\times 3^{n-1}$. Then $3^{n-1}=1062882/18=59049=3^{10}$, so $n=11$."], answer: "$u_n=18\\cdot 3^{n-1}$, $n=11$" },
      ],
    },
    {
      n: "13",
      about: "$8,\\ a,\\ 2,\\ldots$ with $r=1/2$.",
      parts: [
        { label: "(a)", steps: ["$a=8\\times 1/2=4$."], answer: "$a=4$" },
        { label: "(b)", steps: ["$u_8=8\\times(1/2)^{7}=1/16$."], answer: "$\\dfrac{1}{16}$" },
        { label: "(c)", steps: ["$S_{12}=8\\dfrac{1-(1/2)^{12}}{1/2}=16(1-1/4096)=15.984375$."], answer: "$15.984375$" },
      ],
    },
    {
      n: "14",
      about: "$16,8,a,2,b,\\ldots$.",
      parts: [
        { label: "(a)", steps: ["$r=8/16=1/2$."], answer: "$r=\\dfrac{1}{2}$" },
        { label: "(b)", steps: ["$a=4$, $b=1$."], answer: "$a=4$, $b=1$" },
        { label: "(c)", steps: ["$S_n=16(1-2^{-n})/(1/2)=32(1-2^{-n})=31.9375 \\Rightarrow 2^{-n}=1/512=2^{-9} \\Rightarrow n=9$."], answer: "$n=9$" },
      ],
    },
    {
      n: "15",
      about: "$3000,-1800,1080,-648,\\ldots$.",
      parts: [
        { label: "(a)", steps: ["$r=-1800/3000=-3/5$."], answer: "$r=-\\dfrac{3}{5}$" },
        { label: "(b)", steps: ["$u_{10}=3000(-3/5)^{9}$."], answer: "$3000\\left(-\\dfrac{3}{5}\\right)^{9}$" },
        { label: "(c)", steps: ["$S_{\\infty}=3000/(1+3/5)=1875$."], answer: "$1875$" },
      ],
    },
    {
      n: "16",
      about: "$32,16,8,\\ldots$.",
      parts: [
        { label: "(a)", steps: ["$r=1/2$."], answer: "$r=\\dfrac{1}{2}$" },
        { label: "(b)", steps: ["$u_6=32\\times(1/2)^{5}=1$."], answer: "$1$" },
        { label: "(c)", steps: ["$S_{\\infty}=32/(1/2)=64$."], answer: "$64$" },
      ],
    },
    {
      n: "17",
      about: "$27,-9,3,-1,\\ldots$.",
      parts: [{ label: "", steps: ["$r=-1/3$. $S_{\\infty}=27/(1+1/3)=81/4$."], answer: "$\\dfrac{81}{4}$" }],
    },
    {
      n: "18",
      about: "Series $\\dfrac{3}{2}-\\dfrac{9}{4}+\\dfrac{27}{8}-\\dfrac{81}{16}+\\cdots$.",
      parts: [
        {
          label: "",
          steps: [
            "$u_1=\\dfrac{3}{2}$, $r=-\\dfrac{3}{2}$. Then $|r|>1$, so $S_{\\infty}$ does not exist.",
            "If your print is instead $\\dfrac{2}{3}-\\dfrac{4}{9}+\\dfrac{8}{27}-\\cdots$, then $r=-\\dfrac{2}{3}$ and $S_{\\infty}=\\dfrac{2}{5}$.",
          ],
          answer: "does not exist ($|r|=3/2>1$)",
        },
      ],
    },
    {
      n: "19",
      about: "$12-8+\\dfrac{16}{3}-\\cdots$.",
      parts: [{ label: "", steps: ["$r=-8/12=-2/3$. $S_{\\infty}=12/(1+2/3)=36/5$."], answer: "$\\dfrac{36}{5}$" }],
    },
    {
      n: "20",
      about: "$u_n=3\\times 4^{n+1}$.",
      parts: [
        { label: "(a)", steps: ["$u_1=3\\times 16=48$, $u_2=3\\times 64=192$, so $r=4$."], answer: "$48,\\ 192$, $r=4$" },
        { label: "(b)", steps: ["$S_n=48(4^{n}-1)/(4-1)=16(4^{n}-1)$."], answer: "$S_n=16(4^{n}-1)$" },
      ],
    },
    {
      n: "21",
      about: "$u_1=2$, $r=1.05$. Smallest term greater than $500$.",
      parts: [
        {
          label: "",
          steps: [
            "$2(1.05)^{n-1}>500 \\Rightarrow n-1>\\ln 250/\\ln 1.05\\approx 113.17$.",
            "$u_{114}\\approx 496<500$, so the first success is $u_{115}\\approx 520.7$, which rounds to $521$.",
          ],
          answer: "$521$",
        },
      ],
    },
    {
      n: "22",
      about: "$u_n=3\\times 2^{n}$.",
      parts: [
        { label: "(a)", steps: ["$6+12+24=42$."], answer: "$42$" },
        { label: "(b)", steps: ["Geometric with $u_1=6$, $r=2$. $S_{12}=6(2^{12}-1)=24570$."], answer: "$24570$" },
      ],
    },
    {
      n: "23",
      about: "Fees $2000,2500,3125$.",
      parts: [
        { label: "(a)", steps: ["$r=2500/2000=1.25$."], answer: "$r=1.25$" },
        { label: "(b)", steps: ["$S_6=2000(1.25^{6}-1)/0.25=22517.578\\ldots$, nearest dollar $22518$."], answer: "$22518$" },
      ],
    },
    {
      n: "24",
      about: "Fees $8000$, $8320$, $8652.80$.",
      parts: [
        { label: "(a)", steps: ["$r=8320/8000=1.04$ (check $8652.80/8320=1.04$)."], answer: "$r=1.04$" },
        { label: "(b)", steps: ["Year $2006$ is the 7th term: $8000\\times 1.04^{6}=10122.55$ (2 d.p.)."], answer: "$10122.55$" },
        { label: "(c)", steps: ["$S_8=8000(1.04^{8}-1)/0.04=73713.81$ (2 d.p.)."], answer: "$73713.81$" },
      ],
    },
    {
      n: "25",
      about: "John arithmetic $+0.1$ min; Ann geometric $r=1.05$; first length $2$ min.",
      parts: [
        { label: "(a)", steps: ["John: $u_3=2+2\\times 0.1=2.2$. Ann: $2\\times 1.05^{2}=2.205$."], answer: "John $2.2$ min; Ann $2.205$ min" },
        { label: "(b)", steps: ["Ann $S_{10}=2(1.05^{10}-1)/0.05=25.156$ (3 d.p.)."], answer: "$25.156$ min" },
        { label: "(c)", steps: ["John $S_{10}=\\dfrac{10}{2}(4+9\\times 0.1)=24.5$ min."], answer: "$24.5$ min" },
      ],
    },
    {
      n: "26",
      about: "Population $40000$ (end 1996), $44100$ (end 1998).",
      parts: [
        { label: "(a)", steps: ["Middle term: $40000\\times\\sqrt{44100/40000}=42000$."], answer: "$42000$" },
        { label: "(b)", steps: ["End of 1992 is $4$ years before 1996: $40000/(1.05)^{4}=32908$ (nearest person, or exact $40000\\times(20/21)^{4}$)."], answer: "$40000\\times(20/21)^{4}\\approx 32908$" },
      ],
    },
    {
      n: "27",
      about: "Positive terms, $u_1=7$, $u_3=28$.",
      parts: [
        { label: "(a)", steps: ["$7r^{2}=28 \\Rightarrow r=2$ (positive)."], answer: "$r=2$" },
        { label: "(b)", steps: ["$S_{14}=7(2^{14}-1)=114681$."], answer: "$114681$" },
      ],
    },
    {
      n: "28",
      about: "$u_1=18$, $u_3=8$. Two possible sequences.",
      parts: [
        { label: "(a)", steps: ["$r^{2}=8/18=4/9 \\Rightarrow r=\\pm 2/3$."], answer: "$r=\\pm\\dfrac{2}{3}$" },
        { label: "(b)", steps: ["$S_{\\infty}=18/(1-2/3)=54$ or $18/(1+2/3)=54/5$."], answer: "$54$ and $\\dfrac{54}{5}$" },
        { label: "(c)", steps: ["$18,\\ 12,\\ 8$ and $18,\\ -12,\\ 8$."], answer: "$18,12,8$ and $18,-12,8$" },
      ],
    },
    {
      n: "29",
      about: "$u_1=18$, $u_4=-2/3$.",
      parts: [
        { label: "(a)", steps: ["$18 r^{3}=-2/3 \\Rightarrow r^{3}=-1/27 \\Rightarrow r=-1/3$."], answer: "$r=-\\dfrac{1}{3}$" },
        { label: "(b)", steps: ["$S_{\\infty}=18/(1+1/3)=27/2$."], answer: "$\\dfrac{27}{2}$" },
      ],
    },
    {
      n: "30",
      about: "$u_7=108$, $u_8=36$.",
      parts: [
        { label: "(a)", steps: ["$r=36/108=1/3$."], answer: "$r=\\dfrac{1}{3}$" },
        { label: "(b)", steps: ["$108=u_1(1/3)^{6} \\Rightarrow u_1=78732$."], answer: "$78732$" },
        { label: "(c)", steps: ["$S_k=78732\\dfrac{1-(1/3)^{k}}{2/3}=118096 \\Rightarrow k=10$."], answer: "$k=10$" },
      ],
    },
    {
      n: "31",
      about: "$u_2=12$, $u_5=324$.",
      parts: [
        { label: "(a)", steps: ["$r^{3}=324/12=27 \\Rightarrow r=3$."], answer: "$r=3$" },
        { label: "(b)", steps: ["$u_1=4$, $u_{10}=4\\times 3^{9}=78732$."], answer: "$78732$" },
        { label: "(c)", steps: ["$4\\times 3^{k-1}>2000 \\Rightarrow 3^{k-1}>500$. $u_6=972$, $u_7=2916$, so $k=7$."], answer: "$k=7$" },
      ],
    },
    {
      n: "32",
      about: "$u_1=1/81$, $u_4=1/3$.",
      parts: [
        { label: "(a)", steps: ["$r^{3}=27 \\Rightarrow r=3$."], answer: "$r=3$" },
        { label: "(b)", steps: ["$S_n=(3^{n}-1)/162>40 \\Rightarrow 3^{n}>6481$. $3^{7}=2187$, $3^{8}=6561$, so $n=8$."], answer: "$n=8$" },
        { label: "(c)", steps: ["$S_7\\approx 13.49<40$ and $S_8\\approx 40.49>40$."], answer: "confirmed" },
      ],
    },
    {
      n: "33",
      about: "$u_3=-108$, $u_6=32$.",
      parts: [
        { label: "(a)", steps: ["$r^{3}=32/(-108)=-8/27 \\Rightarrow r=-2/3$. Then $u_1=-108/(4/9)=-243$."], answer: "$r=-\\dfrac{2}{3}$, $u_1=-243$" },
        { label: "(b)", steps: ["$S_6=-243\\dfrac{1-(-2/3)^{6}}{1+2/3}=-133$."], answer: "$-133$" },
        { label: "(c)", steps: ["$|r|<1$. $S_{\\infty}=-243/(5/3)=-729/5$."], answer: "$-\\dfrac{729}{5}$" },
      ],
    },
    {
      n: "34",
      about: "$5,x,45,y$ consecutive geometric.",
      parts: [
        { label: "(a)", steps: ["$x^{2}=5\\times 45=225 \\Rightarrow x=\\pm 15$."], answer: "$x=\\pm 15$" },
        { label: "(b)", steps: ["$y=45\\times(x/5)$, so $y=135$ or $y=-135$."], answer: "$y=\\pm 135$" },
      ],
    },
    {
      n: "35",
      about: "$a,1,b$ arithmetic; $1,a,b$ geometric; $a\\neq b$.",
      parts: [
        {
          label: "",
          steps: [
            "$2=a+b$ so $b=2-a$. Geometric: $a^{2}=b=2-a$.",
            "$a^{2}+a-2=0 \\Rightarrow (a+2)(a-1)=0$. $a=1$ gives $b=1$, rejected.",
            "So $a=-2$, $b=4$.",
          ],
          answer: "$a=-2$, $b=4$",
        },
      ],
    },
    {
      n: "36",
      about: "$k=\\sum_{x=0}^{\\infty}\\left(\\dfrac{2}{3}\\right)^{x}$.",
      parts: [{ label: "", steps: ["$|2/3|<1$. $k=\\dfrac{1}{1-2/3}=3$."], answer: "$k=3$" }],
    },
    {
      n: "37",
      about: "Infinite series $2+2\\left(\\dfrac{2x}{3}\\right)+2\\left(\\dfrac{2x}{3}\\right)^{2}+\\cdots$ (first term $2$, ratio $\\dfrac{2x}{3}$ as printed).",
      parts: [
        { label: "(a)", steps: ["Converges when $\\left|\\dfrac{2x}{3}\\right|<1 \\Rightarrow |x|<\\dfrac{3}{2}$."], answer: "$-\\dfrac{3}{2}<x<\\dfrac{3}{2}$" },
        { label: "(b)", steps: ["If $x=1.2$, $r=0.8$, $S_{\\infty}=2/(1-0.8)=10$."], answer: "$10$" },
      ],
    },
    {
      n: "38",
      about: "$\\sum_{k=1}^{\\infty} 2(4x-3)^{k-1}$.",
      parts: [
        { label: "(a)", steps: ["Common ratio $r=4x-3$."], answer: "$r=4x-3$" },
        { label: "(b)", steps: ["$|4x-3|<1 \\Rightarrow \\dfrac{1}{2}<x<1$."], answer: "$\\dfrac{1}{2}<x<1$" },
        {
          label: "(c)",
          steps: [
            "As printed, $x=1.2$ gives $r=1.8$, so $|r|>1$ and there is no finite $S_{\\infty}$.",
            "The sum of the first $n$ terms still exists: $S_1=2$, which already exceeds $1.328$, so that $n$ would be $1$ if the question still wants a finite-$n$ answer.",
            "If a value inside the interval was intended (for example $x=0.7$), then $r=-0.2$ and $S_{\\infty}=5/3$.",
          ],
          answer: "no $S_{\\infty}$ at $x=1.2$; $S_1=2>1.328$",
        },
      ],
    },
    {
      n: "39",
      about: "Positive terms, $S_2=15$, $S_{\\infty}=27$.",
      parts: [
        { label: "(a)", steps: ["$u(1+r)=15$, $u/(1-r)=27$. Then $27(1-r^{2})=15 \\Rightarrow r^{2}=4/9$. Positive terms: $r=2/3$."], answer: "$r=\\dfrac{2}{3}$" },
        { label: "(b)", steps: ["$u=27(1-2/3)=9$."], answer: "$u_1=9$" },
      ],
    },
    {
      n: "40",
      about: "$S_{\\infty}=13\\dfrac{1}{2}$, $S_3=13$. Find $u_1$.",
      parts: [
        {
          label: "",
          steps: [
            "$u/(1-r)=27/2$ and $u(1-r^{3})/(1-r)=13$ give $1-r^{3}=26/27$, so $r=1/3$.",
            "$u=\\dfrac{27}{2}\\times\\dfrac{2}{3}=9$.",
          ],
          answer: "$u_1=9$",
        },
      ],
    },
    {
      n: "41",
      about: "$S_{\\infty}=32$, $S_4=30$, all terms positive. Find $S_{\\infty}-S_8$.",
      parts: [
        {
          label: "",
          steps: [
            "$1-r^{4}=30/32=15/16 \\Rightarrow r=1/2$ (positive).",
            "$S_8=32\\bigl(1-2^{-8}\\bigr)=31.875$, so the difference is $0.125=\\dfrac{1}{8}$.",
          ],
          answer: "$\\dfrac{1}{8}$",
        },
      ],
    },
    {
      n: "42",
      about: "Mixed AP/GP.",
      parts: [
        { label: "(a)", steps: ["$-16+10d=39 \\Rightarrow d=5.5$."], answer: "$d=\\dfrac{11}{2}$" },
        { label: "(b)", steps: ["$12 r^{2}=16/3 \\Rightarrow r^{2}=4/9$. Positive terms: $r=2/3$."], answer: "$r=\\dfrac{2}{3}$" },
      ],
    },
    {
      n: "43",
      about: "AP: $u_1=0$, $d=12$. GP: $u_1=6$, and $v_6=u_{17}$.",
      parts: [
        { label: "(a)", steps: ["$u_{96}=95\\times 12=1140$."], answer: "$1140$" },
        { label: "(b)", steps: ["$u_{17}=192=6r^{5} \\Rightarrow r^{5}=32 \\Rightarrow r=2$."], answer: "$r=2$" },
        { label: "(c)", steps: ["$12(n-1)=6\\times 2^{n-1} \\Rightarrow n-1=2^{n-2}$. This holds for $n=2$ and $n=3$."], answer: "$n=2$ or $n=3$" },
      ],
    },
    {
      n: "44",
      about: "$S_n=4n^{2}-2n$; $u_2,u_m,u_{32}$ geometric. Find $m$.",
      parts: [
        {
          label: "",
          steps: [
            "$u_n=S_n-S_{n-1}=8n-6$ for $n\\ge 2$, and $u_1=2$. So $u_2=10$, $u_{32}=250$, $u_m=8m-6$.",
            "$(8m-6)^{2}=2500 \\Rightarrow 8m-6=\\pm 50$. The positive position is $m=7$.",
            "Check: $10,\\ 50,\\ 250$ with $r=5$.",
          ],
          answer: "$m=7$",
        },
      ],
    },
    {
      n: "45",
      about: "$u_3,u_4,u_7$ of an AP form a GP.",
      parts: [
        { label: "(a)", steps: ["$(a+3d)^{2}=(a+2d)(a+6d)$ simplifies to $a=-\\dfrac{3}{2}d$ (using $d\\neq 0$)."], answer: "$a=-\\dfrac{3}{2}d$" },
        { label: "(b)", steps: ["$u_3=\\dfrac{1}{2}d$, $u_4=\\dfrac{3}{2}d$, so $r=3$."], answer: "$r=3$" },
      ],
    },
    {
      n: "46",
      about: "GP terms also AP terms $1$, $11$, $16$; $S_{\\infty}=18$; terms different.",
      parts: [
        { label: "(a)", steps: ["Positions force $a=-20d$ and $r=1/2$ (reject $r=1$)."], answer: "$r=\\dfrac{1}{2}$" },
        { label: "(b)", steps: ["$S_{\\infty}=u/(1-1/2)=18 \\Rightarrow u=9$. Then $9+10d=9/2 \\Rightarrow d=-0.45$."], answer: "$d=-\\dfrac{9}{20}$" },
      ],
    },
    {
      n: "47",
      about: "$u_1=500$, $u_4=62.5$.",
      parts: [
        { label: "(a)", steps: ["$r^{3}=1/8 \\Rightarrow r=1/2$."], answer: "$r=\\dfrac{1}{2}$" },
        { label: "(b)", steps: ["$u_5=31.25$."], answer: "$31.25$" },
        { label: "(c)", steps: ["$S_{10}=500(1-2^{-10})/(1/2)=999.0234375$, so $999.023$ to 3 d.p."], answer: "$999.023$" },
        { label: "(d)", steps: ["$500\\times 2^{1-n}<10 \\Rightarrow 2^{n-1}>50$. $2^{5}=32$, $2^{6}=64$, so $n=7$."], answer: "$n=7$" },
        { label: "(e)", steps: ["$u_7=500/64=7.8125$."], answer: "$7.8125$" },
      ],
    },
    {
      n: "48",
      about: "Cellmania sales $160,240,360$ from 1990.",
      parts: [
        { label: "(a)", steps: ["$r=240/160=1.5$."], answer: "$r=1.5$" },
        { label: "(b)", steps: ["2002 is term $13$: $160\\times 1.5^{12}=20759.4140625$."], answer: "$20759$ units (or exact $160\\times(3/2)^{12}$)" },
        { label: "(c)", steps: ["$160\\times 1.5^{n-1}>5000 \\Rightarrow n=10$, year $1999$ ($u_{10}=6150.9375$)."], answer: "$1999$" },
        { label: "(d)", steps: ["$S_{13}=160(1.5^{13}-1)/0.5=61958.2421875$."], answer: "$61958$ units" },
        { label: "(e)", steps: ["Sales would pass the population of about $80000$, which is not realistic."], answer: "growth cannot continue past the population" },
      ],
    },
    {
      n: "49",
      about: "Shaded squares, area of $A$ is $\\dfrac{1}{4}$, each next square half the previous.",
      parts: [
        { label: "(a)", steps: ["$B=1/8$, $C=1/16$. Ratios $B/A=C/B=1/2$, so geometric with $r=1/2$."], answer: "$B=\\dfrac{1}{8}$, $C=\\dfrac{1}{16}$, $r=\\dfrac{1}{2}$" },
        { label: "(b)", steps: ["Diagram 2: $1/4+1/8=3/8$. Diagram 8: $S_8=\\dfrac{1}{2}(1-2^{-8})=255/512\\approx 0.498047$."], answer: "$\\dfrac{3}{8}$, $0.498047$" },
        { label: "(c)", steps: ["$S_{\\infty}=\\dfrac{1/4}{1-1/2}=\\dfrac{1}{2}$."], answer: "$\\dfrac{1}{2}$" },
      ],
    },
    {
      n: "50",
      about: "Square of side $4$, joining midpoints repeatedly.",
      parts: [
        { label: "(a)", steps: ["$PQ=\\sqrt{2^{2}+2^{2}}=2\\sqrt{2}$. Area of PQRS $=(2\\sqrt{2})^{2}=8$."], answer: "$PQ=2\\sqrt{2}$, area $8$" },
        { label: "(b)", steps: ["Third square has area $4$. Areas $16,8,4$ with $r=1/2$."], answer: "area $4$, $r=\\dfrac{1}{2}$" },
        { label: "(c)", steps: ["11th square: $16\\times(1/2)^{10}=1/64$. Infinite sum of areas: $16/(1-1/2)=32$."], answer: "$\\dfrac{1}{64}$, $32$" },
      ],
    },
    {
      n: "51",
      about: "$-3,6,-12,24,\\ldots$ and $x-3,\\ x+1,\\ 2x+8$.",
      parts: [
        { label: "(a)", steps: ["$r=-2$. $u_{15}=-3(-2)^{14}=-49152$."], answer: "$r=-2$, $u_{15}=-49152$" },
        { label: "(b)", steps: ["$x=5$: terms $2,6,18$ with $r=3$."], answer: "$2,6,18$, $r=3$" },
        { label: "(c)", steps: ["$(x+1)^{2}=(x-3)(2x+8) \\Rightarrow x^{2}=25$, so the other value is $x=-5$."], answer: "$x=-5$" },
        { label: "(d)", steps: ["Terms $-8,-4,-2$, $r=1/2$. $S_{\\infty}=-8/(1/2)=-16$."], answer: "$r=\\dfrac{1}{2}$, $S_{\\infty}=-16$" },
      ],
    },
    {
      n: "52",
      about: "$G_1$: $u_1=1$, $r=3$. $G_2$: $1,1/3,1/9,\\ldots$.",
      parts: [
        { label: "(a)", steps: ["$(3^{n}-1)/2=29524 \\Rightarrow 3^{n}=59049=3^{10}$, so $n=10$."], answer: "$n=10$" },
        { label: "(b)", steps: ["$r=1/3$."], answer: "$r=\\dfrac{1}{3}$" },
        { label: "(c)", steps: ["$S_{10}=\\dfrac{3}{2}\\bigl(1-3^{-10}\\bigr)=1.49997\\ldots$."], answer: "$1.50$ to 3 s.f." },
        { label: "(d)", steps: ["The remaining terms after $n=10$ total less than $0.00003$, so 3 s.f. is still $1.50$ at $n=1000$."], answer: "tail is smaller than the 3 s.f. place" },
        { label: "(e)", steps: ["The mixed sequence is $G_1+G_2$ termwise. Sum of first 10: $29524+1.49997\\ldots=29525.5$ to 1 d.p."], answer: "$29525.5$" },
      ],
    },
    {
      n: "53",
      about: "$u_1=1024$, $u_4=128$.",
      parts: [
        { label: "(a)", steps: ["$r^{3}=128/1024=1/8 \\Rightarrow r=1/2$."], answer: "$r=\\dfrac{1}{2}$" },
        { label: "(b)", steps: ["$u_{11}=1024\\times 2^{-10}=1$."], answer: "$1$" },
        { label: "(c)", steps: ["$S_8=1024(1-2^{-8})/(1/2)=2040$."], answer: "$2040$" },
        { label: "(d)", steps: ["$S_n=2048(1-2^{-n})>2047.968 \\Rightarrow n=16$."], answer: "$n=16$" },
        { label: "(e)", steps: ["$S_{15}=2047.9375<2047.968$ and $S_{16}=2047.96875$."], answer: "confirmed" },
      ],
    },
    {
      n: "54",
      about: "Lottery: option 1 constant $1000$; option 2 AP $250+200(n-1)$; option 3 GP $10,20,40,\\ldots$; $10$ weeks.",
      parts: [
        { label: "(a)", steps: ["Option 2 week 10: $250+9\\times 200=2050$. Option 3 week 10: $10\\times 2^{9}=5120$."], answer: "$2050$, $5120$" },
        { label: "(b)", steps: ["Option 2 total: $\\dfrac{10}{2}(500+1800)=11500$."], answer: "$11500$" },
        { label: "(c)", steps: ["Option 1 total $10000$. Option 3: $10(2^{10}-1)=10230$. Greatest is option 2."], answer: "option 2 ($11500$)" },
      ],
    },
    {
      n: "55",
      about: "AP $u_n=135+7n$; GP $v_1=20$, $v_4=67.5$.",
      parts: [
        { label: "(a)", steps: ["$u_1=135+7=142$."], answer: "$142$" },
        { label: "(b)", steps: ["$u_2-u_1=7$."], answer: "$d=7$" },
        { label: "(c)", steps: ["$S_n=\\dfrac{n}{2}(284+7(n-1))=\\dfrac{7}{2}n^{2}+\\dfrac{277}{2}n$."], answer: "$S_n=\\dfrac{7}{2}n^{2}+\\dfrac{277}{2}n$" },
        { label: "(d)", steps: ["$20 r^{3}=67.5 \\Rightarrow r^{3}=3.375=27/8 \\Rightarrow r=1.5$."], answer: "$r=1.5$" },
        { label: "(e)", steps: ["$T_7=20(1.5^{7}-1)/0.5=643.4375$."], answer: "$643.4375$" },
        { label: "(f)", steps: ["Compare $T_n$ and $S_n$ on a GDC. $T_9=1497.73<S_9=1530$ and $T_{10}=2266.60>S_{10}=1735$."], answer: "$n=10$" },
      ],
    },
  ],
};
