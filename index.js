// 만약에 Type이 아직 하나로 확정되지 않았을 경우, Type Narrowing을 써야합니다!!
function 내함수(x) {
    if (typeof x === 'string') { // 이런식으로 타입을 확정해줘야함 
        return x + '1';
    }
    else {
        return x + 1;
    }
}
내함수(123);
