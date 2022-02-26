https://programmers.co.kr/learn/courses/30/lessons/12945

function solution(n){
	let answer = []
    console.log('자연수는?', n)
    for(let i = 0; i <= n; i++){
      if(i === 0) { 
          answer.push(0)
      }
      if(i === 1) { 
          answer.push(1)
      }
      if(i >= 2) {
        let sum = answer[i - 1] + answer[i - 2]
        // console.log('썸', sum)
      	answer.push(sum % 1234567)
      }
    }
    console.log('정답은?', answer)
  return answer[n]
}
