// type alias (타입 변수)
// 타입지정이 너무 길고 복잡하면 따로 저장해서 사용
// 작명시, 영어대문자로 시작하는게 국룰!
// 뒤에 Type을 붙여주면 더 명시적으로 표현 가능!
type AnimalType = string | number | undefined;

let 동물 :AnimalType = 'kim';

// <const 변수>
const 출생지역 = { region : 'Seoul' }

// 잠깐! const는 재할당을 막을뿐, 내부 수정은 막지 않음
출생지역.region = 'Busan'; // 쌉가능 

