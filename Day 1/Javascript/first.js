// alert("HIT")

// Comparison operators in JS

/*
let a = 10
let b = "10"
console.log(a + b)
if(a===b){
    console.log("a===b", a === b);
}
else{
    console.log("a==b", a == b);
}
*/

// Truthy and Falsy values in JS
// Falsy values : 0, "", null, undefined, NaN, false
// Truthy values : All values other than falsy values

/*
if(-1){
    console.log("jsqd")
}
else{
    console.log("not jsqd")
}
*/

// Grade problem

/*
let m = parseInt(prompt("Enter marks : "));
console.log("Grade : ");
if(m>91 && m<100){
    console.log("A++")
}
else if(m>81 && m<91){
    console.log("A+")
}
else if(m>71 && m<81){
    console.log("A")
}
else if(m>61 && m<71){
    console.log("B")
}
else{
    console.log("FAIL")
}
*/

// Sum of digits of a number

/*
let n = prompt("Enter number : ");
let i,r;
let l = n.length;
let sum = 0;
for(i=0;i<l;i++){
    r = n%10;
    sum+=r;
    // n = parseInt(n/10);
    n = n/10;
}
console.log(sum);
console.log(Math.floor(sum));
console.log(parseInt(sum));
console.log(`Sum : ${parseInt(sum)}`);
*/

// Input : "avijit kumar bera"
// Output : A.K.Bera

/*
let s = "avijit kumar bera"
let x = s.split(" ");
let res = "";
for(let i = 0; i<x.length-1; i++){
    res += x[i].charAt(0).toUpperCase();
    res+=".";
}
console.log(res + x[x.length-1].charAt(0).toUpperCase().concat(x[x.length-1].slice(1)));
*/
