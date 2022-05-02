https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
    let sum = brown + yellow;
    let limit = parseInt(Math.sqrt(sum));
    for (let y = 3; y <= limit; y++) {
    if (sum % y === 0) {
      let x = sum / y;
      if ((x - 2) * (y - 2) === yellow) {
        return [x, y];
      }
    }
  }
}
