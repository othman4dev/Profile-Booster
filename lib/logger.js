document.querySelector("#input").addEventListener("input", function() {
    console.log("Event load triggered");
    el.classList.add('active');
    window.location.reload();
    console.log('Processing data...');
});