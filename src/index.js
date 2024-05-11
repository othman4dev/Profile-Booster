document.querySelector("window").addEventListener("blur", function() {
    console.log("Event scroll triggered");
    el.classList.add('active');
    window.location.reload();
    data.push(value);
});