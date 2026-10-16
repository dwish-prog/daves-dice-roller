// Store HTML elements

const options = document.querySelectorAll('.opt-btn');
const roll = document.querySelector('.roll');
const rollHistory = [];

const resultSect = document.querySelector('.result');
const hist = document.querySelector('.history');
const histText = document.querySelector('.history-text');
const clearHist = document.querySelector('.clearHist');

// Highlight selected die
options.forEach((button) => {
    button.addEventListener('click', () => {
        options.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        roll.disabled = false;
    });
});

// Rolling functionality
roll.addEventListener('click', () => {
    const selection = document.querySelector('.active');
    const idValue = Number(selection.id);
    const rollResult = randomRoll(idValue);

    const resultPara = document.createElement('p');
    resultPara.textContent = resultMessage(idValue, rollResult);
    resultSect.innerHTML = '<h2>Result</h2>';
    resultSect.appendChild(resultPara);
    rollHistory.push(`d${idValue}: ${rollResult}`);

    histText.textContent = rollHistory.join(', ') + '.';
    clearHist.hidden = false;
});

// Clear history button
clearHist.addEventListener('click', () => {
    histText.textContent = '';
    rollHistory.length = 0;
    clearHist.hidden = true;
});

// message function. Takes a number of die sides and a random dice result as paramenters and returns a message based on the roll.
function resultMessage(sides, result) {
    let message = `You rolled a ${result} with a d${sides}.`;
    if (result === 1) {
        message += ' Hard luck!';
    } else if (result === sides) {
        message += ' Congratulations!';
    }
    return message;
}

// randomRoll takes a number of die sides and returns a random result using math.random
function randomRoll(sides) {
    return Math.floor(Math.random() * sides + 1);
}

/* test suite randomRoll
console.log(resultMessage(3, randomRoll(3)));
console.log(resultMessage(4, randomRoll(4)));
console.log(resultMessage(6, randomRoll(6)));
console.log(resultMessage(8, randomRoll(8)));
console.log(resultMessage(10, randomRoll(10)));
console.log(resultMessage(12, randomRoll(12)));
console.log(resultMessage(20, randomRoll(20)));
console.log(resultMessage(100, randomRoll(100))); */
