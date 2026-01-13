// 문자열 my_string이 매개변수로 주어집니다.
// my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
// 26.01.13

const solution = (my_string) => {
    let result = 0;
    for(let i of my_string) {
        if (!Number.isNaN(parseInt(i))) {
            result += parseInt(i);
        }
    }

    return result;
};