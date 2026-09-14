import { units, formulas, unitById } from "./curriculum.js";
import { getProblem } from "./problems.js";
import { renderMath, checkAnswer, formatAnswer } from "./check.js";
import { getWorked } from "./solutions.js";
import { keyById, sourceDocs } from "./keys.js";
import { haese, chapter5, readingForLesson, readingForUnit, formatRefs, pdfHref } from "./textbook.js";
import { termStrip as teachStrip, renderTeach, bindTeach } from "./teach.js";
import { calculatorHtml, bindTi84, refreshTi84, runLine } from "./ti84.js";
import {
  loadProgress,
  saveProgress,
  markLesson,
  recordProblem,
  setMeta,
  skillStats,
  unitCompletion,
} from "./progress.js";

const app = document.getElementById("app");

const state = {
  view: "home",
  unitId: null,
  lessonId: null,
  practiceIds: [],
  practiceIndex: 0,
  hintLevel: 0,
  showNeed: false,
  feedback: null,
  input: "",
  pair: { a: "", b: "" },
  choice: null,
  progress: loadProgress(),
  gaveUp: false,
  showWorked: false,
  keyId: null,
  showGdc: false,
};

function go(view, extra = {}) {
  Object.assign(state, extra, {
    view,
    feedback: null,
    hintLevel: 0,
    showNeed: false,
    input: "",
    pair: { a: "", b: "" },
    choice: null,
    gaveUp: false,
    showWorked: false,
  });
  render();
}

function currentUnit() {
  return unitById(state.unitId);
}

function math(s) {
  return renderMath(s);
}

function termStrip(terms, jumps, highlight) {
  return teachStrip(math, terms, jumps, highlight);
}

function ibLevel(level) {
  return { foundation: "Core", practice: "Paper-style", challenge: "AHL", mastery: "Exam" }[level] || level;
}

function sidebar() {
  const p = state.progress;
  const items = units
    .map((u) => {
      const c = unitCompletion(p, u);
      const active = state.unitId === u.id && (state.view === "unit" || state.view === "lesson" || state.view === "practice");
      const done = c.pct >= 80;
      return `<button class="nav-btn ${active ? "active" : ""}" data-go="unit" data-id="${u.id}">
        <span class="label"><strong>${u.index} ${u.title}</strong><small>${c.pct}% complete</small></span>
        <span class="dot ${done ? "done" : active ? "current" : ""}"></span>
      </button>`;
    })
    .join("");
  return `<aside class="sidebar">
    <div class="brand">
      <div class="brand-mark">Step<em>wise</em></div>
      <p>IB Mathematics: analysis and approaches HL<br>Topic 1.2–1.4 · Sequences and series</p>
    </div>
    <div class="nav-block">
      <h2>Path</h2>
      ${items}
    </div>
    <div class="sidebar-foot">
      <button class="ghost" data-go="gdc">TI-84 CE</button>
      <button class="ghost" data-go="formulas">Formula kit</button>
      <button class="ghost" data-go="map">Skill map</button>
      <button class="ghost" data-go="resources">Resources</button>
      <button class="ghost" data-go="home">Home</button>
    </div>
  </aside>`;
}

function mobileNav() {
  return `<div class="mobile-nav">
    <button class="secondary" data-go="home">Home</button>
    <button class="secondary" data-go="gdc">GDC</button>
    <button class="secondary" data-go="formulas">Formulas</button>
    <button class="secondary" data-go="map">Skills</button>
    <button class="secondary" data-go="resources">Resources</button>
  </div>`;
}

function homeView() {
  const p = state.progress;
  const last = p.lastUnit ? unitById(p.lastUnit) : units[0];
  const rows = units
    .map((u) => {
      const c = unitCompletion(p, u);
      const chip = c.pct === 0 ? "todo" : "";
      const label = c.pct === 0 ? "Not started" : c.pct >= 80 ? "Strong" : `${c.pct}%`;
      return `<button class="unit-row" data-go="unit" data-id="${u.id}">
        <div class="unit-index">${u.index}</div>
        <div>
          <h3>${u.title}</h3>
          <p>${math(u.blurb)}</p>
          <div class="meter"><span style="width:${c.pct}%"></span></div>
        </div>
        <span class="progress-chip ${chip}">${label}</span>
      </button>`;
    })
    .join("");
  return `<div class="main">
    <div class="crumb">IB Mathematics AA HL · Number and algebra</div>
    <h1>Sequences and series, in the language of the exam.</h1>
    <p class="lede">${math("This is the AA HL treatment of syllabus items 1.2–1.4, lined up with <b>Haese Mathematics: Core Topics HL 1</b>, Chapter 5 (Sequences and series). Lessons tell you which section of the book to read. Practice uses original questions plus the Check-In and Nikolaidis sheets. Notation matches the IB formula booklet.")}</p>
    <div class="grid-2">
      <div class="card">
        <h3>Where should I start?</h3>
        <p>Pick the honest option. You can jump around later.</p>
        <div class="choice-row">
          <button class="choice ${p.startChoice === "new" ? "selected" : ""}" data-start="new">Sequences are new. Begin at unit 01.</button>
          <button class="choice ${p.startChoice === "arith" ? "selected" : ""}" data-start="arith">${math("I already know $u_n$ and $S_n$. Skip to arithmetic.")}</button>
          <button class="choice ${p.startChoice === "geo" ? "selected" : ""}" data-start="geo">Arithmetic is fine. I need geometric series and mixed questions.</button>
          <button class="choice ${p.startChoice === "exam" ? "selected" : ""}" data-start="exam">I want Paper-style AHL questions (check-in types).</button>
        </div>
      </div>
      <div class="card">
        <h3>How practice works</h3>
        <p>Lessons show the move on a board, then you practise. Practice is sorted:</p>
        <p><span class="level-tag foundation">Core</span> SL skills that HL still examines.<br>
        <span class="level-tag practice">Paper-style</span> short questions, exact values.<br>
        <span class="level-tag challenge">AHL</span> parameters, logs, mixed sequences.<br>
        <span class="level-tag mastery">Exam</span> multi-part Paper 1 / Paper 2 items.</p>
        <div class="actions">
          <button class="primary" data-go="unit" data-id="${last.id}">Continue ${last.title}</button>
          <button class="secondary" data-go="resources">Textbook, PDFs and answer keys</button>
        </div>
      </div>
    </div>
    <h2 style="margin-top:36px">The path</h2>
    <div class="unit-list">${rows}</div>
  </div>`;
}

function unitView() {
  const u = currentUnit();
  const p = state.progress;
  const c = unitCompletion(p, u);
  const lessons = u.lessons
    .map((l, i) => {
      const done = p.lessons[l.id];
      return `<button data-go="lesson" data-id="${l.id}">
        ${done ? "Read" : `Lesson ${i + 1}`} · ${math(l.title)}
      </button>`;
    })
    .join("");
  const skills = u.skills
    .map((s) => {
      const st = skillStats(p, s.problemIds);
      return `<button class="skill" data-unit="${u.id}" data-practice="${s.id}">
        <span>${st.level}</span>
        <strong>${math(s.name)}</strong>
        ${st.correct}/${st.total} solved
      </button>`;
    })
    .join("");
  return `<div class="main">
    <div class="crumb">Unit ${u.index}</div>
    <h1>${u.title}</h1>
    <p class="lede">${math(u.blurb)}</p>
    ${unitReadingHtml(u.id)}
    <div class="meter"><span style="width:${c.pct}%"></span></div>
    <p style="color:var(--ink-soft);font-size:14px;margin-top:8px">${c.lessonsDone}/${c.lessonCount} lessons · ${c.correct}/${c.problemCount} problems</p>
    <div class="lesson-layout" style="margin-top:28px">
      <div class="lesson-nav card">
        <h3>Learn first</h3>
        ${lessons}
        <div class="actions"><button class="primary" data-go="lesson" data-id="${u.lessons[0].id}">Open first lesson</button></div>
      </div>
      <div>
        <h3>Then practise</h3>
        <p>${math("Each skill starts easy, then uses the same question types as AA HL: two given terms, $S_n$, sigma notation, infinite series, a parameter $k$, and mixed arithmetic/geometric sequences.")}</p>
        <div class="skill-grid">${skills}</div>
        <div class="actions">
          <button class="primary" data-practice="all">Practice this unit</button>
          <button class="secondary" data-go="formulas">Formula kit</button>
        </div>
      </div>
    </div>
  </div>`;
}

function textbookBox(reading, heading) {
  if (!reading) return "";
  const refs = (reading.refs || [])
    .map((id) => {
      const s = chapter5.find((x) => x.id === id);
      const page = s?.page;
      const label = formatRefs([id]);
      const href = pdfHref(page);
      return `<a class="textbook-link" href="${href}" target="_blank" rel="noopener">${label}</a>`;
    })
    .join("");
  return `<div class="textbook-box">
    <h4>${heading || "Textbook"}</h4>
    <p class="textbook-refs">${refs}</p>
    <p>${math(reading.note)}</p>
    <p class="textbook-source">${haese.short} · ${haese.chapter}</p>
  </div>`;
}

function unitReadingHtml(unitId) {
  return textbookBox(readingForUnit(unitId), "Read in Haese Core Topics HL 1");
}

function lessonReadingHtml(lessonId) {
  return textbookBox(readingForLesson(lessonId), "Read this first");
}

function renderSection(sec) {
  if (sec.type === "text") return `<div class="prose"><p>${math(sec.html)}</p></div>`;
  if (sec.type === "strip") return termStrip(sec.terms, sec.jumps, sec.hi);
  if (sec.type === "watch") return `<div class="watch">${math(sec.html)}</div>`;
  if (sec.type === "need") {
    return `<div class="need-box">
      <div><h4>The question wants</h4>${math(sec.goal)}</div>
      <div><h4>You already know</h4>${math(sec.have)}</div>
      <div style="grid-column:1/-1"><h4>Start here — and why</h4>${math(sec.first)}</div>
    </div>`;
  }
  if (sec.type === "example") {
    const visual = sec.terms ? termStrip(sec.terms, sec.jumps, sec.hi) : "";
    const steps = sec.steps
      .map((s, i) => `<div class="step"><div class="step-n">${i + 1}</div><div><strong>${math(s.t)}</strong><div>${math(s.b)}</div></div></div>`)
      .join("");
    return `<div class="example"><h4>${sec.title}</h4>${visual}${steps}</div>`;
  }
  const taught = renderTeach(sec, math);
  if (taught) return taught;
  return "";
}

function lessonView() {
  const u = currentUnit();
  const lesson = u.lessons.find((l) => l.id === state.lessonId) || u.lessons[0];
  const idx = u.lessons.findIndex((l) => l.id === lesson.id);
  const next = u.lessons[idx + 1];
  const nav = u.lessons
    .map((l) => `<button class="${l.id === lesson.id ? "active" : ""}" data-go="lesson" data-id="${l.id}">${math(l.title)}</button>`)
    .join("");
  const body = lesson.sections.map(renderSection).join("");
  return `<div class="main">
    <div class="crumb">Unit ${u.index} · ${lesson.minutes} min</div>
    <div class="lesson-layout">
      <div class="lesson-nav">${nav}<button data-go="unit" data-id="${u.id}">Back to unit</button></div>
      <div class="prose">
        <h1>${math(lesson.title)}</h1>
        ${lessonReadingHtml(lesson.id)}
        ${body}
        <div class="actions">
          <button class="primary" data-complete-lesson="${lesson.id}" data-next="${next ? next.id : ""}">${next ? "Next lesson" : "Practise this unit"}</button>
          <button class="secondary" data-go="unit" data-id="${u.id}">Unit overview</button>
        </div>
      </div>
    </div>
  </div>`;
}

function workedBox(problem, heading) {
  const steps = getWorked(problem)
    .map(
      (s, i) =>
        `<div class="step"><div class="step-n">${i + 1}</div><div><strong>${math(s.t)}</strong><div>${math(s.b)}</div></div></div>`
    )
    .join("");
  return `<div class="example worked">
    <h4>${heading}</h4>
    <p class="worked-lead">Read this as if someone is sitting next to you. Each step exists for a reason — the heading tells you what that reason is.</p>
    ${steps}
  </div>`;
}

