https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
    let answer = 0;
    for (let i in a) {
      console.log('이거는?', a[i])
      console.log('비는?', b[i])
        answer += a[i] * b[i]
    }
    return answer;
}
