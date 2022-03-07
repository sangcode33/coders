https://programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
    let acc = 0; 
    for (let i = 1; i <= count; i++) { 
    acc = acc + price * i; 
        console.log('누적금액', acc)
    }
    let answer = acc - money; 
    if (answer < 0) { 
    return 0;
    }
    return answer; 
}
