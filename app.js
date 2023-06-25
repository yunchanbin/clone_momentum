const calculator = {
    add:function(a, b){
        return a + b;
    },
    minus:function(a, b){
        return a - b;
    },
    times:function(a,b){
        return a * b;
    },
    divide:function(a, b){
        return a / b;
    },
    power:function(a, b){
        return a ** b;
    }
}


const plusResult = calculator.add(2, 4);
calculator.minus(2, 4);
calculator.times(2, 4);
calculator.divide(2, 4);
calculator.power(2, 4);


console.log(plusResult);