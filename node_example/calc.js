// 계산 기능
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

// 계산 모듈 내보내기(module.exports)
module.exports = {
    moduleName: "calc module",
    add: add,
    sub: sub,
};