function inputHtml(problem) {
  const kind = problem.input?.kind || "text";
  if (kind === "choice") {
    return `<div class="mcq">${problem.input.options
      .map(
        (o) => `<label><input type="radio" name="mcq" value="${o.id}" ${state.choice === o.id ? "checked" : ""}/> <span>${math(o.label)}</span></label>`
      )
      .join("")}</div>`;
  }
  if (kind === "pair") {
    return `<div class="pair-fields">
      <label>${problem.input.labels?.[0] || "First"}<input type="text" data-pair="a" value="${state.pair.a}" /></label>
      <label>${problem.input.labels?.[1] || "Second"}<input type="text" data-pair="b" value="${state.pair.b}" /></label>
    </div>`;
  }
  return `<div class="answer-row">
    <input type="text" id="answer" placeholder="${problem.input?.placeholder || "your answer"}" value="${state.input}" autocomplete="off" />
    <button class="primary" data-check="1">Check</button>
  </div>
  <p style="color:var(--muted);font-size:13px;margin:0">${math("Paper 1 habit: leave exact values ($\\tfrac{4}{5}$, not $0.8$) unless the question says to round. Separate two answers with a comma.")}</p>`;
}

function practiceView() {
  const u = currentUnit();
  const id = state.practiceIds[state.practiceIndex];
  const problem = getProblem(id);
  if (!problem) {
    return `<div class="main"><p>No problems found.</p><button class="secondary" data-go="unit" data-id="${u.id}">Back</button></div>`;
  }
  const pips = state.practiceIds
    .map((pid, i) => {
      const row = state.progress.problems[pid];
      let cls = i === state.practiceIndex ? "now" : "";
      if (row?.correct) cls += " ok";
      else if (row?.attempts && !row.correct) cls += " bad";
      return `<span class="pip ${cls}"></span>`;
    })
    .join("");
  const hints = problem.hints
    .slice(0, state.hintLevel)
    .map((h) => `<div class="hint-card"><div class="kicker">${math(h.k)}</div><div>${math(h.b)}</div></div>`)
    .join("");
  let fb = "";
  if (state.feedback === "ok") {
    fb = `<div class="feedback ok">That's right. Compare your method with the write-up below — it is there so you can check the reasoning, not only the final number.</div>`;
  } else if (state.feedback === "bad") {
    fb = `<div class="feedback bad">Not quite — that's all right. Look at what the question is asking, then which value you still need before you can finish. The plan below is there for that. If you want to stop, you can open the full solution.</div>`;
  } else if (state.gaveUp) {
    fb = `<div class="feedback">Here is the full solution. Read it slowly, then go on to the next problem when you are ready.</div>`;
  }
  const need = state.showNeed
    ? `<div class="need-box">
        <div><h4>The question wants</h4>${math(problem.need.goal)}</div>
        <div><h4>You already know</h4>${math(problem.need.have)}</div>
        <div style="grid-column:1/-1"><h4>Start here — and why</h4>${math(problem.need.first)}</div>
      </div>`
    : "";
  const showWorked = state.showWorked || state.feedback === "ok" || state.gaveUp;
  const worked = showWorked
    ? workedBox(problem, state.feedback === "ok" ? "Formal solution" : "Formal solution — after giving up")
    : "";
  const showNext = state.feedback === "ok" || state.gaveUp;
  const last = state.practiceIndex === state.practiceIds.length - 1;
  return `<div class="main">
    <div class="practice-head">
      <div>
        <div class="crumb">Unit ${u.index} · ${state.practiceIndex + 1} of ${state.practiceIds.length}</div>
        <span class="level-tag ${problem.level}">${ibLevel(problem.level)}</span>
      </div>
      <div class="pips">${pips}</div>
    </div>
    <div class="actions" style="margin:0 0 12px">
      <button class="secondary" data-gdc-open="1">${state.showGdc ? "Hide TI-84 CE" : "Open TI-84 CE"}</button>
    </div>
    <div class="prompt">${math(problem.prompt)}</div>
    ${need}
    ${inputHtml(problem)}
    ${problem.input?.kind === "choice" || problem.input?.kind === "pair" ? `<div class="actions"><button class="primary" data-check="1">Check</button></div>` : ""}
    ${fb}
    ${worked}
    <div class="hint-panel">
      <div class="actions">
        <button class="secondary" data-need="1">${state.showNeed ? "Hide the plan" : "I'm stuck — what are we even looking for?"}</button>
        <button class="secondary" data-hint="1">${state.hintLevel >= problem.hints.length ? "That's all the hints" : state.hintLevel === 0 ? "Talk me through it" : "Why the next step?"}</button>
        ${showWorked ? "" : `<button class="secondary" data-giveup="1">Give up — show the solution</button>`}
      </div>
      ${hints}
    </div>
    <div class="actions">
      ${showNext ? `<button class="primary" data-advance="1">${last ? "Finish set" : "Next problem"}</button>` : ""}
      <button class="secondary" data-go="unit" data-id="${u.id}">Back to unit</button>
    </div>
  </div>`;
}

