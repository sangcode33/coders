https://programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
    let answer = '';
    let day = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
    let month =[31,29,31,30,31,30,31,31,30,31,30,31];
    let cnt = 0;
    for (let i = 0; i < a - 1; i++){
        cnt = cnt + month[i];
    }
    cnt = cnt + b;
    answer = day[cnt % 7];
    return answer;
}
