if (x !== y) {
    console.log("createChart condition met");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    return x / y;
} else {
    console.log("Condition not met");
}