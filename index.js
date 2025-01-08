var 제목 = document.querySelector('#title');
if (제목 != null) {
    // 참고로 typeof는 "object", "string"등의 기본 자료형만 확인합니다. 따라서 "Element"이런 확인은 ㄴㄴ
    // 만약에 DOM 객체인지 확인하려면 instanceof를 사용하세요. 
    제목.innerHTML = '반가워요';
}
// 이 상태로 하면 에러가 발생함
/*
'제목' is possibly 'null'.ts(18047)
let 제목: Element | null
*/
// --> 이런 에러! 따라서 여러분은 타입 확정을 시켜줘야함! narrowing을 통해서! 
// 왜 그렇냐면 document.querySelector('#title')를 제대로 찾지 못하면, null이 반환되기 때문임!
