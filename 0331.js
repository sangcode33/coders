https://programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
    let arr =[];
    for(let i = 0; i <= n; i++){
        arr.push(true);
    }
    arr[0] = false;
    arr[1] = false;
    for(let i = 2; i <= n; i++){
        if (arr[i]) {
            for(let j = 2; j <= n / i; j++){
                arr[i * j] = false;
            }
        }
    }
    return arr.filter(el => el === true).length;
}
