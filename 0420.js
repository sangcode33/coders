https://programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
    let big = 1; 
    for (let i =2; i <= Math.min(n, m); i++) { 
        if (n % i === 0 && m % i === 0) { 
            big = i;
        }
    }
    let small = big * (n / big) * (m / big); 
    let answer = [big, small];
    return answer;
}
