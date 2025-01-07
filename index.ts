// 함수 타입 지정은 이런 형태로 해야함
type 함수타입 = (a :string) => number;


// 함수 표현식을 사용해야함
// 함수 표현식에만 함수 type alias 사용가능!
let 함수 :함수타입 = function () {
    return 1;
}