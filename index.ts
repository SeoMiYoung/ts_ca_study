let 제목 = document.querySelector('#title');
if (제목?.innerHTML) { // 조건: 왼쪽의 innerHTML이 있으면 출력을 해주고, 없으면 undefined 뱉으셈 (optional chaining)
    제목.innerHTML = '반가워요';
    // 만약에 undefined가 반환될 경우 false로 간주되서 if문이 실행되지 않음
}


