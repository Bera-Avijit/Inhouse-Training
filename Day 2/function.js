function show(num){
    console.log("Hello : " + num);
}

show("Rahul")


// Arrow Function
const showArrow = (num) => {
    console.log("Hello : " + num);
}

showArrow("Avijit");



// Types of functions : 

let n = [1,2,3,4,5];

n.forEach((num) => {
    console.log(num * 2);
});

let sq = n.map((num) => {
    return num * num;
})
console.log(sq);

let fil = n.filter((num) => {
    return num % 2 == 0;
})
console.log(fil);

let sum = n.reduce((total,sum) =>{
    return total + sum;
},0)
console.log(sum);


// One-line code
console.log("One Line code :");
n.forEach(n => console.log(n));
n.map(n => n * 2);
n.filter(n => n % 2 != 0);
n.reduce((total,sum) => total + sum,0);

