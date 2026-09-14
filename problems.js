import { problems as start } from "./problems-start.js";
import { problems as arith } from "./problems-arith.js";
import { problems as arithSum } from "./problems-arith-sum.js";
import { problems as geo } from "./problems-geo.js";
import { problems as geoSum } from "./problems-geo-sum.js";
import { problems as special } from "./problems-special.js";
import { problems as mixed } from "./problems-mixed.js";
import { problems as mastery } from "./problems-mastery.js";

export const problems = [
  ...start,
  ...arith,
  ...arithSum,
  ...geo,
  ...geoSum,
  ...special,
  ...mixed,
  ...mastery,
];

const byId = Object.fromEntries(problems.map((p) => [p.id, p]));

export function getProblem(id) {
  return byId[id];
}

export function problemsForUnit(unit) {
  return unit.skills.flatMap((s) => s.problemIds.map(getProblem).filter(Boolean));
}
