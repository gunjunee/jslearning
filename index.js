//FUNCTION
//calculator(add,subtract)
/*function add(x,y){
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

even_or_odd(6);*/



//ARROW FUNCTION
//calculator(add,subtract)
const add = (x,y) => console.log(x +y);
add(3,4);

const subs = (x,y) => console.log(x - y);
subs(8,6);


//greeting user 
const greet = (name) => console.log("hello " + name);
greet("Gunjan");


//max number
const maxnum = (x,y,z) => {
    if(x>y && x>z){
        console.log(x);
    }
    else if(y>x && y>z){
        console.log(y);
    }
    else{
        console.log(z);
    }
}
maxnum(88,56,90);


//even/odd number
const even_odd = (x) => {
    if(x%2==0){
        console.log("even number");
    }
    else{
        console.log("odd number");
    }
}
even_odd(3);


//temperature
const temp = (x) => console.log((x*9/5)+32);
temp(0);


//function in function
const calc = (x,y) => {
    const add = (x,y) => console.log(x +y);
    add(88,12);

    const subs = (x,y) => console.log(x - y);
    subs(80,40);

    const mult = (x,y) => console.log(x * y);
    mult(5,5);    
}

calc(7,6);
