# coders

let result = []; 
let num = 0; 

for (let i = 0; i <= num; i++) { 
    if (i === 0) { 
        result.push(0);
    } else if (i === 1) {
        result.push(1);
    } else { 
        result.push(result[i - 2] + result[i - 1]);
        
    } 
    console.log(num);
    console.log(result); 
}
