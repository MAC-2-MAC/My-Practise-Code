function foo(a,b){
    if(typeof a=== 'number' && typeof b === 'number' && b > 0){
        return a/b;
    }
    throw "Only Numbers are allowed and divisor should be greater than 0 ";
}
try{
    console.log("Answer after dividing a by b will be",foo(20,30));
}catch(error){
    console.log(error);
}