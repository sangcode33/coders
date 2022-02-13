https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
    let answer = 0;
    console.log('레프트 라이트', left, right)
    for (let i = left; i <= right; i++) { 
        let cnt = 0; 
        for (let j = 0; j <= i; j++) { 
            if (i % j === 0) { 
                cnt++;
                console.log('약수 개수', cnt)
            }
        } 
        if (cnt % 2 === 0) { 
            answer = answer + i; 
            console.log('수', i)
            console.log('더하기', answer)
        } else { 
            answer = answer - i; 
            console.log('수', i)
            console.log('빼기', answer)
        }
    }
    return answer;
}
