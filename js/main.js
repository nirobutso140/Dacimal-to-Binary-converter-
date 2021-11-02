//step 1: select submit and result id and store them defferent variable 
//step 2: create a function
//step 3: select number id 
//step 4: store number id in variable and include value method for user input
//step 5: convert user value to number by number method and convert this number binary value by toString method
//step 6: store this value
//step 7: show this value result id

// Selecting DOM
// const submit = document.getElementById('submit');
// const result = document.getElementById('result');

// // Function
// function binary() {
 
//   const num = document.getElementById('number').value;
//   // console.log(typeof num);
//   // Input validation
//   // if (num === '') {
//   //   alert('Please enter a number');
//   // } else if (num < 0) {
//   //   alert('Please enter a positive number');
//   // } else {
//   //   result.style.visibility = 'visible';
//   // }

//   //Converting to Binary
//   let binary = Number(num).toString(2);
//   result.innerHTML = binary;
// }

// // Event Listener
// submit.addEventListener('click', binary);

var submit = document.getElementById("submit")
var result = document.getElementById("result")

function binary(){
  var num = document.getElementById("number").value

  var binary = Number(num).toString(2)

  result.innerHTML = binary
}