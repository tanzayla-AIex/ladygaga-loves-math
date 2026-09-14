function termCell(math, value, index, extra = "") {
  return `<div class="term ${extra}"><span class="idx">${math("$u_{" + index + "}$")}</span><span class="val">${math("$" + value + "$")}</span></div>`;
}

function jumpHtml(math, tex) {
  if (!tex) return "";
  return `<span class="jump">${math("$" + tex + "$")}</span>`;
}

export function termStrip(math, terms, jumps, highlight) {
  const bits = terms
    .map((t, i) => {
      const jumpTex = jumps && jumps[i] ? jumps[i] : i < terms.length - 1 ? "\\rightarrow" : "";
      const hi = highlight != null && (highlight === i || highlight === i + 1) ? "hi" : "";
      return `${termCell(math, t, i + 1, hi)}${jumpHtml(math, jumpTex)}`;
    })
    .join("");
  return `<div class="viz"><div class="strip">${bits}</div></div>`;
}

function lettersHtml(sec, math) {
  const cards = sec.items
    .map(
      (it) => `<div class="letter-card ${it.later ? "is-later" : ""}">
        <div class="letter-tex">${math("$" + it.tex + "$")}</div>
        <div class="letter-name">${math(it.name)}</div>
        <div class="letter-when">${it.when || ""}</div>
      </div>`
    )
    .join("");
  return `<div class="viz"><div class="letter-row">${cards}</div></div>`;
}

function cardsHtml(sec, math) {
  const cards = sec.items
    .map(
      (it) => `<div class="teach-card">
        <h4>${math(it.title)}</h4>
        <p>${math(it.body)}</p>
      </div>`
    )
    .join("");
  return `<div class="viz"><div class="teach-cards">${cards}</div></div>`;
}

function seatsHtml(sec, math) {
  const seats = sec.terms
    .map((v, i) => {
      const n = i + 1;
      return `<button type="button" class="seat" data-seat="${n}" data-value="${v}">
        <span class="seat-label">seat ${n}</span>
        <span class="seat-card">${math("$" + v + "$")}</span>
      </button>`;
    })
    .join("");
  const notes = sec.terms
    .map((v, i) => {
      const n = i + 1;
      return `<p class="seat-note" data-seat-note="${n}">${math(
        "Seat $" + n + "$ holds $" + v + "$. The seat number is $n=" + n + "$. The card is $u_{" + n + "}=" + v + "$."
      )}</p>`;
    })
    .join("");
  return `<div class="viz seats" data-seats>
    <div class="seat-row">${seats}</div>
    <p class="say">Tap a seat. The chair is the position $n$. The card is the value $u_n$.</p>
    <div class="seat-notes">${notes}</div>
  </div>`;
}

function walkHtml(sec, math) {
  const cells = sec.terms
    .map((t, i) => {
      const jumpTex = sec.jumps && sec.jumps[i] ? sec.jumps[i] : i < sec.terms.length - 1 ? "\\rightarrow" : "";
      return `<div class="walk-cell${i === 0 ? " is-on" : ""}" data-walk-i="${i}">
        ${termCell(math, t, i + 1)}
        ${jumpHtml(math, jumpTex)}
      </div>`;
    })
    .join("");
  const notes = (sec.notes || [])
    .map((n, i) => `<p class="walk-note${i === 0 ? " is-on" : ""}" data-walk-note="${i}">${math(n)}</p>`)
    .join("");
  return `<div class="viz walk" data-walk>
    ${sec.title ? `<h4 class="viz-title">${math(sec.title)}</h4>` : ""}
    <div class="strip walk-strip">${cells}</div>
    <div class="walk-notes">${notes}</div>
    <div class="walk-bar">
      <button type="button" class="secondary" data-walk-next>Show the next term</button>
      <button type="button" class="secondary" data-walk-reset>Start over</button>
    </div>
  </div>`;
}

function compareHtml(sec, math) {
  const col = (side) => {
    const strip = side.terms ? termStrip(math, side.terms, side.jumps) : "";
    return `<div class="compare-col">
      <h4>${math(side.title)}</h4>
      ${side.body ? `<p>${math(side.body)}</p>` : ""}
      ${strip}
    </div>`;
  };
  return `<div class="viz compare">${col(sec.left)}${col(sec.right)}</div>`;
}

function barsHtml(sec, math) {
  const values = sec.values || [];
  const max = Math.max(...values.map((v) => Math.abs(v)), 1);
  const cols = values
    .map((v, i) => {
      const h = Math.max(8, Math.round((Math.abs(v) / max) * 120));
      const label = sec.labels ? sec.labels[i] : String(v);
      const name = sec.names ? sec.names[i] : "";
      const neg = v < 0 ? " is-neg" : "";
      return `<div class="bar-col">
        <div class="bar-track">
          <div class="bar${neg}" style="height:${h}px"></div>
        </div>
        <div class="bar-val">${math("$" + label + "$")}</div>
        <div class="bar-name">${math(name)}</div>
      </div>`;
    })
    .join("");
  return `<div class="viz">
    ${sec.title ? `<h4 class="viz-title">${math(sec.title)}</h4>` : ""}
    <div class="bar-row">${cols}</div>
    ${sec.caption ? `<p class="say">${math(sec.caption)}</p>` : ""}
  </div>`;
}

function hopsHtml(sec, math) {
  const count = sec.count;
  const nodes = [];
  for (let i = 0; i < count; i += 1) {
    const val = sec.start + i * sec.d;
    const shown = sec.show && sec.show[i] != null ? sec.show[i] : val;
    const idx = sec.labels && sec.labels[i] != null ? sec.labels[i] : i + 1;
    nodes.push(`<div class="hop-node${sec.hi === i + 1 ? " hi" : ""}">
      <span>${math("$u_{" + idx + "}$")}</span>
      <b>${math("$" + shown + "$")}</b>
    </div>`);
    if (i < count - 1) {
      const lab = sec.jump != null ? sec.jump : (sec.d >= 0 ? "+" + sec.d : String(sec.d));
      nodes.push(`<div class="hop-arrow"><span>${math("$" + lab + "$")}</span></div>`);
    }
  }
  if (sec.later) {
    nodes.push(`<div class="hop-dots">···</div>`);
    nodes.push(`<div class="hop-node hi">
      <span>${math("$u_{" + sec.later.n + "}$")}</span>
      <b>${math("$" + sec.later.v + "$")}</b>
    </div>`);
  }
  return `<div class="viz">
    ${sec.title ? `<h4 class="viz-title">${math(sec.title)}</h4>` : ""}
    <div class="hop-line">${nodes.join("")}</div>
    ${sec.caption ? `<p class="say">${math(sec.caption)}</p>` : ""}
  </div>`;
}

function pairsHtml(sec, math) {
  const t = sec.terms;
  const last = t[t.length - 1];
  const first = t[0];
  const pair = first + last;
  const fwd = t.map((v) => `<span class="pair-cell">${math("$" + v + "$")}</span>`).join("");
  const bak = [...t].reverse().map((v) => `<span class="pair-cell">${math("$" + v + "$")}</span>`).join("");
  const tot = t.map(() => `<span class="pair-cell is-sum">${math("$" + pair + "$")}</span>`).join("");
  return `<div class="viz pair-board" data-demo>
    <h4 class="viz-title">${math(sec.title || "Write it forwards, then backwards")}</h4>
    <div class="demo-stage is-on">
      <div class="pair-lab">forwards</div>
      <div class="pair-row">${fwd}</div>
    </div>
    <div class="demo-stage">
      <div class="pair-lab">backwards</div>
      <div class="pair-row">${bak}</div>
    </div>
    <div class="demo-stage">
      <div class="pair-lab">add</div>
      <div class="pair-row">${tot}</div>
      <p class="say">${math(
        sec.caption ||
          "$" +
            t.length +
            "$ pairs, each $" +
            pair +
            "$, so $2S_{" +
            t.length +
            "}=" +
            t.length +
            "\\times " +
            pair +
            "$."
      )}</p>
    </div>
    <div class="walk-bar">
      <button type="button" class="secondary" data-demo-next>Next move</button>
    </div>
  </div>`;
}

function sigmaHtml(sec, math) {
  const chips = sec.terms
    .map(
      (t, i) => `<div class="sigma-term${i === 0 ? " is-on" : ""}" data-sigma-i="${i}">
        ${i ? `<span class="sigma-plus">+</span>` : ""}
        <span class="sigma-idx">${math("$" + sec.index + "=" + (sec.from + i) + "$")}</span>
        <span class="sigma-val">${math("$" + t + "$")}</span>
      </div>`
    )
    .join("");
  return `<div class="viz sigma-board" data-sigma>
    <div class="sigma-head">${math("$\\displaystyle " + sec.tex + "$")}</div>
    <div class="sigma-expand">${chips}</div>
    <p class="sigma-total">${math(sec.total)}</p>
    <div class="walk-bar">
      <button type="button" class="secondary" data-sigma-next>Write the next term</button>
    </div>
  </div>`;
}

function methodHtml(sec, math) {
  const steps = sec.steps
    .map(
      (s, i) => `<div class="method-step">
        <div class="method-n">${i + 1}</div>
        <div>
          <strong>${math(s.do)}</strong>
          <div class="method-see">${math(s.see)}</div>
        </div>
      </div>`
    )
    .join("");
  return `<div class="viz method-board">
    <h4 class="viz-title">${math(sec.title || "The method")}</h4>
    ${steps}
  </div>`;
}

function assembleHtml(sec, math) {
  const parts = sec.parts
    .map((p) => {
      if (p.op) return `<div class="asm-op">${math("$" + p.op + "$")}</div>`;
      return `<div class="asm-part">
        <div class="asm-tex">${math("$" + p.tex + "$")}</div>
        <div class="asm-mean">${math(p.mean)}</div>
      </div>`;
    })
    .join("");
  return `<div class="viz">
    ${sec.title ? `<h4 class="viz-title">${math(sec.title)}</h4>` : ""}
    <div class="assemble">${parts}</div>
    ${sec.caption ? `<p class="say">${math(sec.caption)}</p>` : ""}
  </div>`;
}

function balanceHtml(sec, math) {
  if (sec.kind === "geo") {
    return `<div class="viz balance">
      <div class="bal-side">
        <div class="bal-eq">${math("$b^{2}$")}</div>
        <div class="bal-num">${math("$" + sec.b + "^{2}=" + sec.b * sec.b + "$")}</div>
      </div>
      <div class="bal-vs">${math("$=$")}</div>
      <div class="bal-side">
        <div class="bal-eq">${math("$ac$")}</div>
        <div class="bal-num">${math("$" + sec.a + "\\times " + sec.c + "=" + sec.a * sec.c + "$")}</div>
      </div>
      <p class="say">${math(sec.ok ? "Same product — geometric." : "Different products — not geometric.")}</p>
    </div>`;
  }
  return `<div class="viz balance">
    <div class="bal-side">
      <div class="bal-eq">${math("$2b$")}</div>
      <div class="bal-num">${math("$2\\times " + sec.b + "=" + 2 * sec.b + "$")}</div>
    </div>
    <div class="bal-vs">${math("$=$")}</div>
    <div class="bal-side">
      <div class="bal-eq">${math("$a+c$")}</div>
      <div class="bal-num">${math("$" + sec.a + "+" + sec.c + "=" + (sec.a + sec.c) + "$")}</div>
    </div>
    <p class="say">${math(sec.ok ? "Same total — arithmetic." : "Different totals — not arithmetic.")}</p>
  </div>`;
}

