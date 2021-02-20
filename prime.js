function isPrime(n){
    if (n < 2) return false;
    for (let i = 2; i <= Math.round (n ** 0.5); i++){
        if (n % i === 0)return false;
    }return true;
}

function nextPrime(n){
    n = n + 1
    while (!isPrime(n)){
        n = n + 1
    } return n
}
//https://www.codewars.com/kata/58e230e5e24dde0996000070