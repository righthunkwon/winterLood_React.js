// Node.js 패키지 생성
// (1) npm init
// (2) 정보 입력
// (3) package.json 생성(패키지 생성 완료)
console.log("Hello Node.js package!!!")

// Node.js 편의 기능 : package.json - scripts - 예약명령어 추가

// Node.js 외부 패키지 사용(require("패키지이름"), npmjs 사이트 활용)
const randomColor = require("randomcolor");

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();

console.log(color1, color2, color3);

// index.js 실행 방법
// 1. node index.js (정해진 명령어)
// 2. npm start (package.json에 별도로 정의한 스크립트)
