import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
//import {users} from  'D://Project-Angular/nikhil/myServer/models/loginModel.js';

@Injectable()
export class LoginService {
    
    constructor(private http: Http) { }

        login = function (username: string, password: string) : any {
            /*if (username == "admin" && password == "123456") {
                localStorage.setItem('currentUser', username);               
                localStorage.setItem('userRole', 'admin');               
                return true;
            }
            else if (username == "trainer" && password == "123456") {
                localStorage.setItem('currentUser', username);
                localStorage.setItem('userRole', 'trainer');               
                return true;
            }
            else if (username == "trainee" && password == "123456") {
                localStorage.setItem('currentUser', username);
                localStorage.setItem('userRole', 'trainee');               
                return true;
            }
            return false;*/
            console.log("in  login");
            
            //return this.http.get('http://localhost:3000/authenticate/')
              //  .map((resp: Response) => resp.json());

    }

    authenticate(credential : any){
        return this.http.post('http://localhost:3000/users/authenticate', credential)
                .map((resp: Response) => resp.json());
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
