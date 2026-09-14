const KEY = "stepwise-sequences-v1";

const empty = {
  startChoice: null,
  lessons: {},
  problems: {},
  lastUnit: null,
};

export function loadProgress() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...empty, lessons: {}, problems: {} };
    const data = JSON.parse(raw);
    return {
      startChoice: data.startChoice ?? null,
      lessons: data.lessons ?? {},
      problems: data.problems ?? {},
      lastUnit: data.lastUnit ?? null,
    };
  } catch {
    return { ...empty, lessons: {}, problems: {} };
  }
}

export function saveProgress(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function markLesson(id) {
  const p = loadProgress();
  p.lessons[id] = Date.now();
  saveProgress(p);
  return p;
}

export function recordProblem(id, { correct, hints }) {
  const p = loadProgress();
  const prev = p.problems[id] ?? { attempts: 0, correct: 0, hints: 0, firstTry: null };
  prev.attempts += 1;
  if (correct) {
    prev.correct += 1;
    if (prev.firstTry == null) prev.firstTry = hints === 0;
  }
  prev.hints += hints;
  p.problems[id] = prev;
  saveProgress(p);
  return p;
}

export function setMeta(patch) {
  const p = loadProgress();
  Object.assign(p, patch);
  saveProgress(p);
  return p;
}

export function resetProgress() {
  localStorage.removeItem(KEY);
  return { ...empty, lessons: {}, problems: {} };
}

export function skillStats(progress, problemIds) {
  let attempted = 0;
  let correct = 0;
  let clean = 0;
  for (const id of problemIds) {
    const row = progress.problems[id];
    if (!row) continue;
    attempted += 1;
    if (row.correct > 0) correct += 1;
    if (row.firstTry) clean += 1;
  }
  const total = problemIds.length;
  let level = "Not started";
  if (correct >= Math.max(3, Math.ceil(total * 0.75)) && clean >= 2) level = "Proficient";
  else if (correct >= 2) level = "Familiar";
  else if (attempted) level = "Practiced";
  return { attempted, correct, total, level };
}

export function unitCompletion(progress, unit) {
  const lessonIds = unit.lessons.map((l) => l.id);
  const lessonsDone = lessonIds.filter((id) => progress.lessons[id]).length;
  const problemIds = unit.skills.flatMap((s) => s.problemIds);
  const correct = problemIds.filter((id) => progress.problems[id]?.correct > 0).length;
  const lessonPct = lessonIds.length ? lessonsDone / lessonIds.length : 1;
  const problemPct = problemIds.length ? correct / problemIds.length : 0;
  const pct = Math.round(100 * (0.45 * lessonPct + 0.55 * problemPct));
  return { lessonsDone, lessonCount: lessonIds.length, correct, problemCount: problemIds.length, pct };
}
