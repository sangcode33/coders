https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
    var answer = [[]];
    for (let i in arr1) {
        answer[i] =[];
        for (let j in arr1[i]){
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return answer;
}
