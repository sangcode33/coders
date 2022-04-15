https://programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
    let answer = [];
    for (let i = 1; i < n; i++) { 
        if (n % i === 1) { 
            answer.push(i);
        }
    }
    return Math.min(...answer);
}
