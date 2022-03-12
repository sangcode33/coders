https://programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {
    const visited = new Array(dungeons.length).fill(false);
    console.log(visited)
    let cnt = 0;
    const dfs = (k, curCnt) => {
        cnt = Math.max(curCnt, cnt);
        console.log(cnt)
        for(let i = 0; i < dungeons.length; i++) {
            const [minK, useK] = dungeons[i];          
            if(k >= minK && !visited[i]) {
                visited[i] = true;
                dfs(k - useK, curCnt + 1);
                visited[i] = false;
            }
        }
    }
    dfs(k, 0);
    return cnt;
}
