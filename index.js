const myGroupA = ["wilfred","Ayomide","Joshua"];
const myGroupB = ["Nifemi","Demilade","Precious"];
const myPlaces = ["shoprite","domino","canada"];

let groupA =myGroupA[Math.floor(Math.random() * myGroupA.length)];

let groupB = myGroupB[Math.floor(Math.random() * myGroupB.length)];

let places = myPlaces[Math.floor(Math.random() * myPlaces.length)];

console.log(`${groupA} and ${groupB} will be going on a dinner date at ${places}`)