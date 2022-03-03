https://programmers.co.kr/learn/courses/30/lessons/42884

function solution(routes) {
    let answer = 0;
    let distance = -30001;
    routes.sort((a, b) => a[1] - b[1]);
    console.log('정렬', routes)
    routes.map((el) => {
        if(el[0] > distance) {
            answer ++;
            distance = el[1];
        }
    })
    return answer;
}
