https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += s[i];
            continue;
        }
        if (s[i].toUpperCase().charCodeAt() + n > 90) {
            answer += String.fromCharCode(s[i].charCodeAt() + n - 26);
        } else {
            answer += String.fromCharCode(s[i].charCodeAt() + n);
        }
    }
    return answer;
}
