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

type GirlFriendType = {
    readonly name : string
}
const 여친 :GirlFriendType = {
    name : '엠버'
}
// 만약에 막고 싶으면? readonly 
여친.name = '유라' // readonly로 인해 수정 불가 
// 그치만, ts자체가 그냥 에러 표시 용도지, 실제 변환된 js파일은 에러 없고, 수정해줌


