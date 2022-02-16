https://programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
    let arr = skill.split('');
    let answer = 0;
    for(let i in skill_trees){
        console.log('str', skill_trees[i].split('').filter(el => arr.includes(el)).join(''))
        let str = skill_trees[i].split('').filter(el => arr.includes(el)).join('');
        console.log('결과는?', skill.substring(0, str.length))
        if(str === skill.substring(0,str.length)){
            answer++;
        }
    }
    return answer; 
}
