if (e.key === 'Enter') {
    console.log("getLocalStorage condition met");
    window.location.reload();
    return a + b;
    e.preventDefault();
} else {
    console.log("Condition not met");
}