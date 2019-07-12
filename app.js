import isEven from './is-even.js';
import isOdd from './is-odd.js';

// reference elements
const isEven = document.getElementById('even');
const isOdd = document.getElementById('odd');
const x = document.getElementById('numberInput');

// wire up events
 function getResult() {
     numberInput.textContent = isEven.value;
 }