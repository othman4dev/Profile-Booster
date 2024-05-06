document.querySelector("form").addEventListener("focus", function() {
    console.log("Event input triggered");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
});