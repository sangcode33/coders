https://programmers.co.kr/learn/courses/30/lessons/42860?language=javascript

function solution(name) {
    let answer = 0;
    let minMove = name.length - 1;
    for (let i = 0; i < name.length; i++) {
        let up = name[i].charCodeAt(0) - 'A'.charCodeAt(0);
      // 아스키코드 변환 후 최소값 구하기 * 참고: https://hceaan.tistory.com/70
        let down = 'Z'.charCodeAt(0) - name[i].charCodeAt(0) + 1; 
        if (up > down) { 
            answer = answer + down; 
        } else { 
            answer = answer + up;
        }
        let right = i + 1;
        while(right < name.length && name[right] === 'A'){
            right++;  
        }
   
        let move = i + name.length - right + Math.min(i, name.length - right);
        console.log('최소', minMove)
        minMove = Math.min(minMove, move);
    }
    return answer = answer + minMove;
}
