const fibsRec = (num) => {
    let array = [0,1];
    const fibonacci = (num) => {
        if (num <= 2) return num;
        return fibonacci(num-1) + fibonacci(num-2);
    }
    for (let i = 1; i <num-1; i++) {
        array.push(fibonacci(i));
    }

    return array;
};

console.log(fibsRec(8));