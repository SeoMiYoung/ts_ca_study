// 숙제2
/*
(숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.

- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.

- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 

- 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 

물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다. 
*/

type CutZeroType = (c :string) => string;
let cutZero :CutZeroType = function(c) {
    // c 맨 앞에 '0'문자가 있으면 제거하고 문자 type으로 return해줌
    if (c[0] == '0') {
        c = c.slice(1,);
    }
    return c;
}
console.log(cutZero('0hello'));

type RemoveDashType = (c :string) => number;
let removeDash = function(c) {
    let i;
    for (i=0; i<c.length; i++) {
        if (c[i] == '-') {
            c = c.substring(0, i) + ' ' + c.substring(i+1);
            console.log(c)
        }
    }
    return Number(c.split(' ').join(''));
}
console.log(removeDash('-23--24---3'));
console.log(removeDash('7---1-2-3-4-5---6'));

// 내 답도 맞는데, 대표 답안은 이거임
/*
type CutType = (x :string) => string

let cutZero :CutType = function (x){
    let result = x.replace(/^0+/, "");
    return result
}
function removeDash(x :string) :number{
    let result = x.replace(/-/g, "");
    return parseFloat(result)
}
*/



/*
(숙제3) 함수에 함수를 집어넣고 싶습니다.
숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 
이 함수는 어떻게 만들면 될까요?
둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
*/

// 이렇게 함수에 들어가는 함수를 멋진 개발자 용어로 '콜백함수'라고 부릅니다! 
type 만들함수타입 = (s :string, f1 :CutZeroType, f2 :RemoveDashType) => string;
function 만들함수(str, func1, func2) {
    return func2(func1(str)); // func2에 '콜백함수'사용 
}
console.log(만들함수('010-1111-2222', cutZero, removeDash));