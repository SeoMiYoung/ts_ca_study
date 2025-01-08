// 숙제2
/*
(숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.

- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.

- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.

- 함수에 타입지정시 type alias를 꼭 써보도록 합시다.

물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다.
*/
var cutZero = function (c) {
    // c 맨 앞에 '0'문자가 있으면 제거하고 문자 type으로 return해줌
    if (c[0] == '0') {
        c = c.slice(1);
    }
    return c;
};
console.log(cutZero('0hello'));
var removeDash = function (c) {
    var i;
    for (i = 0; i < c.length; i++) {
        if (c[i] == '-') {
            c = c.substring(0, i) + ' ' + c.substring(i + 1);
            console.log(c);
        }
    }
    return Number(c.split(' ').join(''));
};
console.log(removeDash('-23--24---3'));
console.log(removeDash('7---1-2-3-4-5---6'));
function 만들함수(str, func1, func2) {
    return func2(func1(str)); // func2에 '콜백함수'사용 
}
console.log(만들함수('010-1111-2222', cutZero, removeDash));
