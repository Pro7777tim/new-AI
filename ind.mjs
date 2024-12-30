import { AI } from "./main.mjs";
let ai = new AI();
let ans = ai.answer([
    {
        name: "Олег",
        rating: 160,
    },
    {
        name: "Оля",
        rating: 80,
    },
    {
        name: "Ілля",
        rating: 40,
    },
    {
        name: "Влад",
        rating: 200,
    },
    {
        name: "Тимур",
        rating: 80,
    },
]);
console.log(ans);
