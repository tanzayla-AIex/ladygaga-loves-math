export const gdcTopics = [
  { id: "all", name: "All" },
  { id: "basics", name: "Basics" },
  { id: "graphing", name: "Graphing" },
  { id: "algebra", name: "Algebra" },
  { id: "sequences", name: "Sequences" },
];

export const gdcLessons = [
  {
    id: "home",
    topic: "basics",
    title: "Home screen and MODE",
    minutes: 5,
    blurb: "The home screen is ordinary arithmetic. MODE is where Paper 2 goes wrong if radian/degree or SEQ/FUNC is on the wrong setting.",
    steps: [
      { do: "Clear and quit", see: "CLEAR wipes the current line. 2nd MODE is Quit — back to home from any menu." },
      { do: "Use the right minus", see: "The bottom $(−)$ key is a negative sign. The side $−$ key is subtract. $5(−)2$ is not $5-2$." },
      { do: "Check MODE", see: "RADIAN for AA HL trig. FUNC for ordinary $y=f(x)$ graphs. SEQ only when you are graphing $u(n)$." },
      { do: "Reuse a result", see: "2nd $(−)$ pastes Ans. Up-arrow copies the last line so you can edit it." },
    ],
    videos: [
      {
        yt: "67061OxJcM8",
        title: "Getting started with the TI-84 Plus CE",
        channel: "Mario's Math Tutoring",
        why: "Home screen, negatives, fractions, MODE, Ans, then graphing.",
      },
      {
        yt: "gcESDY1g1ls",
        title: "Modes, settings and organisation",
        channel: "Texas Instruments Education",
        why: "Official TI walkthrough of MODE, memory, and MathPrint.",
      },
    ],
  },
  {
    id: "frac",
    topic: "basics",
    title: "Fractions and exact answers",
    minutes: 4,
    blurb: "Paper 2 still wants exact values unless it says round. Convert a decimal back to a fraction before you write the answer.",
    steps: [
      { do: "Type a fraction", see: "ALPHA then Y= opens the n/d template. Or type $1/6$ on the home screen." },
      { do: "MATH ►Frac", see: "After a decimal appears, MATH 1:►Frac ENTER. $0.1666\\ldots$ becomes $1/6$." },
      { do: "MATH ►Dec", see: "The twin command turns a fraction back into a decimal." },
    ],
    videos: [
      {
        yt: "67061OxJcM8",
        start: 75,
        title: "Fractions on the TI-84 Plus CE",
        channel: "Mario's Math Tutoring",
        why: "n/d template and swapping fraction $\\leftrightarrow$ decimal.",
      },
    ],
  },
  {
    id: "graph",
    topic: "graphing",
    title: "Graph a function",
    minutes: 6,
    blurb: "This is FUNC mode — $Y_1$ in terms of $X$. Do not leave SEQ on from a sequence question or Y= will look wrong.",
    steps: [
      { do: "MODE → FUNC", see: "Highlight FUNCTION, ENTER, then 2nd MODE to quit." },
      { do: "Y= and type $Y_1$", see: "X,T,θ,n inserts $X$. Example: $3X+8$. A highlighted $=$ means that graph is on." },
      { do: "Turn plots off if you see ERR:INVALID DIM", see: "In Y=, arrow up to Plot1 and ENTER until it is not highlighted." },
      { do: "ZOOM 6:ZStandard", see: "Window $[-10,10]$ both ways. Then GRAPH. ZOOM 0:ZoomFit is a backup if the graph is off-screen." },
    ],
    videos: [
      {
        yt: "qV9jN2s2vOc",
        title: "How to graph on your GDC",
        channel: "Like a Math Class",
        why: "IB-flavoured short: Y=, two graphs, toggling a graph off.",
      },
      {
        yt: "67061OxJcM8",
        start: 440,
        title: "Graphing, zoom, and the window",
        channel: "Mario's Math Tutoring",
        why: "Y=, ZOOM, inequalities, and a cubic example.",
      },
    ],
  },
  {
    id: "table",
    topic: "graphing",
    title: "Table of values",
    minutes: 4,
    blurb: "The table is the same $Y_1$ you graphed, listed as $x$ against $y$. For sequences, set MODE to SEQ first so the left column is $n$.",
    steps: [
      { do: "2nd GRAPH", see: "That is TABLE. Arrow up/down to scroll." },
      { do: "2nd WINDOW", see: "That is TBLSET. TblStart is the first $x$ (or $n$). $\\Delta$Tbl is the step." },
      { do: "Ask mode (optional)", see: "Indpnt: Ask lets you type a specific $x$ and the table fills $y$." },
    ],
    videos: [
      {
        yt: "TKe-4s6HeHU",
        title: "Find and adjust a table of values",
        channel: "YouTube tutorial",
        why: "2nd GRAPH, then TblStart and $\\Delta$Tbl so you are not scrolling to $x=1000$.",
      },
    ],
  },
  {
    id: "calc",
    topic: "algebra",
    title: "Zeros, min/max, and intersections",
    minutes: 8,
    blurb: "Do not TRACE for an exam answer. TRACE sits on pixels. 2nd TRACE (CALC) computes the point.",
    steps: [
      { do: "Graph so the feature is on screen", see: "If the intercept is off the window, CALC cannot find it. Zoom out first." },
      { do: "2nd TRACE → 2:zero", see: "Left bound ENTER, right bound ENTER, guess ENTER. That $x$ is a root of $Y_1=0$." },
      { do: "3:minimum or 4:maximum", see: "Same left / right / guess. Use this for a greatest $S_n$ style turning point on a graph of $S(n)$." },
      { do: "5:intersect", see: "First curve ENTER, second curve ENTER, move near the crossing, ENTER. Repeat with a new guess for a second crossing." },
      { do: "Solve $f(x)=g(x)$", see: "Put $f$ in $Y_1$ and $g$ in $Y_2$, then intersect. Or put $f-g$ in $Y_1$ and use zero." },
    ],
    videos: [
      {
        yt: "67061OxJcM8",
        start: 680,
        title: "Minimum, zeros, value, and intersect",
        channel: "Mario's Math Tutoring",
        why: "The CALC menu from min/max through intersection, with a table at the end.",
      },
    ],
  },
  {
    id: "solver",
    topic: "algebra",
    title: "Numeric solver",
    minutes: 6,
    blurb: "MATH → Solver finds one real root near your guess. Change the guess if the equation has two roots (common with a parameter $k$).",
    steps: [
      { do: "MATH, scroll to Solver…", see: "Or MATH then ALPHA B. On MathPrint you get E1 and E2 boxes." },
      { do: "Enter both sides", see: "Example: E1 is $7+(X-1)2.5$, E2 is $107$. X,T,θ,n types $X$." },
      { do: "GRAPH (or ALPHA ENTER) to solve", see: "Give a guess first. The CE uses GRAPH as SOLVE on this screen." },
      { do: "Check it", see: "Substitute the $X$ back. If $|r|=1$ or $n$ is not a positive integer, the solver's number is not your sequence answer." },
    ],
    videos: [
      {
        yt: "67061OxJcM8",
        title: "Getting started (then use Solver on your CE)",
        channel: "Mario's Math Tutoring",
        why: "Warm-up on keys. Solver itself: MATH → Solver, both sides, then GRAPH to solve.",
      },
    ],
    links: [
      {
        href: "https://education.ti.com/en/customer-support/knowledge-base/ti-83-84-plus-family/product-usage/34591",
        title: "TI knowledge base: Numeric Solver",
        note: "Official keystrokes for MathPrint and Classic.",
      },
    ],
  },
  {
    id: "seq",
    topic: "sequences",
    title: "seq( and sum(seq( on the home screen",
    minutes: 6,
    blurb: "This is the fastest Paper 2 move for lists and $S_n$. You can practise it on the calculator on this page.",
    steps: [
      { do: "List the terms", see: "<code>seq(u_n, n, start, end)</code> — example <code>seq(7+(n-1)*2.5, n, 1, 6)</code>. STAT or MATH pastes seq(." },
      { do: "Sum them", see: "<code>sum(seq(7+(n-1)*2.5, n, 1, 20))</code>. That is $S_{20}$ without typing the booklet formula." },
      { do: "Geometric", see: "<code>seq(5*2^(n-1), n, 1, 8)</code> then wrap with sum( for $S_8$." },
      { do: "Logs for $n$", see: "$\\log(K/u_1)/\\log(r)+1$, then take the integer the question wants and check $u_n$ and $u_{n-1}$." },
    ],
    videos: [
      {
        yt: "67061OxJcM8",
        start: 360,
        title: "MATH menu (roots, exponents) then graphing",
        channel: "Mario's Math Tutoring",
        why: "MATH menu tour. For seq( specifically, use STAT → seq( or the Try these lines above the videos.",
      },
    ],
  },
  {
    id: "seq-graph",
    topic: "sequences",
    title: "Sequence graphing (MODE SEQ)",
    minutes: 7,
    blurb: "On the handheld, SEQ mode turns Y= into $u(n)$, $v(n)$, $w(n)$. Use this to plot terms; use the table to read them.",
    steps: [
      { do: "MODE → SEQ", see: "Highlight SEQ, ENTER, Quit." },
      { do: "Y= and set nMin", see: "Usually $n\\mathrm{Min}=1$. X,T,θ,n now inserts $n$." },
      { do: "Type $u(n)$", see: "Explicit: $u(n)=7+(n-1)2.5$. Leave $u(n\\mathrm{Min})$ blank." },
      { do: "Recursive", see: "$u(n)=3u(n-1)-2$ needs $u(n\\mathrm{Min})=4$. On the CE, ALPHA TRACE types $u$." },
      { do: "WINDOW then GRAPH", see: "$n\\mathrm{Max}$ how far to compute. Xmax about the same as $n\\mathrm{Max}$. Then 2nd GRAPH for the $n$, $u(n)$ table." },
    ],
    videos: [
      {
        yt: "qV9jN2s2vOc",
        title: "Graphing on the GDC (FUNC mode first)",
        channel: "Like a Math Class",
        why: "Same Y= / GRAPH habit. Switch MODE to SEQ before you type $u(n)$.",
      },
    ],
    links: [
      {
        href: "https://education.ti.com/en/customer-support/knowledge-base/ti-83-84-plus-family/product-usage/34777",
        title: "TI: graph a non-recursive sequence",
        note: "MODE SEQ, Y=, $u(n)=2n+1$, GRAPH.",
      },
    ],
  },
  {
    id: "poly",
    topic: "algebra",
    title: "Polynomial roots and simultaneous equations",
    minutes: 5,
    blurb: "The PlySmlt2 app finds all roots of a polynomial and solves linear systems. Useful on Paper 2 when $k$ makes a quadratic.",
    steps: [
      { do: "APPS → PlySmlt2", see: "Polynomial Root Finder. Set order, then type coefficients." },
      { do: "Complex roots", see: "If you need $a+bi$, turn that mode on inside the app before you solve." },
      { do: "Simultaneous solver", see: "Same app, option 2. Number of equations, then the augmented matrix." },
    ],
    videos: [
      {
        yt: "-Tqe2u3HiaM",
        title: "Finding roots with PlySmlt2",
        channel: "Texas Instruments Education",
        why: "Quadratic and complex roots on the CE app.",
      },
    ],
  },
];

export const gdcYoutubeLinks = [
  {
    topic: "Basics",
    title: "Getting started with the TI-84 Plus CE",
    channel: "Mario's Math Tutoring",
    yt: "67061OxJcM8",
  },
  {
    topic: "Basics",
    title: "Modes, settings and organisation",
    channel: "Texas Instruments Education",
    yt: "gcESDY1g1ls",
  },
  {
    topic: "Basics",
    title: "Fractions and ►Frac",
    channel: "Mario's Math Tutoring",
    yt: "67061OxJcM8",
    start: 75,
  },
  {
    topic: "Graphing",
    title: "How to graph on your GDC (IB)",
    channel: "Like a Math Class",
    yt: "qV9jN2s2vOc",
  },
  {
    topic: "Graphing",
    title: "Y=, ZOOM, and the window",
    channel: "Mario's Math Tutoring",
    yt: "67061OxJcM8",
    start: 440,
  },
  {
    topic: "Graphing",
    title: "Table of values (2nd GRAPH)",
    channel: "YouTube",
    yt: "TKe-4s6HeHU",
  },
  {
    topic: "Algebra",
    title: "Zeros, min/max, and intersections (CALC)",
    channel: "Mario's Math Tutoring",
    yt: "67061OxJcM8",
    start: 680,
  },
  {
    topic: "Algebra",
    title: "Polynomial roots with PlySmlt2",
    channel: "Texas Instruments Education",
    yt: "-Tqe2u3HiaM",
  },
  {
    topic: "Algebra",
    title: "TI-84 Plus CE numeric solver",
    href: "https://www.youtube.com/results?search_query=TI-84+Plus+CE+numeric+solver",
    note: "YouTube search",
  },
  {
    topic: "Sequences",
    title: "Sequence graphing: MODE SEQ and u(n)",
    href: "https://www.youtube.com/results?search_query=TI-84+Plus+CE+sequence+graphing+MODE+SEQ",
    note: "YouTube search",
  },
  {
    topic: "Sequences",
    title: "seq( and sum(seq( on the home screen",
    href: "https://www.youtube.com/results?search_query=TI-84+Plus+CE+seq+sum+list",
    note: "YouTube search",
  },
];

function ytUrl(yt, start) {
  const base = "https://www.youtube.com/watch?v=" + encodeURIComponent(yt);
  return start ? `${base}&t=${start}s` : base;
}

function ytHref(v) {
  return v.href || ytUrl(v.yt, v.start);
}

function ytThumb(yt) {
  return "https://i.ytimg.com/vi/" + encodeURIComponent(yt) + "/hqdefault.jpg";
}

export function gdcYoutubeListHtml() {
  const items = gdcYoutubeLinks
    .map((v) => {
      const href = ytHref(v);
      const when = v.start ? ` · jump to ${Math.floor(v.start / 60)}:${String(v.start % 60).padStart(2, "0")}` : "";
      return `<li>
        <span class="yt-topic">${v.topic}</span>
        <a href="${href}" target="_blank" rel="noopener">${v.title}</a>
        <span class="yt-meta">${v.channel || v.note || "YouTube"}${when}</span>
      </li>`;
    })
    .join("");
  return `<div class="yt-index card">
    <h3>YouTube: how to use the TI-84 Plus CE</h3>
    <p>Open these on the real calculator. Each link goes to YouTube.</p>
    <ol class="yt-links">${items}</ol>
    <p class="gdc-hub"><a href="https://education.ti.com/en/product-resources/product-video-tutorials/ti-84plus-ce-tutorials" target="_blank" rel="noopener">Texas Instruments’ full TI-84 Plus CE tutorial set</a></p>
  </div>`;
}

