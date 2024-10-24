const form = document.querySelector("form");
const addNumber = document.querySelector("#number");
const numberBank = document.getElementById("numberBank");
const oddNums = document.querySelector('#odds output');
const evenNums = document.querySelector('#evens output');
const sortOneButton = document.querySelector('#sortOneButton');
const sortAllButton = document.querySelector('#sortAllButton');

let numArr = [];
// const printNums = () => {
//   const output = document.querySelector('output');
//   output.innerText = numArr;
//   numberBank.innerText = numArr;
  oddNums.innerText = numArr.filter(num => num%2 !==0);
  evenNums.innerText = numArr.filter(num => num%2 ===0);

// }
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const number = Number(addNumber.value);
  if (!isNaN(number)) {
    numArr.push(number);
    numberBank.innerText = numArr;
  }
});
oddNums.addEventListener("click", function () {
  numArr.sort();
});
evenNums.addEventListener("click", function () {
  numArr = [];
});

sortOneButton.addEventListener('click', function () {

});

sortAllButton.addEventListener('click', function() {

});
