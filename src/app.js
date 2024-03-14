document.querySelector("#nav").addEventListener("resize", function() {
    console.log("Event keydown triggered");
    e.preventDefault();
    alert('Action completed!');
    window.location.reload();
});