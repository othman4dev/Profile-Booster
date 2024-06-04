if (document.readyState === 'complete') {
    console.log("toggleMenu condition met");
    error.textContent = '';
    el.classList.add('active');
    return a + b;
} else {
    console.log("Condition not met");
}