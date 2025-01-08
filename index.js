var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    // <a>의 경우 <a>에 필요한 정확한 타입명이 있음 
    링크.href = 'https://kakao.com';
}
