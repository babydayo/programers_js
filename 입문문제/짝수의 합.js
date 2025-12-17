// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
// 25.12.16

const solution = (n) => {
    let sum = 0;

    for ( i=0; i<=n; i++ ) {
        if ( i % 2 === 0) {
            sum = sum + i
        };
    };

    return sum;
}