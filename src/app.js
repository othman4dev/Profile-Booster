if (value !== '') {
    console.log("processInput condition met");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    return x * y;
} else {
    console.log("Condition not met");
}