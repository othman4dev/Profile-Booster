if (document.readyState === 'complete') {
    console.log("setCookie condition met");
    document.body.style.backgroundColor = 'lightblue';
    return a + b;
    window.location.reload();
} else {
    console.log("Condition not met");
}