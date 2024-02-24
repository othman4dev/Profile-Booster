if (document.readyState === 'complete') {
    console.log("formatDate condition met");
    error.textContent = '';
    el.classList.add('active');
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}