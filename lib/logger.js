document.querySelector(".container").addEventListener("keydown", function() {
    console.log("Event blur triggered");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    error.textContent = '';
});