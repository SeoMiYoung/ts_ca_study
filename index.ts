// 함수 타입 지정은 이런 형태로 해야함
type MemberType = {
    name : string,
    age : number,
    plusOne : ( x :number ) => number,
    changeName : () => void
}

// object 자료형 안에 함수 저장
// methods안에 타입지정하기 
// object 자료 안에 함수도 마음대로 집어넣을 수 있습니다.
let 회원정보 :MemberType = {
    name : 'kim',
    age : 30,
    // <함수도 자료안에 보관해서 쓰고싶을 때가 있음>
    // 함수 작성 방식1(일반 함수): 축약형 메서드로, function이라는 키워드 없이도 바로 함수로 정의할 수 있음
    // key: 'plusOne', value: function
    plusOne(x :number) {
        return x + 1;
    },
    // 함수 작성 방식2(arrow function): 일반적인 속성에 함수 표현식을 할당한 방식. 이때, changeName은 객체의 키로 작동하며, 함수는 그 값으로 저장됩니다. 
    // key: 'changeName, value: function 
    changeName : () => {
        console.log('안녕');
    }
}

회원정보.plusOne(3)