if (x !== y) {
    console.log("displayError condition met");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}