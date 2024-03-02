document.querySelector("#input").addEventListener("mouseout", function() {
    console.log("Event submit triggered");
    e.preventDefault();
    window.location.reload();
    el.classList.add('active');
});