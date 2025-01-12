class Person {
  data :number = 0; // 필드값
  name :string; // name이라는 필드값을 미리 지정해줘야함 
  // ts랑 js의 차이점
  //// Typescript의 constructor()는 필드값에 어쩌구가 미리 있어야 this.어쩌구 가능! 
  constructor(a :string) {
    // 뭐.. return값에 대한 타입지정까지 할 필요는 X
    // 복제되는 게 항상 object인데, return 타입지정할 이유는 없음 
    this.name = a;
  }
}

let 사람1 = new Person('young');
let 사람2 = new Person('won');

console.log(사람1.name);
console.log(사람2.name);