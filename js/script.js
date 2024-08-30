function calculateLog() {
    const input = document.getElementById('inputNumber').value;
    const resultElement = document.getElementById('result');
    
    // Verifica se o input não está vazio e se é um número positivo
    if (input === '' || isNaN(input) || input <= 0) {
        resultElement.innerText = 'Por favor, digite um número positivo.';
        return;
    }

    const number = parseFloat(input);
    const logValue = Math.log10(number); // Calcula o logaritmo na base 10

    resultElement.innerText = O logaritmo de ${number} é ${logValue.toFixed(4)}.;
}