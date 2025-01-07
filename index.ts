// Literal Types
let 이름 :'kim'; // 무조건 'kim'만 들어갈 수 있음
이름 = 'seo'; 

let 접니다 : '대머리' | '솔로';
접니다 = '대머리';

function 함수(a :'hello') :1 | 0 {
    return 1;
}
함수('hello')

// 문제
let RSP_array = []
function RSP(x :'가위' | '바위' | '보') :('가위'|'바위'|'보')[] {
    RSP_array.push(x);
    return RSP_array;
}
console.log(RSP('가위'))
console.log(RSP('바위'))
console.log(RSP('보'))

