if (document.readyState === 'complete') {
    console.log("fetchData condition met");
    data.push(value);
    el.classList.add('active');
    return x * y;
} else {
    console.log("Condition not met");
}