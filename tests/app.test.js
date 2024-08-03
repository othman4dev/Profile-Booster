document.querySelector("#input").addEventListener("click", function() {
    console.log("Event load triggered");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    alert('Action completed!');
});