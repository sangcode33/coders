https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    let answer = 0;
    let sqrt = Math.sqrt(n); 
    if (Number.isInteger(sqrt)) { 
        answer = (sqrt + 1) * (sqrt + 1); 
    } else { 
        answer = -1; 
    }
    return answer;
}
