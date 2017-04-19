import { Component, Injector } from '@angular/core';
import { TrainingService } from '../services/trainingService';

import "../scripts/myValidation.js";

declare var myExtObjectForTraining: any;

@Component({
    selector: 'create-training',
    templateUrl:'../html/createTraining.html'
})

export class CreateTrainingComponent{
    showNum = 0;
    model : any = {};
    trainingData : any;
    trainings : any[] = [];

  constructor(private injector: Injector, private trainingService : TrainingService) {
    this.showNum = this.injector.get('showNum');
    this.viewTraining();
  }


  createTraining(){
    if(myExtObjectForTraining.validateTraining())
    {
        console.log("hello" + this.model.tdate);
        
        this.trainingData = {
            'trainingtitle' : this.model.trainingtitle,
            'department' : this.model.department,
            'audience' : this.model.audience,
            'trainer' : this.model.trainer,
            'tdate' : this.model.tdate,
            'startTime' : this.model.startTime,
            'endTime' : this.model.endTime,
            'location' : this.model.location       
        }
                
        this.trainingService.createTraining(this.trainingData).subscribe(
            data => {
                    console.log(data);                   
                    },
            err => console.error(err),
            () => {                  
                    myExtObjectForTraining.createTrainingSuccess();
                    console.log('traing created successfully..');
                    this.viewTraining();
                    
            }
        );
    }
  }

  viewTraining(){
      console.log("inside view training");

      this.trainingService.viewTraining().subscribe(
      			data => { console.log(data);
            this.trainings = data;            
          },
			      err => console.error(err),
			      () => console.log('success..')
		  );
    }

    search()
    {
      console.log("inside SearchUser1" + this.model.searchUser);      
      
      let searchText = {
          'searchT' : this.model.searchTraining
      };
      this.trainingService.searchTraining(searchText).subscribe(
      			data => { console.log(data);
            this.trainings = data;            
          },
			      err => console.error(err),
			      () => console.log('success..')
		  );
    }
}
