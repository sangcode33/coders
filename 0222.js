https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
    let answer = '';
    numbers.sort((a, b) => `${b}${a}` - `${a}${b}`);
    numbers.forEach(el => { 
        answer = `${answer}${el}`
        console.log('반복은?', answer)
    })
    if (answer[0] === '0') { 
        return '0';
    }
    return answer;
}
