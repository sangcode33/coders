https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(s){
    let answer = true; 
    let str = s.toUpperCase(); 
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (str[i] === "P") { 
            cnt++;
        }
        else if (str[i] === "Y") { 
            cnt--;
        }
    }
    answer = cnt === 0; 
    return answer;
}
