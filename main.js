import { Helper } from './library.js';
export class Employee {
    constructor() {
        this.myHelper = new Helper;
        console.log("YO!");
    }
    PrintMessage() {
        console.log(`YO! from printmessage sum of numbers is ${this.myHelper.addition(1, 2)}`);
    }
}
//# sourceMappingURL=main.js.map