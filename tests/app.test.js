if (value !== '') {
    console.log("checkStatus condition met");
    el.classList.add('active');
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}