function gdcView() {
  const demos = [
    { title: "Arithmetic $u_n$", note: "$u_1=7$, $d=2.5$, $n=41$", src: "7+(41-1)*2.5" },
    { title: "List terms with seq(", note: "First six arithmetic terms", src: "seq(7+(n-1)*2.5,n,1,6)" },
    { title: "Arithmetic $S_n$", note: "Sum of the first 20 terms", src: "sum(seq(7+(n-1)*2.5,n,1,20))" },
    { title: "Geometric $u_n$", note: "$u_1=5$, $r=2$, $n=5$", src: "5*2^(5-1)" },
    { title: "Geometric $S_n$", note: "Sum of the first 8 terms", src: "sum(seq(5*2^(n-1),n,1,8))" },
    { title: "Find $n$ with logs", note: "Paper 2: $5\\times 2^{n-1}>1000$", src: "log(1000/5)/log(2)+1" },
    { title: "Infinite sum", note: "$|r|<1$ first, then $u_1/(1-r)$", src: "32/(1-1/2)" },
    { title: "Exact fraction", note: "Then MATH ►Frac", src: "1/6" },
  ]
    .map(
      (d) => `<button type="button" class="gdc-demo" data-ti-demo="${d.src}">
        <strong>${math(d.title)}</strong>
        <span>${math(d.note)}</span>
        <code>${d.src}</code>
      </button>`
    )
    .join("");
  return `<div class="main">
    <div class="crumb">Always available · Paper 2 GDC</div>
    <h1>TI-84 Plus CE</h1>
    <p class="lede">${math("This is a working home-screen GDC for sequence work. Paper 1 is still exact values and no calculator. Use this the way you would on Paper 2: <code>seq(</code>, <code>sum(seq(</code>, the table, logs, and the solver.")}</p>
    <div class="gdc-page">
      ${calculatorHtml()}
      <div class="gdc-help">
        <h3>Sequence keys</h3>
        <p>${math("<b>X,T,θ,n</b> inserts $n$ (this tool stays in sequence mode). <b>2nd STAT</b> types <code>seq(</code>. <b>MATH</b> has <code>seq(</code>, <code>sum(</code>, ►Frac, and Solver.")}</p>
        <p>${math("<b>y=</b> stores $u(n)$. <b>2nd GRAPH</b> is the table. <b>GRAPH</b> plots the first twelve terms.")}</p>
        <h3>Try these</h3>
        <p>Tap a line to run it on the calculator.</p>
        ${demos}
        <p>${math("After $1/6$, press MATH and choose ►Frac to see $1/6$ instead of a decimal.")}</p>
      </div>
    </div>
  </div>`;
}

function gdcOverlay() {
  if (!state.showGdc || state.view === "gdc") return "";
  return `<div class="gdc-layer">
    <div class="gdc-panel">
      <div class="gdc-panel-head">
        <strong>TI-84 Plus CE</strong>
        <button type="button" class="secondary" data-gdc-close="1">Close</button>
      </div>
      ${calculatorHtml()}
    </div>
  </div>`;
}

