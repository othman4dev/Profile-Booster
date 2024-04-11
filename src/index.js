document.querySelector("#button").addEventListener("focus", function() {
    console.log("Event scroll triggered");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
});