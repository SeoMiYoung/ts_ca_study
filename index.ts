// object를 extend 한다 == 합친다 
// 합치기(1)
type Name = string;
type Age = number;
type Person = Name | Age; // union type으로 만듦

// 합치기(2)
type PositionX = {
    x : number,
}
type PositionY = {
    y : number,
}
type NewType = PositionX & PositionY; // { x : number, y : number } 이렇게 합쳐짐

// [참고]
// 같은 이름의 type 변수 재정의 불가능
type PositionX = string; // Duplicate identifier 'PositionX'에러 발생!
