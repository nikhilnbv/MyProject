import { Component, ElementRef, OnInit } from '@angular/core';
import { LoginService } from '../services/loginService';
import { Router } from '@angular/router';
import { routes } from '../services/app.router';
import { ManageTrainingComponent } from '../trainer/manageTraining.component';
import DynamicComponent from '../app.dynamic.component';

import { TrainingService } from '../services/trainingService';

@Component({
    selector:'app-trainer',
    templateUrl:'../html/template.html',
    entryComponents: [ManageTrainingComponent], 
    styleUrls:['../styles/template.css']
})

export class TrainerComponent implements OnInit {

    userName : any;
    trainings : any[] = [];
    componentData = null;

    constructor(private loginService : LoginService,private router: Router,private _elementRef : ElementRef,
    private trainingService : TrainingService) {
        this.userName = localStorage.getItem('currentUserName');
    }

    ngOnInit(){
        if(localStorage.getItem('userRole').toString() == "trainer"){ 
            this._elementRef.nativeElement.querySelector('#adminLinks').hidden = true;
            this._elementRef.nativeElement.querySelector('#trainerLinks').hidden = false;
            this._elementRef.nativeElement.querySelector('#traineeLinks').hidden = true;
        }            
    }

    logout() { 
        this.loginService.logout();
        this.router.navigate(['/login']);
    }

    manageUserScreen(){
        this.componentData = {
            component: ManageTrainingComponent,
             inputs: {
                showNum: 9
            }        
        };
    }
    
}
