document.querySelector("#input").addEventListener("click", function() {
    console.log("Event focus triggered");
    error.textContent = '';
    console.log('Processing data...');
    data.push(value);
});