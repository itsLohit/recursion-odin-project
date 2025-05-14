const fibs = (num) => {
    let array = [0,1];
    let prev2 = 0;
    let prev1 = 1;
    
    for(let i=2; i<num; i++){
        let nextNum = prev1 + prev2;
        prev2 = prev1;
        prev1 = nextNum;
        array.push(nextNum);
    }

    return array;
}

console.log(fibs(8));