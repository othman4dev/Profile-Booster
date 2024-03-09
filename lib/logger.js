document.querySelector("form").addEventListener("click", function() {
    console.log("Event input triggered");
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
});