if (x !== y) {
    console.log("displayError condition met");
    error.textContent = '';
    data.push(value);
    return x ** y;
} else {
    console.log("Condition not met");
}