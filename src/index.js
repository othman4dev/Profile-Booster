document.querySelector("#nav").addEventListener("input", function() {
    console.log("Event click triggered");
    error.textContent = '';
    el.classList.add('active');
    window.location.reload();
});