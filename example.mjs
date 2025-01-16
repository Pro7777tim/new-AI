import { AI } from "./main.mjs";

const ai = new AI();

ai.study(["Nigel"], { age: 25, skill: "programming" }, true);
ai.study(["Charlotte"], { age: 30, skill: "design" }, false);

const currentSituation = { age: 26, skill: "programming" };

const results = ai.candidates(["Nigel", "Charlotte"], currentSituation);
console.log("Candidate ratings:", results);

const best = ai.answer(results);
console.log("Best candidate:", best);
