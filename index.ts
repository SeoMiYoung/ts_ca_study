let 회원 :(number | string | boolean) = 123; // union type(타입2개 이상 합친 새로운 타입만들기)
let 회원들 :(number | string)[] = [1, '2', 3];
let 오브젝트 :{ a : string | number } = { a : '123'};

// any: 모든 자료형 허용해줌줌
// 타입 지정해주기 귀찮으면? any --> 그치만, ts를 사용하는 이유가 없음.. 사실상 타입실드 해제 문법임임
let 이름1 :any; 
이름1 = 123;
이름1 = true;

// unknown type
// 모든 자료형 허용 (any랑 조금 비슷하지만 any보다 조금 더 안전함)
let 이름2 :unknown;
이름2 = 123;
이름2 = {};

// 왜 any보다 unknown이 더 안전한가?
let 변수1 :string = 이름2; // 에러를 잡아줌
let 변수2 :string = 이름1; // 에러 발생 X --> 이름1이 any라서 쉴드 해제인거임

// 타입스크립트의 엄격함에 대해 (간단한 수학연산도 타입맞아야함)
let 이름 :unknown;
이름 - 1; // unknown타입은 뺄셈을 못하게 되어있음

