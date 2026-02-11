//fuction
//calculator(add,subtract)
function add(x,y){
    console.log (x + y);
}
add(6,7);


function sub(a,b){
    console.log(a - b);
}
sub(5,3);

//greeting user
//let greeting;
function greeting(username){
    console.log("hello",username);
}
greeting("Gunjan");


//max value
function maxvalue(a,b,c){
    if (a > b && a > c) 
        {
        console.log(a);
    } 
    else if (b > a && b > c) 
        {
        console.log(b);
   } 
    else 
        {
        console.log(c);
    }
}
maxvalue(5,8,3);


//even or odd
function even_or_odd(numbr){
    if (numbr % 2 === 0) {
        console.log(numbr + " is even number");
    }
    else {
        console.log(numbr + " is odd number");
    }
}

even_or_odd(6);

