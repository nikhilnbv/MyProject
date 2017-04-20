import { Component, Injector, ElementRef, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { TrainingService } from '../services/trainingService';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import { MyModal} from '../myModal.component';
import { ViewScenarioComponent} from './viewScenarioModal.component';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';

import "../scripts/myValidation.js";

//declare var myExtObject: any;

@Component({
    selector: 'manage-training',
    templateUrl: '../html/manageTraining.html'
})

export class ManageTrainingComponent implements OnInit{

    userName : any;
    showNum = 0;
    model : any = {};
    trainings : any[] = [];
    

    constructor(private injector: Injector, private trainingService : TrainingService, 
    private _elementRef : ElementRef, vcRef: ViewContainerRef, public modal: Modal) {
        
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

    ngOnInit(){
    
    }

    addScenario(trainingId) 
    {
         //this.modal.open(MyModal, new BaseMyModal());
         localStorage.setItem('currentTrainingId', trainingId);
         return this.modal.open(MyModal,  overlayConfigFactory({}, BSModalContext));
    }

    viewScenario(trainingId) 
    {
         //this.modal.open(MyModal, new BaseMyModal());
         localStorage.setItem('currentTrainingId', trainingId);
         return this.modal.open(ViewScenarioComponent,  overlayConfigFactory({}, BSModalContext));
    }

}
