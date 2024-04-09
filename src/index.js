if (data.length > 0) {
    console.log("setSessionStorage condition met");
    el.classList.add('active');
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}