function cubeNumber(number) {
    
    if (typeof number === 'number') {
        return Math.pow(number, 3);
    } 
    else{
        return "wrong input";
    }
}
console.log(cubeNumber(3));


