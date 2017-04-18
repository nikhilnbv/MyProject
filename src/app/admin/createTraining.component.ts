import { Component, Injector } from '@angular/core';

@Component({
    selector: 'create-training',
    templateUrl:'../html/createTraining.html'
})

export class CreateTrainingComponent{
    showNum = 0;
    model : any = {};
    
  constructor(private injector: Injector) {
    this.showNum = this.injector.get('showNum');
  }
}