function formulasView() {
  const cards = formulas
    .map(
      (f) => `<div class="card formula-card">
        <h3>${math(f.title)}</h3>
        <div class="formula-block">${math("$$" + f.tex + "$$")}
          <div class="meaning"><b>Must-have values</b></div>
          <ul class="need-list">${f.need.map((n) => `<li>${math(n)}</li>`).join("")}</ul>
          <p style="margin:10px 0 0;color:var(--ink-soft)"><b>Find first:</b> ${math(f.first)}</p>
        </div>
      </div>`
    )
    .join("");
  return `<div class="main">
    <div class="crumb">Always available</div>
    <h1>Formula kit</h1>
    <p class="lede">${math("These are the sequence formulae from the IB formula booklet — the same ones Haese derives in Chapter 5B, 5C, 5G, 5H and 5I. In the exam they are given — you still need to know which values each one requires, and which to find first.")}</p>
    <div class="card" style="margin-bottom:14px">
      <h3>Command terms</h3>
      <p>${math("<b>Write down</b> — immediate; little working. <b>Find / calculate</b> — obtain the answer and show working. <b>Show that</b> — the result is given; marks are the steps. <b>Hence</b> — use the previous part. <b>Explain</b> — a short reason, often why $S_{\\infty}$ does or does not exist.")}</p>
      <p>${math("Paper 1: no calculator, exact values. Paper 2: GDC allowed — open the TI-84 CE tool in the sidebar. Still exact unless asked to round.")}</p>
      <div class="actions"><button class="secondary" data-go="gdc">Open TI-84 CE</button></div>
    </div>
    <div class="formulas">${cards}</div>
  </div>`;
}

function mapView() {
  const blocks = units
    .map((u) => {
      const skills = u.skills
        .map((s) => {
          const st = skillStats(state.progress, s.problemIds);
          return `<button class="skill" data-unit="${u.id}" data-practice="${s.id}">
            <span>${st.level}</span>
            <strong>${math(s.name)}</strong>
          </button>`;
        })
        .join("");
      return `<section><h2>${u.index} ${u.title}</h2><div class="skill-grid">${skills}</div></section>`;
    })
    .join("");
  return `<div class="main">
    <div class="crumb">Progress</div>
    <h1>Skill map</h1>
    <p class="lede">${math("Core skills sit at the top of each unit. AHL and exam items reuse the same booklet formulae on messier givens — two terms, a sum, a parameter $k$, or two sequences at once.")}</p>
    <div class="map">${blocks}</div>
  </div>`;
}

function resourcesView() {
  const rows = chapter5
    .map((s) => {
      const href = pdfHref(s.page);
      return `<tr>
        <td><a href="${href}" target="_blank" rel="noopener">${s.id === "5" ? "Ch 5" : s.id}</a></td>
        <td>${s.name}</td>
        <td>${s.page}</td>
      </tr>`;
    })
    .join("");
  const cards = sourceDocs
    .map(
      (d) => `<div class="card resource-card">
        <h3>${math(d.title)}</h3>
        <p class="resource-meta">${d.marks}</p>
        <p>${math(d.blurb)}</p>
        <div class="actions">
          <a class="primary" href="${d.file}" target="_blank" rel="noopener">Open the PDF</a>
          <button class="secondary" data-go="key" data-id="${d.keyId}">Answer key</button>
        </div>
      </div>`
    )
    .join("");
  return `<div class="main">
    <div class="crumb">Textbook and papers</div>
    <h1>Resources</h1>
    <p class="lede">${math("Lessons follow <b>Haese Mathematics: Core Topics HL 1</b> (2019), Chapter 5. The Check-In and Nikolaidis sheets are extra practice, with answer keys in this app.")}</p>
    <div class="card resource-card">
      <h3>${haese.title}</h3>
      <p class="resource-meta">Textbook · ${haese.authors}</p>
      <p>${math("The book this course is taught from. Sequences and series are <b>Chapter 5</b>, printed pages 89–129. Each lesson names the section to read. Chapter 5 answers are at the back of the book (from p. 483).")}</p>
      <div class="actions">
        <a class="primary" href="${haese.file}" target="_blank" rel="noopener">Open Chapter 5’s book</a>
      </div>
      <table class="textbook-map">
        <thead><tr><th>Section</th><th>Title</th><th>Page</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <p class="key-about">${math("5D growth/decay and 5E financial mathematics are syllabus 1.4 (compound interest, depreciation). This course practises growth in the geometric units; read 5D–5E when you want the finance versions. Haese often writes the starting value as $u_0$ in money problems so that $u_4$ is “after 4 years”.")}</p>
    </div>
    <h2 style="margin-top:36px">Practice papers and keys</h2>
    <div class="resource-grid">${cards}</div>
  </div>`;
}

