if (document.readyState === 'complete') {
    console.log("toggleMenu condition met");
    console.log('Processing data...');
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}