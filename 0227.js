https://programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) { 
  let answer = n;
  let cur = answer.toString(2).split('').filter(el => el === '1').length; 
    console.log('길이', cur)
  let next; 
    while (cur !== next) { 
        answer++; 
        console.log('결과는?', answer)
        next = answer.toString(2).split('').filter(el => el === '1').length; 
    }
    return answer;
}
