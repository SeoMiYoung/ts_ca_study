// 만약에 Type이 아직 하나로 확정되지 않았을 경우, Type Narrowing을 써야합니다!!

function 내함수(x :number | string) {
    let array :number[] = [];
    array[0] = x as number; // x를 number타입으로 덮어써주세요 --> ts 컴파일러가 x를 number로 이해함

}

내함수(123);

// <귀찮으면 assertion문법>
// 말 그대로 타입을 덮어써주는거야 
// 음.. 그치만.. assertion을 자주 쓰지는 마세요~^^
//// 사실 as 문법의 용도는 다음과 같습니다.
////// 1. Narrowing 할 때 씁니다.
////// 2. 무슨 타입이 들어올지 100% 확실할 때 쓰셈

// 참고로 옛날 as 문법은
//// let 이름 :string = 'kim';
//// <number>이름