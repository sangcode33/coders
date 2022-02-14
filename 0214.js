https://programmers.co.kr/learn/courses/30/lessons/12951

// 첫 시도 

function solution(s) {
    let answer = '';
    let arr = s.toLowerCase().split('')
    console.log(s.toLowerCase().split(''))
    for(let i in arr) {
        console.log('배열', arr)
        if (arr[0] !== null) { 
            arr[0] = arr[0].toUpperCase(); 
        console.log('완성', arr.join(''))
        return answer = arr.join('');
        }
    }
}

// 스플릿을 사용해서 첫번째 요소가 빈 값이 아니면 대문자를 주는 의도였다. 다음 공백이 있을 땐 처리하지 못한 로직

// 통과 

function solution(s){
  let answer = ''
  let arr = s.toLowerCase().split('')
  console.log(s.toLowerCase().split(''))
  for(let i in arr){
    console.log('배열', arr)
    if(arr[0] !== null) {
        arr[0] = arr[0].toUpperCase(); 
      if(arr[i-1] === ' '){
        arr[i] = arr[i].toUpperCase()
      }
    }
  }
  return answer = arr.join('')
}

// 기존 로직에 다음 공백이 있을때 처리할 수 있도록 예외사항을 추가
