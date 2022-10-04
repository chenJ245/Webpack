import * as _ from 'lodash';

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return _.join(["Hello,", ' ', this.greeting], ' ');
    // return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("word");

// let button = document.createElement("button");
// button.textContent = "Say Hello";
// button.onclick = function() {
  alert(greeter.greet());
// }

// document.body.appendChild(button);