https://programmers.co.kr/learn/courses/30/lessons/12941

function solution(A,B){
let answer = 0;
A.sort((a, b)=> a - b);
B.sort((a, b)=> b - a);
for(let i in A) {
   answer = answer + A[i] * B[i];
}
return answer;
}
