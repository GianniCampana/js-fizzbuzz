

for(var i = 1; i <= 100; i++ ){
    
    if(i % 3 == 0 && i % 5 == 0){
        console.log("il valore di i è FizzBuzz" );
    }else if(i % 3 == 0){
        console.log("il valore di i è Fizz");
    }else if(i % 5 == 0){
        console.log("il valore di i è Buzz");
    }else if(i % 3 !== 0 && i % 5 !== 0){
        console.log("il valore di i è " + i)
    }
    
}








