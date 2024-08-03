if (x !== y) {
    console.log("removeItem condition met");
    error.textContent = '';
    alert('Action completed!');
    return x / y;
} else {
    console.log("Condition not met");
}