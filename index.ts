let 이름 :string = 'kim';
let 나이 :number = 50;
let 결혼했니 :undefined = undefined;
let 회원들 :string[] = ['kim', 'park'];
let 회원들2 :{ member1 : string, member2 : string } = { 
    member1 : 'kim',
    member2 : 'park',
}

// ts는 자동으로 타입을 씌워줍니다. 그렇게 동작하게 되어있습니다.

// [실습]
// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
let Name :string = "SeoMiYoung";
let Age :number = 26;
let BornArea :string = "Seoul";

// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
let Favorite :{ Title : string, Singer : string } = {
    Title : "Home",
    Singer : "NMIXX"
}

// Q3. 자료의 타입지정을 해보도록 합시다.
let project :{ 
    member : string[], 
    days : number, 
    started : boolean, 
}= {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}