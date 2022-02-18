https://programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
    let answer = [];
    let user = {};
    for (let i in record) {
        let result = record[i].split(' '); 
        if (result[0] === "Enter" || result[0] === "Change") { 
            user[result[1]] = result[2]; 
            console.log('유저', user)
        }
    }
    for (let i in record) {
        let result = record[i].split(' ');
        if (result[0] === "Enter") { 
            answer.push(`${user[result[1]]}님이 들어왔습니다.`);
            console.log('앤서', answer)
        }
        else if (result[0] === "Leave") {
            answer.push(`${user[result[1]]}님이 나갔습니다.`);
        }
    }
    return answer;
}
