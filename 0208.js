https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
    let answer = participant;
    completion.forEach((el, idx) => {
        console.log('완주자', el)
        console.log('완주자 인덱스', answer.indexOf(el))
        delete answer[answer.indexOf(el)]
    })
    console.log('결과', answer.filter(el=>el).toString())
    return answer.filter(el => el).toString();
}
