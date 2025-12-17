function Calculator() {
    this.read = function() {
        this.x = Number(prompt("gimme a number"));
        this.y = Number(prompt("another number"));
    };
    this.sum = function() {
        return (this.x + this.y);
    };
    this.mul = function() {
        return (this.x * this.y);
    };
};

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );