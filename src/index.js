document.querySelector(".container").addEventListener("scroll", function() {
    console.log("Event change triggered");
    console.log('Processing data...');
    window.location.reload();
    alert('Action completed!');
});