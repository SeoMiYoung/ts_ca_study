// [숙제1] 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
//// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다"를 출력하는 함수를 만들어봅시다.
//// 파라미터와 return 타입지정도 잘 해봅시다.
function Hello(name? :string) :void {
    if (name) {
        console.log('안녕하세요' + name)
    }
    else {
        console.log("이름이 없습니다")
    }
}

Hello("홍길동");
Hello(); // "이름이 없습니다"

// [숙제2] 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
function 자릿수세기(n :string | number) :number {
    return n.toString().length;
}
자릿수세기(1234);

// [숙제3] 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
function 결혼가능확률(월소득 :number, 집보유여부 :boolean, 매력점수 :string) :string | void {
    let total_score :number = 0;

    // 월소득
    total_score += 월소득;

    // 집보유여부
    if (집보유여부 === true) {
        total_score += 500;
    }
    
    // 매력점수
    if (매력점수 === '상') {
        total_score += 100;
    }

    // 결론
    if (total_score >= 600) {
        return "결혼가능";
    }
}

console.log(결혼가능확률(700, false, "중"));
console.log(결혼가능확률(100, false, "상"));