export function gdcLearnHtml(math, topic) {
  const chips = gdcTopics
    .map(
      (t) =>
        `<button type="button" class="gdc-chip${topic === t.id ? " is-on" : ""}" data-gdc-topic="${t.id}">${t.name}</button>`
    )
    .join("");
  const lessons = gdcLessons
    .filter((l) => topic === "all" || l.topic === topic)
    .map((l) => {
      const steps = l.steps
        .map(
          (s, i) => `<div class="method-step">
            <div class="method-n">${i + 1}</div>
            <div><strong>${math(s.do)}</strong><div class="method-see">${math(s.see)}</div></div>
          </div>`
        )
        .join("");
      const videos = (l.videos || [])
        .map(
          (v) => `<a class="yt-card" href="${ytUrl(v.yt, v.start)}" target="_blank" rel="noopener">
            <img src="${ytThumb(v.yt)}" alt="" width="320" height="180" />
            <div>
              <strong>${v.title}</strong>
              <span class="yt-meta">${v.channel}${v.start ? " · starts at the relevant bit" : ""}</span>
              <span>${math(v.why)}</span>
              <span class="yt-go">Watch on YouTube →</span>
            </div>
          </a>`
        )
        .join("");
      const extra = (l.links || [])
        .map(
          (x) => `<p class="gdc-extra"><a href="${x.href}" target="_blank" rel="noopener">${x.title}</a> — ${x.note}</p>`
        )
        .join("");
      return `<article class="gdc-lesson card">
        <header>
          <h3>${math(l.title)}</h3>
          <p class="gdc-mins">${l.minutes} min · ${l.topic}</p>
        </header>
        <p>${math(l.blurb)}</p>
        <div class="method-board">${steps}</div>
        <h4 class="viz-title">Watch</h4>
        <div class="yt-row">${videos}</div>
        ${extra}
      </article>`;
    })
    .join("");
  return `<section class="gdc-learn">
    <h2>How to use the GDC</h2>
    <p class="lede">${math("Written keystrokes first, then a YouTube walkthrough of the same skill on a real TI-84 Plus CE. Graphing and CALC are for the handheld; <code>seq(</code>, sums, the table, and Solver you can also try on the calculator above.")}</p>
    <p class="gdc-hub">${math('Full official set: <a href="https://education.ti.com/en/product-resources/product-video-tutorials/ti-84plus-ce-tutorials" target="_blank" rel="noopener">TI-84 Plus CE tutorials (Texas Instruments)</a>.')}</p>
    <div class="gdc-chips">${chips}</div>
    <div class="gdc-lesson-list">${lessons}</div>
  </section>`;
}
