const form = document.querySelector("form");
const addNumber = document.querySelector("#number");
const numberBank = document.getElementById("numberBank");
const oddNums = document.querySelector('#odds output');
const evenNums = document.querySelector('#evens output');
const sortOneButton = document.querySelector('#sortOne');
const sortAllButton = document.querySelector('#sortAll');

let numArr = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const number = Number(addNumber.value);
  if (!isNaN(number)) {
    numArr.push(number);
    numberBank.innerText = numArr;
    addNumber.value='';
  }
});
oddNums.addEventListener("click", function () {
  numArr.sort();
});
evenNums.addEventListener("click", function () {
  numArr = [];
});

sortOneButton.addEventListener('click', function () {
  if(numArr.length>0){
    const number=numArr.shift();
    sortNumber(number);
  }
});

sortAllButton.addEventListener('click', function() {
  numArr.forEach((number) => {
    sortNumber(number);
  })
  numArr=[];
});

function sortNumber(number) {
  if(number%2===0){
    evenNums.textContent+=number+', '
  } else {
    oddNums.textContent+=number+', ';
  }
}
