let x = 5
let operator = "add"
let y = 3
const calculator = (x, operator, y) =>{
    if (operator === "add"){
        return (x + y)
    } else if (operator === "subtract"){
        return(x - y)
} else if (operator === "multiply") {
    return(x * y)
}  else if (operator === "divide"){
    if (y == 0){
        return "ERROR! Cannot divide by zero.";
    } else {
        return(x / y)
    }
} else {
    return("Invalid operation.")
}

}
console.log(calculator(5,"add", 5));
console.log(calculator(12, "subtract", 4)); 
console.log(calculator(5, "multiply", 7 ));
console.log(calculator(9, "divide", 3))
console.log(calculator(4, "divide", 0))
