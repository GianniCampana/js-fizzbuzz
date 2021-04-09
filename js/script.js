var numeri_casuali = Math.floor(Math.random() * 100) + 1;
document.getElementById("numeri").innerHTML = "Il numero estratto è " + numeri_casuali;

if(numeri_casuali % 3 == 0){
    document.getElementById("numeri").innerHTML = "Il numero estratto è " + "Fizz";
}else if(numeri_casuali % 5 == 0){
    document.getElementById("numeri").innerHTML = "Il numero estratto è " + "Buzz";
}else if(numeri_casuali % 3 == 0 && numeri_casuali % 5 == 0 ){
    document.getElementById("numeri").innerHTML = "Il numero estratto è " + "FizzBuzz";

}