import isEven from './is-even.js';

// reference elements
const evenClown = document.getElementById('even');
const oddClown = document.getElementById('odd');
const numberInput = document.getElementById('number-input');

// wire up events
function getResult() {
    const x = parseInt(numberInput.value);
    if (isEven(x)) {
        evenClown.classList.add('visible');
        oddClown.classList.remove('visible');
    } else {
        evenClown.classList.remove('visible');
        oddClown.classList.add('visible');
    }  
}

window.getResult = getResult;