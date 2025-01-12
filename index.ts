class Person {
  data :number = 0; // 필드값
  name :string; // name이라는 필드값을 미리 지정해줘야함 
  // ts랑 js의 차이점
  //// Typescript의 constructor()는 필드값에 어쩌구가 미리 있어야 this.어쩌구 가능! 
  constructor() {
    this.name = 'kim'
  }
}

let 사람1 = new Person();
let 사람2 = new Person();

사람1.data  // 이건 0을 의미함
사람2.data  // 이것도 0을 의미함