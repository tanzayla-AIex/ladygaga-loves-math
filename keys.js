import { checkInKey } from "./keys-checkin.js";
import { arithKey } from "./keys-arith.js";
import { geoKey } from "./keys-geo.js";

export const keys = [checkInKey, arithKey, geoKey];

export function keyById(id) {
  return keys.find((k) => k.id === id);
}

export const sourceDocs = [
  {
    id: "checkin",
    title: "Sequence Check-In",
    blurb: "A 40-mark mixed paper: two arithmetic items, a parameter $k$ that is arithmetic then geometric, a geometric-into-arithmetic maximum sum, and a repeating decimal from an infinite series.",
    file: "resources/sequence-check-in.pdf",
    keyId: "checkin",
    marks: "40 marks · Paper 1 and Paper 2",
  },
  {
    id: "arith",
    title: "Arithmetic sequences",
    blurb: "Nikolaidis [MAA 1.2–1.3]: notation and sigma first, then $u_n$ and $S_n$, then short and long exam-style questions (65 items).",
    file: "resources/maa-1.2-1.3-arithmetic-sequences.pdf",
    keyId: "arith",
    marks: "65 questions · with and without GDC",
  },
  {
    id: "geo",
    title: "Geometric sequences",
    blurb: "Nikolaidis [MAA 1.4]: finite and infinite geometric series, mixed arithmetic/geometric, and long Paper-style items (55 items).",
    file: "resources/maa-1.4-geometric-sequences.pdf",
    keyId: "geo",
    marks: "55 questions · with and without GDC",
  },
];
