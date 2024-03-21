if (value !== '') {
    console.log("checkStatus condition met");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
} else {
    console.log("Condition not met");
}