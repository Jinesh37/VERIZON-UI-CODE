import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main/login/login.component';
import { HomeComponent } from './main/home/home.component';
import { TroubleshootCardComponent } from './main/TroubleShoot/troubleshoot-card/troubleshoot-card.component';
import { FieldSupportComponent } from './main/TroubleShoot/field-support/field-support.component';
import { DashboardComponent } from './main/TroubleShoot/dashboard/dashboard.component';
import { AssignmentComponent } from './main/TroubleShoot/assignment/assignment.component';
import { FieldLoginComponent } from './main/TroubleShoot/field-login/field-login.component';
import { EscalationsComponent } from './main/TroubleShoot/escalations/escalations.component';
import { AssignmentIdComponent } from './main/TroubleShoot/assignment-id/assignment-id.component';
import { AssignmentGraphComponent } from './main/TroubleShoot/assignment-graph/assignment-graph.component';
import { AssignmentMapComponent } from './main/TroubleShoot/assignment-map/assignment-map.component';
const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'troubleshoot', component: TroubleshootCardComponent},
  {path:'troubleshoot/field',component:FieldSupportComponent},
  {path:'troubleshoot/field-login',component:FieldLoginComponent},
  {path:'troubleshoot/dashbaoard', component: DashboardComponent},
  {path:'troubleshoot/assignment', component: AssignmentComponent},
  {path: 'troubleshoot/escalations', component: EscalationsComponent},
  {path:'troubleshoot/id',component:AssignmentIdComponent},
  {path:'troubleshoot/graph',component:AssignmentGraphComponent},
  {path:'troubleshoot/map',component:AssignmentMapComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
