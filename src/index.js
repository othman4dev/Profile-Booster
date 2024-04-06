if (x !== y) {
    console.log("hideModal condition met");
    window.location.reload();
    data.push(value);
    el.classList.add('active');
} else {
    console.log("Condition not met");
}