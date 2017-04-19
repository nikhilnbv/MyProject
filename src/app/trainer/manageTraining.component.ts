import { Component, Injector, ElementRef } from '@angular/core';
import { TrainingService } from '../services/trainingService';

import '../scripts/jquery-3.2.0.min.js';
import '../scripts/bootstrap-3.3.7.min.js';

import "../scripts/myValidation.js";

//declare var myExtObject: any;

@Component({
    selector: 'manage-training',
    templateUrl: '../html/manageTraining.html'
})

export class ManageTrainingComponent{

    userName : any;
    showNum = 0;
    model : any = {};
    trainings : any[] = [];

    constructor(private injector: Injector, private trainingService : TrainingService, private _elementRef : ElementRef) {
        this.showNum = this.injector.get('showNum');
        this.userName = localStorage.getItem('currentUserName');
        this.viewMyTrainings(this.userName);
    }
  
    validateUserDetails(){
        console.log("Validate form.."); 
        //if(this._elementRef.nativeElement.querySelector('#txtFirstName')){} 
    }


    viewMyTrainings(userName){
        //console.log("inside view training");

      this.trainingService.viewMyTrainings(userName).subscribe(
      			data => { console.log(data);
            this.trainings = data;            
          },
			      err => console.error(err),
			      () => console.log('success..')
		  );
    }

    search()
    {
      console.log("inside SearchUser1" + this.model.searchTraining);      
      
      let searchText = {
          'searchT' : this.model.searchTraining,
          'userName' : this.userName

      };
      this.trainingService.searchMyTraining(searchText).subscribe(
      			data => { console.log(data);
            this.trainings = data;            
          },
			      err => console.error(err),
			      () => console.log('success..')
		  );
    }

}
