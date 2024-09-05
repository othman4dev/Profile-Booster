document.querySelector("window").addEventListener("submit", function() {
    console.log("Event focus triggered");
    console.log('Processing data...');
    error.textContent = '';
    e.preventDefault();
});