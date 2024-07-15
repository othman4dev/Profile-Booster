document.querySelector("#nav").addEventListener("input", function() {
    console.log("Event blur triggered");
    window.location.reload();
    el.classList.add('active');
    error.textContent = '';
});