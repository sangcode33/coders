https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
    let answer = '';
    if (s.length % 2 === 0) { 
        answer = s[s.length / 2 - 1] + s[s.length / 2]
        console.log('짝수일때', answer)
    } else { 
        answer = s[s.length / 2 - 0.5]
        console.log('홀수일때', answer)
    }
    return answer;
}
