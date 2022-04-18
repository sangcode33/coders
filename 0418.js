https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    let answer = String(x).split('');
    let result = 0;
    for (var i = 0; i < answer.length; i++){
        result = result + Number(answer[i]);
    }
    if (x % result === 0) {
        return true;
    } else {
        return false;
    }
}
