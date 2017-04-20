import { Component, Injector, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { TrainingService } from '../services/trainingService';

import { ViewScenarioComponent} from '../trainer/viewScenarioModal.component';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

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
    trainers : any[] = [];

  constructor(private injector: Injector, private trainingService : TrainingService,
                vcRef: ViewContainerRef, public modal: Modal) 
  {   
    this.showNum = this.injector.get('showNum');
    this.fetchTrainerList();
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

  fetchTrainerList(){
      this.trainingService.fetchTrainerList().subscribe(
      			data => { console.log(data);
            this.trainers = data;            
          },
			      err => console.error(err),
			      () => console.log('success..')
		  );
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

    viewScenario(trainingId) 
    {
         //this.modal.open(MyModal, new BaseMyModal());
         localStorage.setItem('currentTrainingId', trainingId);
         return this.modal.open(ViewScenarioComponent,  overlayConfigFactory({}, BSModalContext));
    }

}
