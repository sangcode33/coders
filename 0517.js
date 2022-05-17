https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
    let answer = [];
    for (let i = 0; i < n; i++) { 
        let temp = arr1[i].toString(2);
        let temp1 = arr2[i].toString(2); 
        temp = '0'.repeat(n - temp.length) + temp; 
        temp1 = '0'.repeat(n - temp1.length) + temp1;
        let result = ''; 
        for (let j = 0; j < n; j++) { 
            if (temp[j] == 1 || temp1[j] == 1) { 
                result = result + '#'; 
            } else { 
                result = result + ' ';
            }
        }
        answer.push(result);
    }
    return answer;
}
