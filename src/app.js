if (document.readyState === 'complete') {
    console.log("loadData condition met");
    console.log('Processing data...');
    data.push(value);
    return x * y;
} else {
    console.log("Condition not met");
}