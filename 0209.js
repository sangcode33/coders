https://programmers.co.kr/learn/courses/30/lessons/68644

const solution = (numbers) => {
  let answer = [];

  for(let i = 0; i < numbers.length - 1; i++){
    for(let j = i + 1; j < numbers.length; j++){
      const sum = numbers[i] + numbers[j];
      if(!answer.includes(sum)){
        answer.push(sum);
          console.log("이거는?", answer)
      }
    }
  }
    console.log('정렬값', answer.sort((a, b) => a - b))
  return answer.sort((a, b) => a - b);
}
