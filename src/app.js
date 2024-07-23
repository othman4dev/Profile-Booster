if (x !== y) {
    console.log("processInput condition met");
    error.textContent = '';
    alert('Action completed!');
    return x / y;
} else {
    console.log("Condition not met");
}