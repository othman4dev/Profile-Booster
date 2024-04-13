document.querySelector(".container").addEventListener("keydown", function() {
    console.log("Event keydown triggered");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
});