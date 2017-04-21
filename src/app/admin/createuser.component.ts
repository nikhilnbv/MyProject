import { Component, Injector, ElementRef } from '@angular/core';
import { UserService } from '../services/userService';

import '../scripts/jquery-3.2.0.min.js';
import '../scripts/bootstrap-3.3.7.min.js';

import "../scripts/myValidation.js";

declare var myExtObject: any;

@Component({
    selector: 'create-user-form',
    templateUrl: '../html/createUser.html'
})

export class CreateUserComponent{

    showNum = 0;
    model : any = {};
    userData : any;
    users : any[] = [];

  constructor(private injector: Injector, private userService : UserService, private _elementRef : ElementRef) {
    this.showNum = this.injector.get('showNum');
    this.model.role = "admin";
    this.viewUsers();
  }
  
  validateUserDetails(){
    console.log("Validate form.."); 
  }

  createUser(){
    if( myExtObject.validateUser(this.users))
    {
        this.userData = {
                'userName' : this.model.userName,
                'password' : this.model.password,
                'firstName' : this.model.firstName,
                'lastName' : this.model.lastName,
                'role' : this.model.role
            }
            
        this.userService.createUser(this.userData).subscribe(
      			data => { 
            console.log(data.affectedRows)},
			      err => console.error(err),
			      () => {                  
                    myExtObject.createUserSuccess();
                    this.viewUsers();
                    console.log('success..');
            }
		  );
    }

  }

    viewUsers(){
      this.userService.viewUsers().subscribe(
      			data => { console.log(data);
            this.users = data;            
          },
			      err => console.error(err),
			      () => console.log('success..')
		  );
    }

    search()
    {
      let searchText = {
          'searchT' : this.model.searchUser
      };
      this.userService.searchUsers(searchText).subscribe(
      			data => { 
            this.users = data;            
          },
			      err => console.error(err),
			      () => console.log('success..')
		  );
    }

    updateUserName(newUser : string,uid : string){
    
      if( myExtObject.validateUserName(newUser,this.users))
      {
          let userName1 = {
              'uName' : newUser,
              'uId' : uid
            };
            
          this.userService.updateUserName(userName1).subscribe(
              data => { 
              this.users = data;            
            },
              err => console.error(err),
              () => console.log('success..')
        );
      }  
    }

    updateStatus(uid : string){
      
      var status = myExtObject.takeStatus();    
        let status1 = {
            'status' : status,
            'uId' : uid
          };

        this.userService.updateStatus(status1).subscribe(
      			data => { 
            this.users = data;            
          },
			      err => console.error(err),
			      () => console.log('success..')
		  );      
    }

    updateRole(uid : string){
      
      var role = myExtObject.takeRole();    
        let role1 = {
            'role' : role,
            'uId' : uid
          };

        this.userService.updateRole(role1).subscribe(
      			data => { 
            this.users = data;            
          },
			      err => console.error(err),
			      () => console.log('success..')
		  );      
    }
}
