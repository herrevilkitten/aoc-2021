const { readFileSync } = require("fs");
const { join } = require("path");

const input = readFileSync(join(__dirname, "input.txt"), "utf-8");

const fishes = input.split(",").map((entry) => BigInt(entry));

let dayCount = 0;

console.log(`Population: ${fishes.length}`);
while (dayCount < 80) {
  let newFishes = 0;
  for (let i = 0; i < fishes.length; ++i) {
    if (fishes[i] === 0n) {
      fishes[i] = BigInt(6);
      newFishes++;
    } else {
      fishes[i] = fishes[i] - 1n;
    }
  }
  for (let i = 0; i < newFishes; ++i) {
    fishes.push(BigInt(8));
  }
  dayCount++;
  console.log(`${dayCount} done. Population: ${fishes.length}`);
}
