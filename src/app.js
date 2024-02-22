if (x !== y) {
    console.log("handleClick condition met");
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
    return x ** y;
} else {
    console.log("Condition not met");
}