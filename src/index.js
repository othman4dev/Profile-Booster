document.querySelector(".modal").addEventListener("resize", function() {
    console.log("Event input triggered");
    el.classList.add('active');
    alert('Action completed!');
    window.location.reload();
});