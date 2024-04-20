document.querySelector("header").addEventListener("load", function() {
    console.log("Event keydown triggered");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    window.location.reload();
});