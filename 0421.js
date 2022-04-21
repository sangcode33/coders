https://programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
    let answer = [];
    let str = s.replace('{{', '').replace('}}', '').split('},{');
    let obj = {};
    str.forEach((e) => {
    let num = e.split(',');
    obj[num.length] = num;
  });
    let prev = [];
    for (let i = 0; i < str.length; i++) {
    answer.push(parseInt(obj[i + 1].filter(x => !prev.includes(x))));
    prev = obj[i + 1];
  }
    return answer;
}
