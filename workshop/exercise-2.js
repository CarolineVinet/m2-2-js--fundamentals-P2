// Q2
// Write a function that accepts two integers and displays
// the greater one.

// Define the function
function max(num1, num2) {
    if (num1 > num2){
        console.log (num1);
        return num1;
    }
    else if (num2 > num1){
        console.log (num2) ;
        return num2;
    }
}

max(12, 43);
