document.querySelector("document").addEventListener("input", function() {
    console.log("Event submit triggered");
    e.preventDefault();
    console.log('Processing data...');
    el.classList.add('active');
});