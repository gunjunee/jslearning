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
/*const add = (x,y) => console.log(x +y);
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

calc(7,6);*/



//ARRAY
//expenses
/*let expenses = ["rent", "food", "medical", "clothes", "tution", "transportation", 
                "insurance", "electricity bill", "water bill", "internet bill"];
                
expenses.pop();
expenses.push("books");
expenses.shift();
expenses.unshift("internet bill");

let cut = expenses.slice(-3);
console.log(cut);
console.log(expenses);

let reversedList = expenses.reverse();
console.log(reversedList);*/

// let reverseTheArray = (arr) => {
//     //let expense = ["rent", "food", "medical", "clothes"];
//     let reversedArr = [];
//     for(let i=arr.length-1; i>=0; i--){
//         reversedArr.push(arr[i]);
//     }
//     return reversedArr;
// }
// const reversedArr = reverseTheArray(["rent", "food", "medical", "clothes", "Goods"]);
// console.log(reversedArr);




// Array methods (map, reduce, filter)
// let expenses = [
//   {name: "Food", price: 1200},
//   {name: "Medical", price: 300},
//   {name: "InternetBill", price: 800}
// ];

// let expensiveOne = expenses.filter(moreThan = (value) => value>500);
// let afterTax = expenses.map(tax = (value) => value*1.1);
// let totalExpense = expenses.reduce(total = (sum=0, value) => sum+value);
// console.log(totalExpense);




// //Objects and JSON
// let expenses = {
//     id : 101,
//     category : 'health',
//     amount : 200,
//     date : '2/4/2025'
// }

// let newExpenses = JSON.parse(JSON.stringify(expenses));
// console.log(newExpenses);







const form = document.getElementById("expense-form");
const list = document.getElementById("expense-list");
const loadBtn = document.getElementById("load-btn");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];


form.addEventListener("submit", function (e) {
  e.preventDefault();

  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;
  const date = document.getElementById("date").value;

  const expense = {
    id: Date.now(),
    amount,
    category,
    date
  };

  expenses.push(expense);
  saveAndRender();

  form.reset();
});


function renderExpenses() {
  list.innerHTML = "";

  expenses.forEach(exp => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div>
        ₹${exp.amount} - ${exp.category}<br>
        <small>${new Date(exp.date).toLocaleDateString()}</small>
      </div>
      <button class="delete-btn" onclick="deleteExpense(${exp.id})">X</button>
    `;

    list.appendChild(li);
  });
}


function deleteExpense(id) {
  expenses = expenses.filter(exp => exp.id !== id);
  saveAndRender();
}


function saveAndRender() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenses();
}


function fetchMockData() {
  loadBtn.innerText = "Loading...";
  
  setTimeout(() => {
    const mockData = [
      { id: Date.now()+1, amount: 200, category: "Food", date: "2026-04-08" },
      { id: Date.now()+2, amount: 500, category: "Shopping", date: "2026-04-09" }
    ];

    expenses = [...expenses, ...mockData];
    saveAndRender();

    loadBtn.innerText = "Load Sample Data (API)";
  }, 2000);
}

loadBtn.addEventListener("click", fetchMockData);


renderExpenses();