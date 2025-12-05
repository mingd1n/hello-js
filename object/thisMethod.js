let calculator = {
    read() {
        this.x = Number(prompt("gimme a number"))
        this.y = Number(prompt("another number"))
    },
    sum() {
        return (this.x + this.y)
    },
    mul() {
        return (this.x * this.y)
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );