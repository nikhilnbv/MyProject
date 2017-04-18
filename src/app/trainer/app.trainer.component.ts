import { Component, ElementRef, OnInit } from '@angular/core';
import { LoginService } from '../services/loginService';
import { Router } from '@angular/router';
import { routes } from '../services/app.router';

@Component({
    selector:'app-trainer',
    templateUrl:'../html/template.html',
    styleUrls:['../styles/template.css']
})

export class TrainerComponent implements OnInit {

    constructor(private loginService : LoginService,private router: Router,private _elementRef : ElementRef) {
    }

    ngOnInit(){
        if(localStorage.getItem('userRole').toString() == "trainer"){ 
            //this.renderer.setElementProperty(this._elementRef.nativeElement.querySelector('#adminSpan1'), 'hidden', false);                            
            this._elementRef.nativeElement.querySelector('#adminLinks').hidden = true;
            this._elementRef.nativeElement.querySelector('#trainerLinks').hidden = false;
            this._elementRef.nativeElement.querySelector('#traineeLinks').hidden = true;
        }            
    }

    logout() { 
        //console.log('calling logout');
        this.loginService.logout();
        this.router.navigate(['/login']);
    }
}
