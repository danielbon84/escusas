/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog ", "My grandma ", "His turtle ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "the keys ", "the car "];
  let when = [
    "before the class ",
    "right on time ",
    "when I finished ",
    "during my lunch ",
    "while I was praying "
  ];
  let number1 = Math.floor(Math.random() * who.length);
  let number2 = Math.floor(Math.random() * action.length);
  let number3 = Math.floor(Math.random() * what.length);
  let number4 = Math.floor(Math.random() * when.length);
  let escusa = who[number1] + action[number2] + what[number3] + when[number4];
  document.body.innerHTML += escusa;

  console.log(escusa);
};
