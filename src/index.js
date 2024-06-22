if (window.innerWidth > 500) {
    console.log("removeItem condition met");
    e.preventDefault();
    console.log('Processing data...');
    window.location.reload();
} else {
    console.log("Condition not met");
}