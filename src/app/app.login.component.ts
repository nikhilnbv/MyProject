import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/loginService';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { AdminComponent } from './admin/app.admin.component';
import { routes } from './services/app.router';


@Component({
    //selector:'app-login',
    templateUrl:'html/login.html',
    styleUrls: ['styles/bootstrap-theme.min.css','styles/bootstrap.min.css','styles/login.css'],
    providers:[LoginService]
})

export class LoginComponent implements OnInit{
    model: any = {};
    authenticateFlag : any;
    authenticateRole : any;
    authenticateName : any;
    authenticateUserName: any;
    credentials : any;
    private subject = new Subject<any>();
    //private router: Router;
    constructor(private loginService : LoginService, private router: Router ) {
        
    }

    login() { 
        
        console.log('calling');
        this.credentials = {
                'username' : this.model.username,
                'password' : this.model.password                
            }

        this.loginService.authenticate(this.credentials).subscribe(
			data => { console.log("hahaha" + data);
                if(data[0].firstname != "No user found")
                {
                    this.authenticateFlag = data[0].isactive;
                    this.authenticateRole = data[0].role;
                    this.authenticateName = data[0].firstname;
                    this.authenticateUserName = data[0].username;
                    this.onSuccess();
                }
                else
                {
                    this.onFailure();  
                }
            },
                    
			err => console.error(err),
			() => console.log('success..')
		);

    }

    onSuccess() {        
        console.log("sasasasas" + this.authenticateFlag);
        if(this.authenticateFlag){
            console.log("sasasasas" + this.authenticateRole);
            if(this.authenticateRole=="admin") 
            {
                localStorage.setItem('currentUser', this.authenticateUserName);    
                localStorage.setItem('currentUserName', this.authenticateName);           
                localStorage.setItem('userRole', this.authenticateRole);                  
                this.router.navigate(['/admin']);
            }
            else if(this.authenticateRole=="trainer"){
                localStorage.setItem('currentUser', this.authenticateUserName);    
                localStorage.setItem('currentUserName', this.authenticateName);           
                localStorage.setItem('userRole', this.authenticateRole);
                this.router.navigate(['/trainer']);
            }                
            else if(this.authenticateRole=="trainee"){
                localStorage.setItem('currentUser', this.authenticateUserName);    
                localStorage.setItem('currentUserName', this.authenticateName);           
                localStorage.setItem('userRole', this.authenticateRole);
                this.router.navigate(['/trainee']);
            }
        }
        else {
            console.log('No ');
            this.subject.next({ type: 'error', text: "Naa ho pavega.." });
        }
              
       /* if(this.loginService.login(this.model.username, this.model.password)){
            if(this.model.username=="admin")                
                this.router.navigate(['/admin']);
            else if(this.model.username=="trainer")
                this.router.navigate(['/trainer']);
            else if(this.model.username=="trainee")
                this.router.navigate(['/trainee']);
        }
        else {
            console.log('No ');
            this.subject.next({ type: 'error', text: "Naa ho pavega.." });
        }*/
    }

    onFailure(){
        console.log('No user found');
    }
    
    ngOnInit(){
        
    }
}
