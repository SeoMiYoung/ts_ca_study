var 자료 = {
    name: 'kim'
};
function 내함수(a) {
}
내함수('kim');
내함수(자료.name); // 엥 왜 에러나지?
// 이유
// 그 이유는 function 내함수(a :'kim') {} 의 의미는
//// kim이라는 자료만 들어올 수 있습니다 (X)
//// kim이라는 타입만 들어올 수 있습니다 (O)
// 자료.name에 마우스포인터 올리면 자료형 'string'이라고 나옴
//// 즉, 자료형이 'kim'이 아님!
//// 솔루션1. object만들 때 타입지정 확실히 하셈
//// 솔루션2. as문법으로 타입을 구라치던가
//// 솔루션3. 간편 버전 --> as const 쓰던가 
var 자료2 = {
    name: 'kim'
};
// as const의미는 이 object는 literal type지정 알아서 해주셈!!이라는 의미
// 효과1. object value값을 그대로 타입으로 지정해줌 --> 즉, name이라는 속성은 'string'타입이 아니라, 'kim'타입이 됨
// 효과2. object 속성들에 모두 readonly를 붙여줌
function 내함수2(a) {
}
내함수2('kim');
내함수2(자료2.name); // 이제 에러 안남
