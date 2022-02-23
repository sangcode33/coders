https://programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
    let noncha = maps.length
    let cha = maps[0].length
    let queue = [[0,0]]; 
    let cnt = 1;
    while(queue.length > 0) {
        for(let i = 0; i < queue.length; i++) {
            let [row, col] = queue.shift();
            console.log('이거는?', [row, col])
            if(row === noncha - 1 && col === cha - 1) { 
                return cnt; 
            }
            if(row + 1 < noncha && maps[row + 1][col] === 1) {
                queue.push([row + 1, col])
                maps[row + 1][col] = 0
            }
            if(row - 1 >= 0 && maps[row - 1][col] === 1) {
                queue.push([row - 1, col])
                maps[row - 1][col] = 0
            }
            if(col + 1 < cha && maps[row][col + 1] === 1) {
                queue.push([row, col + 1])
                maps[row][col + 1] = 0
            }
            if(col - 1 >= 0 && maps[row][col - 1] === 1) {
                queue.push([row, col - 1])
                maps[row][col - 1] = 0
            }
        }
        cnt++
    }
    return -1;
}
