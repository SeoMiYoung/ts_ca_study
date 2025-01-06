function 함수(x :number) :void {
    // void로 반환값 없는것에 대한 단호하게 타입 지정 가능
    // 그냥 아예 :void이런거 안써도 됨됨
}

// <자바스크립트와 다른 점>
// - 타입이 지정된 파라미터(ex. number)는 필수로 넣어야함
함수();

// 만약에 선택사항으로 넣고 싶으면 물음표(?)
function 함수1(x? :number) :void {
    // 사실 ?를 한다는 건, x :number | undefined랑 똑같은거임 
}

함수1(); // 에러 안남

