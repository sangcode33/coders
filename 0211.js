https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
    let answer = 0;
    for (let i = 0; i < 500; i++) { 
        if (num % 2 === 0 && num !== 1) { 
            num = num / 2; 
            console.log('카운트all', answer)
        } else if (num % 2 === 1 && num !== 1) { 
            num = num * 3 + 1;
            console.log('카운트all', answer)
        } else if (num === 1) { 
            return answer = i;
        }
    }
    return answer = -1;
}
