document.querySelector(".footer").addEventListener("blur", function() {
    console.log("Event mouseout triggered");
    e.preventDefault();
    el.classList.add('active');
    window.location.reload();
});