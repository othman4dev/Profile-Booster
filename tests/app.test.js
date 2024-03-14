document.querySelector("#button").addEventListener("blur", function() {
    console.log("Event keydown triggered");
    el.classList.add('active');
    console.log('Processing data...');
    error.textContent = '';
});