// Literal Types
var 이름; // 무조건 'kim'만 들어갈 수 있음
이름 = 'seo';
var 접니다;
접니다 = '대머리';
function 함수(a) {
    return 1;
}
함수('hello');
// 문제
var RSP_array = [];
function RSP(x) {
    RSP_array.push(x);
    return RSP_array;
}
console.log(RSP('가위'));
console.log(RSP('바위'));
console.log(RSP('보'));
