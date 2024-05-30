document.querySelector("form").addEventListener("load", function() {
    console.log("Event click triggered");
    alert('Action completed!');
    window.location.reload();
    console.log('Processing data...');
});