if (x === y) {
    console.log("renderList condition met");
    window.location.reload();
    e.preventDefault();
    return x * y;
} else {
    console.log("Condition not met");
}