/**
 * 정수가 담긴 리스트 num_list가 주어질 때,
 * 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.
 */

function solution(num_list) {
    const value = num_list.reduce((acc, num) => {
        return acc * num
    });

    const value2 = num_list.reduce((acc, num) => {
        return acc + num
    });

    return value > value2 * value2 ? 0 : 1
};