https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript#

function solution(n, lost, reserve) {
    let answer = 0;
    let student = [];
    for (let i = 0; i < n; i++) {
        student[i] = 1;
        console.log('모두', student)
    }
    for (let i in lost) {    
        student[lost[i]-1] = 0;
        console.log('도난', student)
    }
    for (let i in reserve) {
        student[reserve[i]-1] = student[reserve[i]-1] + 1;
         console.log('예비', student)
    }
    for (let i = 0; i < n; i++) {
        if (student[i-1] === 2 && student[i] === 0) {
            student[i] = 1;
            student[i-1] = 1;
            console.log('앞', student)
        } else if (student[i] === 0 && student[i+1] === 2) {
            student[i] = 1;
            student[i+1] = 1;
            console.log('뒤', student)
        }
    }
    for (let i = 0; i < n; i++) {
        if (student[i] > 0) {
            answer++;
            console.log('파이날', student)
        }
    }
    return answer;
}
