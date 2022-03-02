https://programmers.co.kr/learn/courses/30/lessons/42861

// 문제풀이를 완료하지 못하여 작성된 코드를 분석했습니다 

function solution(n, costs) {
    let answer = 0;
    costs.sort((a, b)=> a[2] - b[2])
    let cycleTable = Array(n).fill(0).map((element, index) => index)
    while(!isOne(cycleTable)){
        let current = costs.shift()
        let one = current[0]
        let the_other = current[1]
        let cost = current[2]
        if(cycleTable[the_other] !== cycleTable[one]){
            cycleTable = changeCycleTableNumber(cycleTable, one, the_other)
            answer= answer + cost
        }
    }
    return answer;
}

function changeCycleTableNumber(cycleTable, one, the_other){
    let cycleTheOther = cycleTable[the_other]
    let cycleOne = cycleTable[one]
    for(let i = 0; i < cycleTable.length; i++){
        if(cycleTable[i] === cycleTheOther) cycleTable[i] = cycleOne
    }
    return cycleTable 
}
