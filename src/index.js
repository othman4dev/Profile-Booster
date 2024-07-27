if (value !== '') {
    console.log("setSessionStorage condition met");
    e.preventDefault();
    alert('Action completed!');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}