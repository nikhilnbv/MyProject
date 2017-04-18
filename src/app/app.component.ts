import { Component } from '@angular/core';
//import { Router } from '@angular/router';
//import { routing } from './services/app.router';
import './scripts/jquery-3.2.0.min.js';

@Component({
   moduleId: module.id,
  selector: 'app-root',
  template: `
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
