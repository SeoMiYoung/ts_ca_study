// [숙제1] object 타입을 정의한 type alias 두개를 & 기호로 합칠 때, 중복된 속성이 있으면 어떻게 될까요?
type ObjType1 = {
    name : string,
}
type ObjType2 = {
    name : number,
}
type ObjTypeAnd = ObjType1 & ObjType2
let test :ObjTypeAnd = {
    name : 'Ming',
    // 타입스크립트는 & 연산자를 사용해 타입을 교차시킬 때, 중복된 속성은 모든 타입이 동시에 만족해야 하는 값을 요구합니다.
    // 따라서 number & string은 둘 다 만족할 수 없으므로 불가능한 타입(never)이 됩니다.
}

// [숙제2] 다음 조건을 만족하는 타입을 만들어봅시다.
type Assign2Type = {
    color? : string,
    size : number,
    readonly position : number[],
}
let 테스트용변수 :Assign2Type = {
    size : 123,
    position : [1, 2, 3],
}

// [숙제3] 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.
type Assign3Type = {
    name : string,
    phone : number,
    email : string,
}
let 테스트용변수2 :Assign3Type = {
    name : 'kim',
    phone : 123,
    email : 'abc@naver.com'
}