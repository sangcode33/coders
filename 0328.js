https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
    let answer = true;
    if (s.length !== 4 && s.length !== 6) { 
        return false; 
    }
    for (let i in s) { 
        if (isNaN(s[i])) { 
            return false;
        }
    }
    return answer;
}
