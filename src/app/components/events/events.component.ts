
import { Component } from '@angular/core';

@Component({
    selector:'events',
    templateUrl:`./events.component.html`,
    styleUrls:['./events.component.css']

})

export class EventsComponent{

    text:string = 'hey there';
    value:boolean = true;

    fireEvent(e){
        //console.log('Button Clicked');
        console.log(e.target.id);
        console.log(e.type);
      //  alert("do not click!!!");
    }

    changeValue(){
        //this.text = 'Hi there';
        this.value = !this.value;
        console.log(this.value);
    }

    keyboardEvent(e){
        console.log(e.type);
    }
}
