document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submitBtn');
    const intext = document.getElementById('intext');
    const operatorSymbol = document.getElementById('operatorSymbol');
    const correctCountDisplay = document.getElementById('correctCount');
    const totalCountDisplay = document.getElementById('totalCount');
    const resultDisplay = document.getElementById('result');

    let correctCount = 0;
    let totalCount = 0;

    correctCountDisplay.textContent = `ถูก: ${correctCount}`;
    totalCountDisplay.textContent = `จากทั้งหมด: ${totalCount}`;

    submitBtn.addEventListener('click', function () {
        const userAnswer = parseFloat(intext.value);
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operator = operatorSymbol.textContent;

        let correctAnswer;

        switch (operator) {
            case '+':
                correctAnswer = num1 + num2;
                break;
            case '-':
                correctAnswer = num1 - num2;
                break;
            case '*':
                correctAnswer = num1 * num2;
                break;
            case '÷':
                correctAnswer = num1 / num2;
                break;
            default:
                break;
        }

        if (userAnswer === correctAnswer) {
            resultDisplay.textContent = 'คำตอบถูกต้อง!';
            correctCount++;
        } else {
            resultDisplay.textContent = 'คำตอบไม่ถูกต้อง ลองอีกครั้ง';
        }

        totalCount++;
        correctCountDisplay.textContent = `ถูก: ${correctCount}`;
        totalCountDisplay.textContent = `จากทั้งหมด: ${totalCount}`;
        intext.value = '';
        generateQuestion();
    });

    function generateQuestion() {
        let num1, num2;
        do {
            num1 = getRandomNumber();
            num2 = getRandomNumber();
        } while (num1 < num2);

        const operator = getRandomOperator();

        document.getElementById('num1').value = num1;
        document.getElementById('num2').value = num2;
        operatorSymbol.textContent = operator;
        resultDisplay.textContent = '';

        return num1, num2, operator;
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    function getRandomOperator() {
        const operators = ['+', '-', '*', '÷'];
        const randomIndex = Math.floor(Math.random() * operators.length);
        return operators[randomIndex];
    }

    generateQuestion();
});
