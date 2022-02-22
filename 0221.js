https://programmers.co.kr/learn/courses/30/lessons/12913

function solution(land) {
  let answer = [];
  for (let i = 1; i < land.length; i++) {
    land[i][0] = land[i][0] +  Math.max(
      land[i - 1][1], land[i - 1][2], land[i - 1][3]
    );
    land[i][1] = land[i][1] + Math.max(
      land[i - 1][0], land[i - 1][2], land[i - 1][3]
    );
    land[i][2] = land[i][2] + Math.max(
      land[i - 1][0], land[i - 1][1], land[i - 1][3]
    );
    land[i][3] = land[i][3] + Math.max(
      land[i - 1][0],land[i - 1][1], land[i - 1][2]
    );
  }
  answer = land[land.length - 1];
  return Math.max(...answer);
}