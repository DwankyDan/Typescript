import {Helper} from './library.js';

export class Employee{
    myHelper:Helper = new Helper;
    
    constructor(){
        console.log("YO!");
    }

    PrintMessage(){
        console.log(`YO! from printmessage sum of numbers is ${ this.myHelper.addition(1,2) }`);
    }
}