/**
 * 양의 정수 n이 매개변수로 주어질 때,
 * n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고
 * n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.
 */

function solution(n) {
    let sum = 0;

    if(n % 2 === 0){
        for(let i = 2; i <= n; i += 2) {
            sum += i ** 2
        }
    } else {
        for(let i = 1; i <= n; i += 2) {
            sum += i;
        }
    }

    return sum;
}