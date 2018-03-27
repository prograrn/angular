
import { Component } from '@angular/core';
import { DataService } from './../../services/data.service';


@Component({
    selector:'form-template',
    templateUrl:`./form.component.html`,
    styleUrls:['./form.component.css']

})

export class FormComponent{

    
    user = {
        name: '',
        age : 0,
        email:'',
        phone:''
        
    }
    users:any[];
    
    constructor(public dataService:DataService){

        dataService.getUSers().subscribe((users:any[]) =>{
            this.users = users;
            console.log(users);
        });
    }

    onSubmit({value, valid}){
        this.users.push(this.user.name);

        if(valid){
            console.log(value);
        }else{
            console.log('For is invalid');
        }

    }
}
