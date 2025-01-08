/*
[숙제1]
html 안에 test.jpg를 보여주고 있는 이미지 태그가 있다고 칩시다.
이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요?
성공여부는 크롬 개발자도구 켜면 src 속성이 잘 바뀌었는지 확인가능하겠죠?
*/
var 버튼 = document.querySelector('#button');
var testImg = document.querySelector('#image');
if (testImg instanceof HTMLImageElement) {
    버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
        // ?. 이것도 narrowing으로 인정해줌
        // 버튼에 addEventListener 가능하면 해주시고, 아니면 undefined 뱉으셈
        testImg.src = "new.jpg";
        // Optional Chaining은 안전하게 null을 처리합니다. 만약 버튼이 null이면, addEventListener는 실행되지 않으므로 런타임 에러는 발생하지 않습니다.
        // 하지만, typescript는 버튼이 올바른 타입(HTMLButtonElement)임을 확인하지 않은 경우 경고를 띄울 수 있습니다.
    });
}
