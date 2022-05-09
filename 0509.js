https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    let answer = 0;
    let arr = []; 
    while (parseInt(n / 3) >= 1) {
        arr.push(n % 3);
        n = parseInt(n / 3);
    }
    arr.push(n);
    arr.reverse();
    for(let i = 0; i < arr.length; i++) {
        answer = answer + arr[i] * (3 ** i);
    }
    return answer;
}
