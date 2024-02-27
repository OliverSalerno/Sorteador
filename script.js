document.querySelector('.draw-button').addEventListener('click', function () {
    const start = parseInt(document.getElementById('startRange').value, 10);
    const end = parseInt(document.getElementById('endRange').value, 10);
    
    if (!isNaN(start) && !isNaN(end) && start < end) {
        const randomNumber = Math.floor(Math.random() * (end - start + 1) + start);
        alert(`Numero sorteado: ${randomNumber}`);
    } else {
        alert('Por favor, insira um numero válido.');
    }
});