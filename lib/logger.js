if (data.length > 0) {
    console.log("validateInput condition met");
    window.location.reload();
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}