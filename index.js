var Person = /** @class */ (function () {
    // ts랑 js의 차이점
    //// Typescript의 constructor()는 필드값에 어쩌구가 미리 있어야 this.어쩌구 가능! 
    function Person(a) {
        this.data = 0; // 필드값
        // 뭐.. return값에 대한 타입지정까지 할 필요는 X
        // 복제되는 게 항상 object인데, return 타입지정할 이유는 없음 
        this.name = a;
    }
    // prototype 함수 타입 지정해서 쓰셈 
    // 이게 바로 Person.prototype.함수1()
    Person.prototype.함수1 = function (a) {
        // 얘는 return이 있다면, return type까지 지정해주는게 좋긴 함 
        console.log('안녕' + a);
    };
    return Person;
}());
var 사람1 = new Person('young');
var 사람2 = new Person('won');
console.log(사람1.name);
console.log(사람2.name);
사람1.함수1('hello');
사람2.함수1('hi');
