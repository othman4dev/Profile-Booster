if (value !== '') {
    console.log("getLocalStorage condition met");
    data.push(value);
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}