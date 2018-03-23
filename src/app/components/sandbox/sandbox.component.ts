import { Customer } from './Customer';
import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    templateUrl:`./sandbox.component.html`,
    styleUrls:['./sandbox.component.css']

})

export class SandboxComponent{

    // Typescript types
    name:string = 'John Doe';
    age:number;
    married:boolean;
    city:any;
    favNumbers:number[];
    myTuple:[string, number];
    unsuable: void = undefined;
    u: undefined = undefined;
    n: null = null;

    show:boolean = true;

    //for ngSwitch
    greeting:any =2;

    //random img
    imageUrl = "http://lorempixel.com/400/200";

    isUnchanged:boolean = true;

    //using interface
    customer:Customer;

    people = ['Rick', 'Daryl', 'Carl', 'Glen'];


    today = new Date();

    constructor(){
        this.customer = {
            id:1,
            name:'customer name',
            email: 'email@email.com'
        }
        console.log('constructor ran...');
    }

    hasBirthday(){
        this.age +=1;
    }
}
