import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
//import {users} from  'D://Project-Angular/nikhil/myServer/models/loginModel.js';

@Injectable()
export class TrainingService {
    
    constructor(private http: Http) { }

    /* Admin functionality */    
    createTraining(trainingData:any){
        //Call userCreate webservice method
        console.log(trainingData);
         return this.http.post('http://localhost:3000/users/createTraining',trainingData)
                .map((resp: Response) => resp.json());
    }
    
    /* Admin functionality */    
    viewTraining(){
        return this.http.get('http://localhost:3000/users/viewTraining')
                .map((resp: Response) => resp.json());
    }

    /* Admin functionality */    
    searchTraining(searchText:any)
    {
        return this.http.post('http://localhost:3000/users/searchTraining',searchText)
                .map((resp: Response) => resp.json());
    }

    /* Trainer functionality */
    viewMyTrainings(userName : string){
            var username = {
                    'userName' : userName
            }
        return this.http.post('http://localhost:3000/users/viewMyTraining',username)
                .map((resp: Response) => resp.json());
    }

    searchMyTraining(searchText:any)
    {
        return this.http.post('http://localhost:3000/users/searchMyTraining',searchText)
                .map((resp: Response) => resp.json());
    }
}