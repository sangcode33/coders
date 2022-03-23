https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    let answer = 0;
    let sorted = d.sort((a, b) => a - b);
    for (let i in sorted) { 
        if (budget - sorted[i] < 0) { 
            return answer; 
        }
        budget = budget - sorted[i]; 
        answer = answer + 1; 
    }
    return answer;
}
