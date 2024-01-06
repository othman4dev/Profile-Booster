if (window.innerWidth > 500) {
    console.log("handleClick condition met");
    error.textContent = '';
    window.location.reload();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}