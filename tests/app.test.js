if (data.length > 0) {
    console.log("hideModal condition met");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}