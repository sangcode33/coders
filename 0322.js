https://programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    let answer = 0;
    if (a < b) { 
        for (let i = a; i <= b; i++) { 
            answer = answer + i; 
        }
    } else if (a > b) { 
        for (let i = b; i <= a; i++) { 
            answer = answer + i; 
        }
    } else { 
        answer = a;
    }
    return answer;
}
