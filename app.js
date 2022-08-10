const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const inputNum = document.querySelector('#inputNum');
const totalNum = document.querySelector('#totalNum');

add.addEventListener('click', function addNum() {
  newTotal = parseInt(totalNum.textContent) + parseInt(inputNum.value);
  if (newTotal < 0) {
    totalNum.style.color = 'red';
  } else {
    totalNum.style.color = 'black';
  }
  totalNum.textContent = newTotal;
}); 

subtract.addEventListener('click', function addNum() {
  newTotal = parseInt(totalNum.textContent) - parseInt(inputNum.value);
  if (newTotal < 0) {
    totalNum.style.color = 'red';
  } else {
    totalNum.style.color = 'black';
  }
  totalNum.textContent = newTotal;
}); 