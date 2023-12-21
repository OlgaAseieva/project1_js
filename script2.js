// function callback (ar) {
//     return arr = arr * 2
// };

// function modifyArray( arr, callback) {
//     arr.map(callback)
// };

// let arr = [1, 2, 3, 4];
// let doubleArr = modifyArray (arr)
// console.log(doubleArr)


// let timer = document.getElementById('timer');
// let second = 5;
// timer.textContent = second;
// function updateTimer(){
//     second--;
//     timer.textContent = second;
//     if (second === 0){
//         timer.textContent = "Time is up!";
//         clearInterval (timeout);
//     }
// };
// let timeout = setInterval(updateTimer, 1000);

// // Regular Expration
// let pattern =/[aoeiuy]/gim;
// let text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
// Lorem Ipsum has been the industry's standard dummy text ever since the
// 1500s`;
// let ismatch = text.match(pattern);
// console.log(ismatch);

// Event Listener 
// let button = document.getElementById('myButton');
// button.addEventListener('click', function(){
//     document.body.style.color ="blue";
// })

// // API classList
// document.getElementById("myElement").addEventListener('mouseover', function(){
//    this.classList.toggle('highlighted');
// });

// Exeptions
// function checkPositive(n) {
//     if (n <= 0) {
//         throw new Error("The number must be positive!!");
//     }
//     console.log(`The number ${n} is positive`);
// }

// try {
//     checkPositive (10);
//     debaggern
//     checkPositive (-5);
//     checkPositive (0);
// }
// catch (err) {
//     console.log('Oops!!!!' + err.message);

// }
// //  JSON
// let person = {
//     "name" : "John",
//     "age" : 28,
//     "hobbies" : ["swimming", "reading"]
// }

// let json_person = JSON.stringify(person);
// console.log(json_person);






