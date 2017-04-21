import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class LoginService {
    
    constructor(private http: Http) { }

        login = function (username: string, password: string) : any {
            console.log("in  login");
    }

    authenticate(credential : any){
        return this.http.post('http://localhost:3000/users/authenticate', credential)
                .map((resp: Response) => resp.json());
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
