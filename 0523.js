https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
    let answer = '';
    let len = numbers.length;
    let keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        "*": [3, 0], 0: [3, 1], "#": [3, 2]
    };
    let getLen = (key1, key2) => Math.abs(key1[0] - key2[0]) + Math.abs(key1[1] - key2[1]);
    let curLeft = keypad["*"];
    let curRight = keypad["#"];
    for (let i = 0; i < len; i++) {
        if (numbers[i] % 3 === 1) {
            answer = answer + "L";
            curLeft = keypad[numbers[i]];
        } else if (numbers[i] !== 0 && numbers[i] % 3 === 0) {
            answer = answer +"R";
            curRight = keypad[numbers[i]];
        } else {
            let leftLen = getLen(curLeft, keypad[numbers[i]]);
            let rightLen = getLen(curRight, keypad[numbers[i]]);
            if (leftLen === rightLen) {
                if (hand === "left") {
                    answer = answer + "L";
                    curLeft = keypad[numbers[i]];
                } else {
                    answer = answer + "R";
                    curRight = keypad[numbers[i]];
                }
            } else if (leftLen > rightLen) {
                answer = answer + "R";
                curRight = keypad[numbers[i]];
            } else {
                answer = answer + "L";
                curLeft = keypad[numbers[i]];
            }
        }
    }
    return answer;
}
