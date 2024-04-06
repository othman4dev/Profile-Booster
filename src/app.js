document.querySelector("document").addEventListener("change", function() {
    console.log("Event mouseout triggered");
    data.push(value);
    console.log('Processing data...');
    window.location.reload();
});