function scaleHtml(sec, math) {
  const max = Math.max(...sec.terms);
  const boxes = sec.terms
    .map((v, i) => {
      const size = Math.max(36, Math.round((v / max) * 88));
      const jump =
        i < sec.terms.length - 1
          ? `<span class="jump">${math("$\\times " + sec.r + "$")}</span>`
          : "";
      return `<div class="scale-item">
        <div class="scale-box" style="width:${size}px;height:${size}px">${math("$" + v + "$")}</div>
        <div class="bar-name">${math("$u_{" + (i + 1) + "}$")}</div>
      </div>${jump}`;
    })
    .join("");
  return `<div class="viz"><div class="scale-row">${boxes}</div></div>`;
}

function windowHtml(sec, math) {
  const r = sec.r;
  const left = -2;
  const right = 2;
  const pct = Math.min(96, Math.max(4, ((r - left) / (right - left)) * 100));
  const ok = Math.abs(r) < 1;
  return `<div class="viz">
    <div class="r-line">
      <div class="r-band"></div>
      <div class="r-tick is-edge" style="left:25%"><span>${math("$-1$")}</span></div>
      <div class="r-tick" style="left:50%"><span>${math("$0$")}</span></div>
      <div class="r-tick is-edge" style="left:75%"><span>${math("$1$")}</span></div>
      <div class="r-dot ${ok ? "is-ok" : "is-bad"}" style="left:${pct}%"></div>
    </div>
    <p class="say">${math(
      ok
        ? "$r=" + r + "$ sits inside $(-1,1)$, so $S_{\\infty}$ exists."
        : "$|r|\\ge 1$, so the extra terms do not fade — $S_{\\infty}$ does not exist."
    )}</p>
  </div>`;
}

function dotsHtml(sec, math) {
  const rows = [];
  for (let r = 1; r <= sec.n; r += 1) {
    const cells = Array.from({ length: r }, () => `<span class="dot"></span>`).join("");
    rows.push(`<div class="dot-row">${cells}</div>`);
  }
  const total = (sec.n * (sec.n + 1)) / 2;
  return `<div class="viz dots-board">
    <div class="dot-pile">${rows.join("")}</div>
    <p class="say">${math(
      "$" +
        sec.n +
        "$ rows: $1+2+\\cdots+" +
        sec.n +
        "=" +
        total +
        "=\\dfrac{" +
        sec.n +
        "(" +
        (sec.n + 1) +
        ")}{2}$."
    )}</p>
  </div>`;
}

function groupsHtml(sec, math) {
  const blocks = sec.sizes
    .map((size, i) => {
        const chips = Array.from({ length: size }, () => `<span class="chip"></span>`).join("");
      return `<div class="group-block">
        <div class="group-chips">${chips}</div>
        <div class="bar-name">${math("group $" + (i + 1) + "$ · $" + size + "$ numbers")}</div>
      </div>`;
    })
    .join("");
  return `<div class="viz">
    <div class="group-row">${blocks}</div>
    ${sec.caption ? `<p class="say">${math(sec.caption)}</p>` : ""}
  </div>`;
}

function machineHtml(sec, math) {
  return `<div class="viz machine">
    <div class="mach-box">
      <span class="mach-lab">in</span>
      ${math("$u_n=" + sec.input + "$")}
    </div>
    <div class="mach-arrow">${math(sec.rule)}</div>
    <div class="mach-box is-out">
      <span class="mach-lab">out</span>
      ${math("$u_{n+1}=" + sec.output + "$")}
    </div>
  </div>`;
}

