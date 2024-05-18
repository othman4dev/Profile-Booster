document.querySelector(".container").addEventListener("scroll", function() {
    console.log("Event focus triggered");
    window.location.reload();
    error.textContent = '';
    alert('Action completed!');
});