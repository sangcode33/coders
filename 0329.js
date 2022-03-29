https://programmers.co.kr/learn/courses/30/lessons/12930

/// 실패한 코드 
function solution(s) {
    let answer = '';
    let arr = s.split(''); 
    for (let i in arr) { 
        for (let j in arr[i]) { 
            if (j % 2 !== 0) {
                answer = answer + arr[i][j].toLowerCase(); 
            } else { 
                answer = answer + arr[i][j].toUpperCase(); 
            }
        }
        answer = answer + "";
    }
    return answer;
}

/// 실패한 이유 
입력값 〉	"try hello world"
기댓값 〉	"TrY HeLlO WoRlD"
실행 결과 〉	실행한 결괏값 "TRY HELLO WORLD"이(가) 기댓값 "TrY HeLlO WoRlD"와(과) 다릅니다.
