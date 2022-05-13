https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
    let answer = [6, 6, 5, 4, 3, 2, 1];
    let min = lottos.filter(el => win_nums.includes(el)).length;
    let zero = lottos.filter(el => el === 0).length;
    let max = min + zero; 
    return [answer[max], answer[min]];
}
