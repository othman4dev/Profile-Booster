document.querySelector("header").addEventListener("focus", function() {
    console.log("Event focus triggered");
    el.classList.add('active');
    console.log('Processing data...');
    error.textContent = '';
});