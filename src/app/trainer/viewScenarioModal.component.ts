import { Component } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard  } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { TrainingService } from '../services/trainingService';
import "../scripts/myValidation.js";

declare var myExtObjectForTraining: any;


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
                    <h1>View Scenario</h1>
                </div>
            </div>
            <div class="row" [ngClass]="{'myclass' : shouldUseMyClass}">
                <div class="col-xs-12">
                    <div class="jumbotron">                      
                        <table id="viewScenario" class="table table-striped table-bordered" cellspacing="0" width="100%" [mfData]="scenarios" #mf="mfDataTable"
                        [mfRowsOnPage]="5">
                        <thead>
                            <tr>                                
                                <th>Scenario</th>
                                <th>IsCovered</th>
                         </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <td colspan="5">
                                    <mfBootstrapPaginator [rowsOnPageSet]="[5,10,25]"></mfBootstrapPaginator>
                                </td>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr *ngFor="let scenario of mf.data">
                                <td>{{scenario.scenario_name}} <input #scenario_id type="hidden" value='{{scenario.scenario_id}}'/></td>
                                <td  *ngIf="scenario.iscovered==1"><a (click)="updateScenarioStatus(scenario_id.value)">Covered</a></td>
                                <td  *ngIf="scenario.iscovered!=1"><a (click)="updateScenarioStatus(scenario_id.value)">Not Covered</a></td>                                
                            </tr>
                        </tbody>
                    </table>

                        
                    </div>
                    <div>                        
                         <input type="button" (click)="closeMe()" value="close me" />
                    </div>
                </div>
            </div>
        </div>`
})
export class ViewScenarioComponent implements  CloseGuard, ModalComponent<BSModalContext> {
        context: BaseMyModal;
        model : any = {};
        trainingId : any;
        scenarioData : any;
        scenarios : any[] = [];
        constructor(public dialog: DialogRef<BSModalContext>, private trainingService : TrainingService) {
        this.context = dialog.context; 
         dialog.setCloseGuard(this); 
         this.viewScenario();
        }
    
    beforeDismiss(): boolean {
    return true;
  }

  closeMe() { 
    localStorage.removeItem('currentTrainingId'); 
    this.dialog.close();
  } 

  viewScenario(){
        this.trainingId = localStorage.getItem('currentTrainingId');
      
        console.log("hello" + this.model.scenario+"    "+this.trainingId);
        
        this.scenarioData = {            
            'trainingId' : this.trainingId
        }
                
        this.trainingService.viewScenario(this.scenarioData).subscribe(
            data => {
                        console.log(data); 
                        this.scenarios=data;                  
                    },
            err => console.error(err),
            () => {                  
                    //myExtObjectForTraining.createTrainingSuccess();                    
                    console.log('scenario added successfully..');
                    //this.viewTraining();
                    
            }
        );
  }
  
    updateScenarioStatus(scenarioid)
    {      
      var status = myExtObjectForTraining.takeScenarioStatus();    
        let scenariodata = {
            'status' : status,
            'scenario_id' : scenarioid
          };

        this.trainingService.updateScenarioStatus(scenariodata).subscribe(
      			data => { console.log(data);
                this.scenarios=data;
          },
			      err => console.error(err),
			      () => console.log('success..')
		  );      
    }
  
}