function keyView() {
  const doc = keyById(state.keyId) || keyById("checkin");
  const items = (doc.items || [])
    .map((q) => {
      const parts = (q.parts || [])
        .map((p) => {
          const steps = (p.steps || []).map((s) => `<li>${math(s)}</li>`).join("");
          const about = p.about ? `<p class="key-about">${math(p.about)}</p>` : "";
          return `<div class="key-part">
            ${p.label ? `<h4>${p.label}</h4>` : ""}
            ${about}
            <ol class="key-steps">${steps}</ol>
            <p class="key-answer"><strong>Answer.</strong> ${math(p.answer)}</p>
          </div>`;
        })
        .join("");
      return `<article class="card key-q">
        <h3>Question ${q.n}${q.marks ? ` <span class="resource-meta">[${q.marks} marks]</span>` : ""}</h3>
        <p class="key-about">${math(q.about || "")}</p>
        ${parts}
      </article>`;
    })
    .join("");
  return `<div class="main">
    <div class="crumb">Resources · answer key</div>
    <h1>${math(doc.title)}</h1>
    <p class="lede">${math(doc.intro)}</p>
    <div class="actions" style="margin-bottom:22px">
      <a class="secondary" href="${doc.file}" target="_blank" rel="noopener">Open the original PDF</a>
      <button class="secondary" data-go="resources">All resources</button>
    </div>
    <div class="key-list">${items}</div>
  </div>`;
}

function render() {
  const body =
    state.view === "home"
      ? homeView()
      : state.view === "unit"
        ? unitView()
        : state.view === "lesson"
          ? lessonView()
          : state.view === "practice"
            ? practiceView()
            : state.view === "formulas"
              ? formulasView()
              : state.view === "gdc"
                ? gdcView()
                : state.view === "resources"
                  ? resourcesView()
                  : state.view === "key"
                    ? keyView()
                    : mapView();
  app.innerHTML = `<div class="shell">${sidebar()}${mobileNav()}${body}</div>${gdcOverlay()}`;
  bind();
}

function startPractice(unit, skillId) {
  const ids =
    skillId === "all"
      ? unit.skills.flatMap((s) => s.problemIds)
      : unit.skills.find((s) => s.id === skillId)?.problemIds || unit.skills.flatMap((s) => s.problemIds);
  setMeta({ lastUnit: unit.id });
  go("practice", { unitId: unit.id, practiceIds: ids, practiceIndex: 0, showSolution: false });
}

function userValue(problem) {
  const kind = problem.input?.kind || "text";
  if (kind === "choice") return state.choice;
  if (kind === "pair") return { a: state.pair.a, b: state.pair.b };
  return state.input;
}

