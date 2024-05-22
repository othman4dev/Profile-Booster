if (e.key === 'Enter') {
    console.log("saveSettings condition met");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    window.location.reload();
} else {
    console.log("Condition not met");
}