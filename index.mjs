import { getAverageColor } from "fast-average-color-node";

console.time();
console.log(await getAverageColor("S:/Bots/Test/image1.png"));
console.log(await getColor("S:/Bots/Test/image1.png"));
console.timeEnd();
