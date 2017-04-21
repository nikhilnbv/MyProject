import { Component, ElementRef, OnInit } from '@angular/core';
import { LoginService } from '../services/loginService';

import { Router } from '@angular/router';
import { routes } from '../services/app.router';
import { CreateUserComponent } from './createuser.component';
import { CreateTrainingComponent } from './createTraining.component';
import  DynamicComponent  from '../app.dynamic.component';


@Component({
    selector:'app-admin',
    templateUrl:'../html/template.html',
    // Reference to the components must be here in order to dynamically create them
    entryComponents: [CreateUserComponent, CreateTrainingComponent], 
    providers:[LoginService],
    styleUrls:['../styles/template.css']
})

export class AdminComponent implements OnInit{
   
    userName : any;    
    componentData = null;

    constructor(private loginService : LoginService, private router: Router,private _elementRef : ElementRef) {
        this.userName = localStorage.getItem('currentUserName');
    }

    manageUserScreen(){
        this.componentData = {
            component: CreateUserComponent,
             inputs: {
                showNum: 9
            }        
        };
    }

    manageTraining(){
       this.componentData = {
            component: CreateTrainingComponent,
             inputs: {
                showNum: 9
            }        
        };
    }

    ngOnInit(){
        if(localStorage.getItem('userRole').toString() == "admin")
        {
            this._elementRef.nativeElement.querySelector('#adminLinks').hidden = false;
            this._elementRef.nativeElement.querySelector('#trainerLinks').hidden = true;
            this._elementRef.nativeElement.querySelector('#traineeLinks').hidden = true;
        }
    }

    logout() { 
        this.loginService.logout();
        this.router.navigate(['/login']);
    }

    
}
