if (x !== y) {
    console.log("loadData condition met");
    alert('Action completed!');
    return x - y;
    e.preventDefault();
} else {
    console.log("Condition not met");
}