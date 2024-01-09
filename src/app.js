const renderList = (a, b, data) => {
    console.log("renderList arrow function called");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    return a + b;
};