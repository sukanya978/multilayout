import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//forms and Validation
import {ReactiveFormsModule} from '@angular/forms';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Component
import { AppComponent } from './app.component';
import { AboutComponent } from './frontend/about/about.component';
import { ServiceComponent } from './frontend/service/service.component';
import { FrontendComponent } from './frontend/frontend.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ProfileComponent } from './backend/profile/profile.component';
import { SettingComponent } from './backend/setting/setting.component';
import { HomeComponent } from './frontend/home/home.component';
import { FrontendLayoutComponent } from './_layout/frontend-layout/frontend-layout.component';
import { BackendLayoutComponent } from './_layout/backend-layout/backend-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiceComponent,
    FrontendComponent,
    ContactComponent,
    DashboardComponent,
    ProfileComponent,
    SettingComponent,
    HomeComponent,
    FrontendLayoutComponent,
    BackendLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
