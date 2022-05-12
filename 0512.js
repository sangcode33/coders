https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
    let answer = [];
    for (let i = 1; i <= N; i++) { 
        let kan = stages.filter(x => x >= i).length;
        let ima = stages.filter(x => x === i).length; 
        answer.push([i, ima / kan]); 
    }
    answer.sort((a, b) => b[1] - a[1]);
    return answer.map(x => x[0]);
}
