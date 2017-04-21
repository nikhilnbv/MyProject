import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    
    constructor(private http: Http) { }

    createUser(userData:any){
         return this.http.post('http://localhost:3000/users/createUser',userData)
                .map((resp: Response) => resp.json());
    }
    
    viewUsers(){
        return this.http.get('http://localhost:3000/users/viewUsers')
                .map((resp: Response) => resp.json());
    }
    
    searchUsers(searchText:any)
    {
        return this.http.post('http://localhost:3000/users/searchUsers',searchText)
                .map((resp: Response) => resp.json());
    }

    updateUserName(userName:any)
    {
        return this.http.post('http://localhost:3000/users/updateUserName',userName)
                .map((resp: Response) => resp.json());
    }

    updateStatus(status:any)
    {
        return this.http.post('http://localhost:3000/users/updateStatus',status)
                .map((resp: Response) => resp.json());
    }

    updateRole(role:any)
    {
        return this.http.post('http://localhost:3000/users/updateRole',role)
                .map((resp: Response) => resp.json());
    }
}
