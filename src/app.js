document.querySelector(".container").addEventListener("submit", function() {
    console.log("Event scroll triggered");
    e.preventDefault();
    el.classList.add('active');
    window.location.reload();
});