if (document.readyState === 'complete') {
    console.log("renderList condition met");
    el.classList.add('active');
    data.push(value);
    data.push(value);
} else {
    console.log("Condition not met");
}