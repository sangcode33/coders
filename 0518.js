https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
    let answer = 0;
    let arr = [];
    for (let i of moves) {
        for (let j = 0; j < board[i - 1].length; j++) {
            if (board[j][i - 1] !== 0) {
                if (arr.length !== 0 && arr[arr.length - 1] === board[j][i - 1]) {
                    arr.pop();
                    answer = answer + 2;
                }
                else {
	                arr.push(board[j][i - 1]);
                }
               board[j][i - 1] = 0;
               break;
            }
        }
    }
    return answer;
}
