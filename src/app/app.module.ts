import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './main/login/login.component';
import { HomeComponent } from './main/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TroubleshootCardComponent } from './main/TroubleShoot/troubleshoot-card/troubleshoot-card.component';
import { FieldSupportComponent } from './main/TroubleShoot/field-support/field-support.component';
import { FieldLoginComponent } from './main/TroubleShoot/field-login/field-login.component';
import { AssignmentComponent } from './main/TroubleShoot/assignment/assignment.component';
import { DashboardComponent } from './main/TroubleShoot/dashboard/dashboard.component';
import { HeaderComponent } from './main/TroubleShoot/shared/header/header.component';
import { SidenavComponent } from './main/TroubleShoot/shared/sidenav/sidenav.component';
import {MatIconModule} from '@angular/material/icon';
import { EscalationsComponent } from './main/TroubleShoot/escalations/escalations.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AssignmentGraphComponent } from './main/TroubleShoot/assignment-graph/assignment-graph.component';
import { AssignmentIdComponent } from './main/TroubleShoot/assignment-id/assignment-id.component';
import { AssignmentMapComponent } from './main/TroubleShoot/assignment-map/assignment-map.component';
import {MatBadgeModule} from '@angular/material/badge';
import { NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TroubleshootCardComponent,
    FieldSupportComponent,
    FieldLoginComponent,
    AssignmentComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    EscalationsComponent,
    AssignmentGraphComponent,
    AssignmentIdComponent,
    AssignmentMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressBarModule,
    MatBadgeModule,
    NgxChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
