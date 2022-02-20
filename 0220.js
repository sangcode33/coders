https://programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
    console.log('로케이션', location)
    let target = location;
    let count = 0;
    while (priorities.length) {
        let important = priorities.shift();
        console.log('임포턴트', important)
        if (priorities.some((el) => {
            return el > important
        })) {
            priorities.push(important);
        } else {
            count++;
            if (target === 0) {
                return count;
            }
        }
        if (target === 0) {
            target = priorities.length - 1;
        } else {
            target--;
        }
    }
}
