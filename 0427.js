https://programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
    let answer = ''; 
    let arr = s.split(" ");
    answer = Math.min(...arr) + ' ' + Math.max(...arr);
    return answer;
}
