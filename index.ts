let 회원 :(number | string | boolean) = 123; // union type(타입2개 이상 합친 새로운 타입만들기)
let 회원들 :(number | string)[] = [1, '2', 3];
let 오브젝트 :{ a : string | number } = { a : '123'};

// any: 모든 자료형 허용해줌줌
// 타입 지정해주기 귀찮으면? any --> 그치만, ts를 사용하는 이유가 없음.. 사실상 타입실드 해제 문법임임
let 이름 :any; 
이름 = 123;
이름 = true;

