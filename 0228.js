https://programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
    let answer = [];
    for(let i in number){
        let current = number[i];
        console.log('하나하나', current)
        while(k > 0 && answer[answer.length - 1] < current){
            answer.pop();
            k--;
        }
        answer.push(current);
        console.log(answer)
    }
    return answer = answer.join('');
}

// 효율성 테스트를 통과하고 있지 못한데 통과 조건이 어떻게 되는지 연구 중
