import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard  } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { TrainingService } from './services/trainingService';

export class BaseMyModal extends BSModalContext {
  constructor() {
    super();
  }
}

@Component({
  selector: 'modal-content',
  styles: [`
        .custom-modal-container {
            padding: 15px;
        }

        .custom-modal-header {
            background-color: #219161;
            color: #fff;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            margin-top: -15px;
            margin-bottom: 40px;
        }
    `],
  
  template: `
        <div class="container-fluid custom-modal-container">
            <div class="row custom-modal-header">
                <div class="col-sm-12">
                    <h1>Add Scenario Dialog</h1>
                </div>
            </div>
            <div class="row" [ngClass]="{'myclass' : shouldUseMyClass}">
                <div class="col-xs-12">
                    <div class="jumbotron">                      
                        <label class="control-label">Scenario</label>
                        <textarea class="form-control" [(ngModel)]="model.scenario" name="scenario" id="scenario"></textarea>
                    </div>
                    <div> 
                         <input type="button" (click)="addScenario()" value="Add" />
                         <input type="button" (click)="closeMe()" value="close me" />
                    </div>
                </div>
            </div>
        </div>`
})
export class MyModal implements  CloseGuard, ModalComponent<BSModalContext> {
        context: BaseMyModal;
        model : any = {};
        trainingId : any;
        scenarioData : any;

        constructor(public dialog: DialogRef<BSModalContext>, private trainingService : TrainingService) {
        this.context = dialog.context; 
         dialog.setCloseGuard(this); 
        }
    
    beforeDismiss(): boolean {
    return true;
  }

  closeMe() { 
    localStorage.removeItem('currentTrainingId'); 
    this.dialog.close();
  } 

  addScenario(){
      
    /*if(myExtObjectForTraining.validateTraining())
    {*/
        this.trainingId = localStorage.getItem('currentTrainingId');
        //localStorage.removeItem('currentTrainingId');
        console.log("hello" + this.model.scenario+"    "+this.trainingId);
        
        this.scenarioData = {
            'content' : this.model.scenario, 
            'trainingId' : this.trainingId
        }
                
        this.trainingService.addScenario(this.scenarioData).subscribe(
            data => {
                    console.log(data);                   
                    },
            err => console.error(err),
            () => {                  
                    //myExtObjectForTraining.createTrainingSuccess();
                    alert('Scenario added successfully..');
                    console.log('scenario added successfully..');
                    //this.viewTraining();
                    
            }
        );
    //}
  }
  
  
}
