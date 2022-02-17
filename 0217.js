https://programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
    let ans = 0;
    while(n > 0) {
        if( n % 2 === 0 ) {
            n =  n / 2;
            console.log('이거는?', n)
        } else {
            ans = ans + 1;
            n =  n - 1;
        }
    }
    return ans;
}
