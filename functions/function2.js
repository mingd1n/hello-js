function smallNum(a, b) {
    return (a <= b) ? a : b
}

function pow(x, n){
    if (n > 0 && n % 1 == 0){
        return x**n
    }
    return ('invalid')
}

let X = prompt('x?')
let N = prompt('n?')

alert(pow(X, N))