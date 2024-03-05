if (e.key === 'Enter') {
    console.log("displayError condition met");
    alert('Action completed!');
    e.preventDefault();
    window.location.reload();
} else {
    console.log("Condition not met");
}