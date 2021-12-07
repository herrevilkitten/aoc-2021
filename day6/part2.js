const { readFileSync } = require("fs");
const { join } = require("path");

const input = readFileSync(join(__dirname, "input.txt"), "utf-8");

const fishes = input.split(",").map((entry) => Number(entry));

let fishCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];

console.log(fishes.length)
fishes.forEach((age) => {
  fishCount[age]++;
});

let dayCount = 0;

function fishPopulation() {
  return fishCount.reduce((prev, curr) => prev + curr, 0);
}

console.log(`Population: ${fishPopulation()}`, fishCount);
while (dayCount < 256) {
  let newFishes = fishCount[0];

  for (let i = 1; i <= 8; ++i) {
    fishCount[i - 1] = fishCount[i];
    fishCount[i] = 0;
  }
  fishCount[6] = fishCount[6] + newFishes;

  fishCount[8] = newFishes;

  dayCount++;
  console.log(`${dayCount} done. Population: ${fishPopulation()}`);
}
