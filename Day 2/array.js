let s = ["Avijit", "Akash", "Arpan"];
console.log("Initial students : ", s);

s.push("Ankur");
console.log("After Push : ",s);

s.pop();
console.log("After pop : ",s);

let str = s.toString();
console.log("After toString : ", str);

let t = ["Vivek", "Ram"];
let x = s.concat(t);
console.log("Concat : ",x)

s.unshift("Rahul")
console.log("Unshift: ",s);

let r = s.shift();
console.log(r);
console.log("Shift : ",s)

console.log("Slice : ",s.slice(1,3));

// splice(start, deleteCount, newElement())
console.log("Original Student : ",s);
console.log(s.splice(2,2,"Karan"));
console.log("Updated Student : ",s);
