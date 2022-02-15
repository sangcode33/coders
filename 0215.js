https://programmers.co.kr/learn/courses/30/lessons/12949

// arr1 행과 arr2 열을 곱해서 더하기  

function solution(arr1, arr2) {
    let answer = [[]];
    for(let i = 0; i < arr1.length;i++) {
        answer[i] = [];
        for(let j = 0; j < arr2[0].length;j++){
            let sum = 0;
            for(let k = 0; k < arr2.length; k++){
                sum += arr1[i][k] * arr2[k][j]
                console.log('첫번째', arr1[i][k])
                console.log('두번째', arr2[k][j])
                console.log('합계', sum)
            }
            answer[i].push(sum)
            console.log('answer', answer)
        }
    }
    return answer;
}
