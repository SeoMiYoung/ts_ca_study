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

  // prototype 함수 타입 지정해서 쓰셈 
  // 이게 바로 Person.prototype.함수1()
  함수1(a :string) {
    // 얘는 return이 있다면, return type까지 지정해주는게 좋긴 함 
    console.log('안녕' + a);
  }
}

let 사람1 = new Person('young');
let 사람2 = new Person('won');

console.log(사람1.name);
console.log(사람2.name);
사람1.함수1('hello');
사람2.함수1('hi');

// <숙제1> Car 클래스를 만들고 싶습니다.
class Car {
  model :string;
  price :number;
  constructor(model :string, price :number) {
    this.model = model;
    this.price = price;
  }

  tax() :number {
    return this.price/10;
  }
}
let car1 = new Car('소나타', 3000);
console.log(car1) // 콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()) // 콘솔창 출력결과는 300 