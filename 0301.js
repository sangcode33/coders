https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  let answer = 0; 
  let sorted = people.sort((a, b) => a - b); 
  while (sorted.length > 0) { 
    if ((sorted[0] + sorted[sorted.length - 1] <= limit)) {
      sorted.shift(); 
      sorted.pop();
      answer++;
    }
    else { 
      sorted.pop();
      answer++;
    }
  }
  return answer; 
}
