https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n)
{
    let answer = 0;
    let str = String(n); 
    for (let i in str) { 
        answer = answer + parseInt(str[i]); 
    }
    return answer;
}
