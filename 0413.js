https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    let arr = String(n).split(''); 
    let result = arr.sort((a, b) => b - a).join(''); 
    let answer = parseInt(result);
    return answer;
}
