if (e.key === 'Enter') {
    console.log("validateInput condition met");
    el.classList.add('active');
    error.textContent = '';
    window.location.reload();
} else {
    console.log("Condition not met");
}