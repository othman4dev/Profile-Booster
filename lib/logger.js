if (e.key === 'Enter') {
    console.log("validateInput condition met");
    e.preventDefault();
    return x * y;
    error.textContent = '';
} else {
    console.log("Condition not met");
}