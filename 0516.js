https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    let answer = 0;
    let arr = []; 
    for (let i of nums) { 
        if (!arr.includes(i)) { 
            arr.push(i);
            answer++;
        }
        if (arr.length >= nums.length / 2) { 
            break; 
        }
    }
    return answer;
}
