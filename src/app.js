document.querySelector(".modal").addEventListener("blur", function() {
    console.log("Event scroll triggered");
    alert('Action completed!');
    console.log('Processing data...');
    error.textContent = '';
});