function bind() {
  app.querySelectorAll("[data-go]").forEach((el) => {
    el.addEventListener("click", () => {
      const view = el.getAttribute("data-go");
      const id = el.getAttribute("data-id");
      if (view === "unit") {
        setMeta({ lastUnit: id });
        go("unit", { unitId: id });
      } else if (view === "lesson") {
        go("lesson", { unitId: state.unitId || currentUnit()?.id, lessonId: id });
      } else if (view === "home") go("home");
      else if (view === "formulas") go("formulas");
      else if (view === "gdc") {
        state.showGdc = false;
        go("gdc");
      }
      else if (view === "map") go("map");
      else if (view === "resources") go("resources");
      else if (view === "key") go("key", { keyId: id });
    });
  });
  app.querySelectorAll("[data-start]").forEach((el) => {
    el.addEventListener("click", () => {
      const choice = el.getAttribute("data-start");
      const map = { new: "start", arith: "arith", geo: "geo", exam: "mastery" };
      setMeta({ startChoice: choice, lastUnit: map[choice] });
      state.progress = loadProgress();
      go("unit", { unitId: map[choice] });
    });
  });
  app.querySelectorAll("[data-practice]").forEach((el) => {
    el.addEventListener("click", (ev) => {
      ev.stopPropagation();
      const unit = unitById(el.getAttribute("data-unit")) || currentUnit() || unitById(el.getAttribute("data-id")) || unitById(state.unitId);
      const skill = el.getAttribute("data-practice");
      if (skill && unit) startPractice(unit, skill);
    });
  });
  app.querySelectorAll("[data-complete-lesson]").forEach((el) => {
    el.addEventListener("click", () => {
      const id = el.getAttribute("data-complete-lesson");
      markLesson(id);
      state.progress = loadProgress();
      const next = el.getAttribute("data-next");
      if (next) go("lesson", { lessonId: next, unitId: state.unitId });
      else startPractice(currentUnit(), "all");
    });
  });
  const input = app.querySelector("#answer");
  if (input) {
    input.addEventListener("input", () => {
      state.input = input.value;
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") checkCurrent();
    });
    if (state.view === "practice" && state.feedback !== "ok" && !state.showGdc) input.focus();
  }
  app.querySelectorAll("[data-pair]").forEach((el) => {
    el.addEventListener("input", () => {
      state.pair[el.getAttribute("data-pair")] = el.value;
    });
  });
  app.querySelectorAll("input[name=mcq]").forEach((el) => {
    el.addEventListener("change", () => {
      state.choice = el.value;
    });
  });
  app.querySelectorAll("[data-check]").forEach((el) => el.addEventListener("click", checkCurrent));
  app.querySelectorAll("[data-hint]").forEach((el) => {
    el.addEventListener("click", () => {
      const problem = getProblem(state.practiceIds[state.practiceIndex]);
      state.hintLevel = Math.min((problem?.hints.length || 0), state.hintLevel + 1);
      render();
    });
  });
  app.querySelectorAll("[data-need]").forEach((el) => {
    el.addEventListener("click", () => {
      state.showNeed = !state.showNeed;
      render();
    });
  });
  app.querySelectorAll("[data-advance]").forEach((el) => {
    el.addEventListener("click", () => {
      if (state.practiceIndex + 1 >= state.practiceIds.length) {
        go("unit", { unitId: state.unitId });
      } else {
        state.practiceIndex += 1;
        state.hintLevel = 0;
        state.showNeed = false;
        state.feedback = null;
        state.input = "";
        state.pair = { a: "", b: "" };
        state.choice = null;
        state.showSolution = false;
        state.gaveUp = false;
        state.showWorked = false;
        render();
      }
    });
  });
  app.querySelectorAll("[data-giveup]").forEach((el) => {
    el.addEventListener("click", () => {
      state.gaveUp = true;
      state.showWorked = true;
      state.showNeed = true;
      render();
    });
  });
  bindTeach(app);
  bindTi84(app);
  app.querySelectorAll("[data-gdc-open]").forEach((el) => {
    el.addEventListener("click", () => {
      state.showGdc = !state.showGdc;
      render();
      app.querySelector("[data-ti84]")?.focus();
    });
  });
  app.querySelectorAll("[data-gdc-close]").forEach((el) => {
    el.addEventListener("click", () => {
      state.showGdc = false;
      render();
    });
  });
  app.querySelectorAll("[data-ti-demo]").forEach((el) => {
    el.addEventListener("click", () => {
      runLine(el.getAttribute("data-ti-demo"));
      refreshTi84(app);
      app.querySelector("[data-ti84]")?.focus();
    });
  });
}

function checkCurrent() {
  const problem = getProblem(state.practiceIds[state.practiceIndex]);
  if (!problem) return;
  const ok = checkAnswer(problem.answer, userValue(problem));
  recordProblem(problem.id, { correct: ok, hints: state.hintLevel });
  state.progress = loadProgress();
  state.feedback = ok ? "ok" : "bad";
  if (ok) {
    state.showSolution = true;
    state.showWorked = true;
  } else state.showNeed = true;
  render();
}

render();
