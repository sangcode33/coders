https://programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    let answer = s;
    let replace = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (let i = 0; i < replace.length; i++) {
        let arr = answer.split(replace[i]);
        answer = arr.join(i);
    }
    return Number(answer);
}
