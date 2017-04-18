import { Component, ElementRef, OnInit } from '@angular/core';
import { LoginService } from '../services/loginService';
import { Router } from '@angular/router';
import { routes } from '../services/app.router';

@Component({
    selector:'app-trainee',
    templateUrl:'../html/template.html',
    styleUrls:['../styles/template.css']
})

export class TraineeComponent implements OnInit {

    constructor(private loginService : LoginService,private router: Router,private _elementRef : ElementRef) {
    }

    ngOnInit(){
        if(localStorage.getItem('userRole').toString() == "trainee"){ 
            //this.renderer.setElementProperty(this._elementRef.nativeElement.querySelector('#adminSpan1'), 'hidden', false);                            
            this._elementRef.nativeElement.querySelector('#adminLinks').hidden = true;
            this._elementRef.nativeElement.querySelector('#trainerLinks').hidden = true;
            this._elementRef.nativeElement.querySelector('#traineeLinks').hidden = false;
        }            
    }

    logout() { 
        //console.log('calling logout');
        this.loginService.logout();
        this.router.navigate(['/login']);
    }
}
