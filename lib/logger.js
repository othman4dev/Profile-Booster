if (x === y) {
    console.log("setCookie condition met");
    error.textContent = '';
    data.push(value);
    el.classList.add('active');
} else {
    console.log("Condition not met");
}