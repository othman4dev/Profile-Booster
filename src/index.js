if (x !== y) {
    console.log("loadData condition met");
    window.location.reload();
    console.log('Processing data...');
    return x ** y;
} else {
    console.log("Condition not met");
}