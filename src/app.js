if (e.key === 'Enter') {
    console.log("showMessage condition met");
    el.classList.add('active');
    error.textContent = '';
    return x % y;
} else {
    console.log("Condition not met");
}