// [숙제1] 숫자여러개를 array 자료에 저장해놨는데
function Cleaning(arr) {
    // [에러 원인] forEach는 원본을 변경하지만, ts는 이를 자동 추적을 안하기 때문에 내부 타입이 변경되어도 여전히 (number | string)[] 타입으로 간주함 
    arr.forEach(function (number, index) {
        if (typeof number === 'string') {
            arr[index] = parseInt(number, 10);
        }
    });
    return arr; // 따라서 여기에 에러 발생함 --> 이 방법 말고, 그냥 새로운 배열을 만들어 반환할 것을 추천 
}
console.log(Cleaning(['1', 2, '3']));
// [정답 코드]
function 클리닝함수(a) {
    var 클리닝완료된거 = [];
    a.forEach(function (b) {
        if (typeof b === 'string') {
            클리닝완료된거.push(parseFloat(b));
        }
        else {
            클리닝완료된거.push(b);
        }
    });
    return 클리닝완료된거;
}
console.log(클리닝함수([123, '3']));
