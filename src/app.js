document.querySelector(".modal").addEventListener("change", function() {
    console.log("Event change triggered");
    error.textContent = '';
    e.preventDefault();
    window.location.reload();
});