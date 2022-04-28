https://programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
    let answer = 1;
    for (let i = 1; i <= n / 2; i++) {
        let result = 0; 
        let j = i; 
        while (result < n) { 
            result = result + j++; 
            if (result === n) { 
                answer++; 
            }
        }
    }
    return answer;
}
