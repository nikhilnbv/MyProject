import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './app.login.component';

import { AdminComponent } from './admin/app.admin.component';
import { CreateUserComponent } from './admin/createuser.component';
import  DynamicComponent  from './app.dynamic.component';
import { CreateTrainingComponent } from './admin/createTraining.component';
import { ManageTrainingComponent } from './trainer/manageTraining.component';
import {DataTableModule} from "angular2-datatable";

import { TrainerComponent } from './trainer/app.trainer.component';
import { TraineeComponent } from './trainee/app.trainee.component';
import { LoginService } from './services/loginService';
import { UserService } from './services/userService';
import { TrainingService } from './services/trainingService';
 
import { routing }        from './services/app.router';
import { AuthGuard } from './guard/authGuard';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { MyModal } from './myModal.component';
import { ViewScenarioComponent} from './trainer/viewScenarioModal.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, AdminComponent, CreateUserComponent, DynamicComponent,
     TrainerComponent, TraineeComponent, CreateTrainingComponent, ManageTrainingComponent, MyModal,
     ViewScenarioComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    routing,
    DataTableModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [LoginService,AuthGuard,UserService,TrainingService],
  bootstrap: [AppComponent],
  entryComponents: [ MyModal, ViewScenarioComponent ]
   
})
export class AppModule { }
