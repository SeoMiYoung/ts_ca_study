var 제목 = document.querySelector('#title');
if (제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) { // 조건: 왼쪽의 innerHTML이 있으면 출력을 해주고, 없으면 undefined 뱉으셈 (optional chaining)
    제목.innerHTML = '반가워요';
    // 만약에 undefined가 반환될 경우 false로 간주되서 if문이 실행되지 않음
}
/// 방법5: 무식한 방법
/// 그냥 tsconfing에서 "strictNullChecks"를 아예 지우던가, false로 바꾸던가야
/// 그러면 여러분 자유롭게 HTML narrowing없이 수정 가능합니다.
