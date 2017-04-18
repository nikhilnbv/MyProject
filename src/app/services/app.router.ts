import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../admin/app.admin.component';
import { TrainerComponent } from '../trainer/app.trainer.component';
import { TraineeComponent } from '../trainee/app.trainee.component';
import { LoginComponent } from '../app.login.component';
import { AuthGuard } from '../guard/authGuard';


export const routes: Routes = [

    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },    
    { path: 'trainer', component: TrainerComponent, canActivate: [AuthGuard] },    
    { path: 'trainee', component: TraineeComponent, canActivate: [AuthGuard] },    
    { path: 'login', component: LoginComponent },    
    { path: '', component: LoginComponent },    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