function shiftHtml(sec, math) {
  const terms = [];
  let v = sec.u1;
  for (let i = 0; i < sec.n; i += 1) {
    terms.push(v);
    v *= sec.r;
  }
  const next = terms[terms.length - 1] * sec.r;
  const sRow = terms.map((t) => `<span class="pair-cell">${math("$" + t + "$")}</span>`).join("");
  const rRow =
    `<span class="pair-cell is-ghost"></span>` +
    terms.map((t, i) => `<span class="pair-cell">${math("$" + (i < terms.length - 1 ? terms[i + 1] : next) + "$")}</span>`).join("");
  const leftover = `${math("$" + sec.u1 + "$")} <span class="pair-ghost">${"· ".repeat(sec.n - 1)}</span> ${math("$-" + next + "$")}`;
  return `<div class="viz pair-board" data-demo>
    <h4 class="viz-title">${math("Multiply the sum by $r$, then subtract")}</h4>
    <div class="demo-stage is-on">
      <div class="pair-lab">${math("$S_n$")}</div>
      <div class="pair-row">${sRow}</div>
    </div>
    <div class="demo-stage">
      <div class="pair-lab">${math("$rS_n$")}</div>
      <div class="pair-row">${rRow}</div>
    </div>
    <div class="demo-stage">
      <div class="pair-lab">${math("$S_n-rS_n$")}</div>
      <div class="pair-row shift-left">${leftover}</div>
      <p class="say">${math(
        "Almost everything cancels. What remains is $u_1-u_1 r^{n}$, so $S_n=u_1\\dfrac{1-r^{n}}{1-r}$."
      )}</p>
    </div>
    <div class="walk-bar">
      <button type="button" class="secondary" data-demo-next>Next move</button>
    </div>
  </div>`;
}

function piecesHtml(sec, math) {
  const items = sec.terms
    .map(
      (t, i) => `<div class="piece" style="flex:${sec.weights[i]}">
        <span>${math("$" + t + "$")}</span>
      </div>`
    )
    .join("");
  return `<div class="viz">
    <div class="piece-row">${items}</div>
    <p class="say">${math(sec.caption)}</p>
  </div>`;
}

function doorsHtml(sec, math) {
  const door = (d) => `<div class="door ${d.tone || ""}">
    <h4>${math(d.title)}</h4>
    <div class="door-test">${math(d.test)}</div>
    <p>${math(d.body)}</p>
  </div>`;
  return `<div class="viz doors">${door(sec.left)}${door(sec.right)}</div>`;
}

function demoHtml(sec, math) {
  const stages = sec.stages
    .map((s, i) => `<div class="demo-stage${i === 0 ? " is-on" : ""}">${math(s.html)}</div>`)
    .join("");
  return `<div class="viz demo-board" data-demo>
    ${sec.title ? `<h4 class="viz-title">${math(sec.title)}</h4>` : ""}
    ${stages}
    <div class="walk-bar">
      <button type="button" class="secondary" data-demo-next>${sec.next || "Next move"}</button>
    </div>
  </div>`;
}

function splitHtml(sec, math) {
  const early = Array.from({ length: sec.cut }, (_, i) => i + 1);
  const late = Array.from({ length: sec.total - sec.cut }, (_, i) => sec.cut + 1 + i);
  const chip = (n, lateFlag) => `<span class="split-chip${lateFlag ? " is-late" : ""}">${math("$a_{" + n + "}$")}</span>`;
  return `<div class="viz">
    <div class="split-row">
      <div class="split-block">
        <div class="split-lab">${math("$\\sum_{r=1}^{" + sec.cut + "}$")}</div>
        <div class="split-chips">${early.map((n) => chip(n, false)).join("")}</div>
      </div>
      <div class="asm-op">${math("$+$")}</div>
      <div class="split-block">
        <div class="split-lab">${math("$\\sum_{r=" + (sec.cut + 1) + "}^{" + sec.total + "}$")}</div>
        <div class="split-chips">${late.map((n) => chip(n, true)).join("")}</div>
      </div>
    </div>
    <p class="say">${math("The leftover block is the long sum minus the early sum.")}</p>
  </div>`;
}

export function renderTeach(sec, math) {
  if (sec.type === "say") return `<p class="say">${math(sec.html)}</p>`;
  if (sec.type === "letters") return lettersHtml(sec, math);
  if (sec.type === "cards") return cardsHtml(sec, math);
  if (sec.type === "seats") return seatsHtml(sec, math);
  if (sec.type === "walk") return walkHtml(sec, math);
  if (sec.type === "compare") return compareHtml(sec, math);
  if (sec.type === "bars") return barsHtml(sec, math);
  if (sec.type === "hops") return hopsHtml(sec, math);
  if (sec.type === "pairs") return pairsHtml(sec, math);
  if (sec.type === "sigma") return sigmaHtml(sec, math);
  if (sec.type === "method") return methodHtml(sec, math);
  if (sec.type === "assemble") return assembleHtml(sec, math);
  if (sec.type === "balance") return balanceHtml(sec, math);
  if (sec.type === "scale") return scaleHtml(sec, math);
  if (sec.type === "window") return windowHtml(sec, math);
  if (sec.type === "dots") return dotsHtml(sec, math);
  if (sec.type === "groups") return groupsHtml(sec, math);
  if (sec.type === "machine") return machineHtml(sec, math);
  if (sec.type === "shift") return shiftHtml(sec, math);
  if (sec.type === "pieces") return piecesHtml(sec, math);
  if (sec.type === "doors") return doorsHtml(sec, math);
  if (sec.type === "demo") return demoHtml(sec, math);
  if (sec.type === "split") return splitHtml(sec, math);
  return "";
}

function revealNext(wrap, itemSel, btn) {
  const next = wrap.querySelector(`${itemSel}:not(.is-on)`);
  if (next) next.classList.add("is-on");
  if (btn && !wrap.querySelector(`${itemSel}:not(.is-on)`)) {
    btn.disabled = true;
    btn.textContent = "That's the whole move";
  }
}

export function bindTeach(root) {
  root.querySelectorAll("[data-walk]").forEach((wrap) => {
    const next = wrap.querySelector("[data-walk-next]");
    const reset = wrap.querySelector("[data-walk-reset]");
    const syncNotes = () => {
      const on = [...wrap.querySelectorAll(".walk-cell.is-on")].length;
      wrap.querySelectorAll(".walk-note").forEach((n) => {
        n.classList.toggle("is-on", Number(n.getAttribute("data-walk-note")) === on - 1);
      });
    };
    next?.addEventListener("click", () => {
      revealNext(wrap, ".walk-cell", next);
      syncNotes();
    });
    reset?.addEventListener("click", () => {
      wrap.querySelectorAll(".walk-cell").forEach((c, i) => c.classList.toggle("is-on", i === 0));
      if (next) {
        next.disabled = false;
        next.textContent = "Show the next term";
      }
      syncNotes();
    });
  });

  root.querySelectorAll("[data-demo]").forEach((wrap) => {
    const btn = wrap.querySelector("[data-demo-next]");
    btn?.addEventListener("click", () => revealNext(wrap, ".demo-stage", btn));
  });

  root.querySelectorAll("[data-sigma]").forEach((wrap) => {
    const btn = wrap.querySelector("[data-sigma-next]");
    btn?.addEventListener("click", () => {
      revealNext(wrap, ".sigma-term", btn);
      const done = !wrap.querySelector(".sigma-term:not(.is-on)");
      wrap.querySelector(".sigma-total")?.classList.toggle("is-on", done);
    });
  });

  root.querySelectorAll("[data-seats]").forEach((wrap) => {
    wrap.querySelectorAll("[data-seat]").forEach((seat) => {
      seat.addEventListener("click", () => {
        wrap.querySelectorAll(".seat").forEach((s) => s.classList.remove("hi"));
        seat.classList.add("hi");
        const n = seat.getAttribute("data-seat");
        wrap.querySelectorAll(".seat-note").forEach((note) => {
          note.classList.toggle("is-on", note.getAttribute("data-seat-note") === n);
        });
      });
    });
  });
}
