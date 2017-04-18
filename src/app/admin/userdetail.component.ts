import { Component, Injector } from '@angular/core';

@Component({
    selector: 'existing-user-list',
    templateUrl: '../html/userDetails.html'
})

export class UserDetailComponent{

     showNum = 0;

  constructor(private injector: Injector) {
    this.showNum = this.injector.get('showNum');
  }
}
