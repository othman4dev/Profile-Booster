if (data.length > 0) {
    console.log("checkStatus condition met");
    alert('Action completed!');
    el.classList.add('active');
    e.preventDefault();
} else {
    console.log("Condition not met");
}