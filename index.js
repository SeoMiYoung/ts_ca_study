// [숙제2] 다음과 같은 함수를 만들어보십시오.
// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.
// '철수쌤' 같은 object 자료를 파라미터로 집어넣으면 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function 맨뒤에(obj) {
    if (typeof obj.subject === 'string') {
        return obj['subject'];
    }
    else if (Array.isArray(obj.subject)) {
        // array 자료형인지 확인하려면 typeof는 못쓰고 isArray써야함 
        var 길이 = obj['subject'].length;
        return obj['subject'][길이 - 1];
    }
    else {
        return '없어';
    }
}
console.log(맨뒤에({ subject: 'math' })); // 이 경우 'math'를 return
console.log(맨뒤에({ subject: ['science', 'art', 'korean'] })); // 이 경우 'korean'을 return 
console.log(맨뒤에({ hello: 'hi' })); // 이 경우 타입에러 나면 됩니다
