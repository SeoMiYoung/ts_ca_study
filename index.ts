// 만약에 Type이 아직 하나로 확정되지 않았을 경우, Type Narrowing을 써야합니다!!

function 내함수(x :number | string) {
    let array :number[] = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
}

내함수(123);

// <Narrowing으로 판정해주는 문법들>
// --> 그냥 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면, 다 인정해줌!!!! 
//// typeof 변수
//// 속성명 in 오브젝트자료
//// 인스턴스 instanceof 부모 