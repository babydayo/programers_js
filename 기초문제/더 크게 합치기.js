function solution(a, b) {
    var answer = 0;

    const test1 = '' + a + b
    const test2 = '' + b + a

    answer = Math.max(test1, test2)

    return answer;
}

// 자동 형변환
function solution2(a, b) {
    return Math.max(`${a}${b}`, `${b}${a}`)
}

// 명시적 형변환
function solution3(a, b) {
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}