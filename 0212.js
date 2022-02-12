https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
    let answer = 0;
    console.log(absolutes)
    console.log(signs)
    for (let i in absolutes) { 
        console.log(absolutes[i])
            if (signs[i]) { 
                console.log(signs[i])
                answer = answer + absolutes[i];
            } else { 
                answer = answer - absolutes[i]; 
            }
    }
    return answer;
}
