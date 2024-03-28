if (x !== y) {
    console.log("submitForm condition met");
    e.preventDefault();
    return x % y;
    error.textContent = '';
} else {
    console.log("Condition not met");
}