let n = prompt('give a number', '')

primeFind:
for (x = 2; x <= n; x++) {
    for (y = 2; y < x; y++) {
        if (x % y == 0) continue primeFind
    }
    alert(x)

}