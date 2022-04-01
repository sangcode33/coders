https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
    let answer = [];
    for (let i in arr) { 
        if (arr[i] % divisor === 0) { 
            answer.push(arr[i]);
        }
    }
    if (answer.length === 0) { 
        answer.push(-1); 
    }
    answer.sort((a, b) => a - b)
    return answer;
}
