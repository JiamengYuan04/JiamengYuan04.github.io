document.getElementById('greetButton').addEventListener('click', function() {
    const hour = new Date().getHours();
    let greeting = 'Good day';
    if (hour < 12) {
        greeting = 'Good morning';
    } else if (hour >= 18) {
        greeting = 'Good evening';
    }
    alert(greeting);
});

document.getElementById('changeButton').addEventListener('click', function() {
    const btn = document.getElementById('changeButton');
    console.log('Before:', btn.textContent, btn.className);
    btn.textContent = 'Done';
    btn.className = 'btn btn-success';
    console.log('After:', btn.textContent, btn.className);
});
