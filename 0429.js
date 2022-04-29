https://programmers.co.kr/learn/courses/30/lessons/62048

function solution(w, h) {
    let value = gcd(w,h);
    return w * h - (w + h - value);
}

function gcd(w,h) {
    let mod = w % h;
    if (mod === 0) { 
        return h;
    }
    return gcd(h, mod);
}
