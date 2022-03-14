https://programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
    let answer = 0;
    for (let i in arr) {
        answer = answer + arr[i];
    }
    return answer / arr.length;
}
