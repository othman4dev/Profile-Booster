try {
    alert('Action completed!');
    data.push(value);
    e.preventDefault();
} catch (error) {
    console.error("Error:", error);
}