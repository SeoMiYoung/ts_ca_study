/*
[숙제1]
html 안에 test.jpg를 보여주고 있는 이미지 태그가 있다고 칩시다.
이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요?
성공여부는 크롬 개발자도구 켜면 src 속성이 잘 바뀌었는지 확인가능하겠죠?
*/
var 버튼 = document.querySelector('#button');
var linkList = document.querySelectorAll(".naver");
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
// querySelectorAll() 셀렉터를 쓰면 많은 요소를 한번에 찾을 수 있습니다.
/*
근데 이 경우 타입이 NodeListOf<어쩌구> 이렇게 나오는데 그냥 여러개 찾으면 이런 타입이 된다고 생각하면 됩니다.
그리고 forEach 반복문을 이용해서 찾은 요소마다 각각 href 속성을 변경해줬다고 합니다.
*/
linkList.forEach(function (i) {
    if (i instanceof HTMLAnchorElement) {
        i.href = 'https://kakao.com';
    }
});
/*
<또 다른 답안>
let 링크 = document.querySelectorAll('.naver');

for (let i = 0; i < 3; i++){
  let a = 링크[i];
  if (a instanceof HTMLAnchorElement){
    a.href = 'https://kakao.com'
  }
}
*/ 
