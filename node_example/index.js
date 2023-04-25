// node.js 런타임에서 js 실행하기 (경로에 유의)
// (1) Panel (Ctrl + j)
// (2) Terminal : node index.js 
console.log("Hello Node.js!!!")

// 계산 모듈 가져오기(require("path"))
const calc = require("./calc");
console.log(calc);
console.log(calc.add(10, 2));
console.log(calc.sub(10, 2));