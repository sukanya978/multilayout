import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendLayoutComponent } from './_layout/frontend-layout/frontend-layout.component';
import { HomeComponent } from './frontend/home/home.component';
import { AboutComponent } from './frontend/about/about.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { ServiceComponent } from './frontend/service/service.component';
import { BackendLayoutComponent } from './_layout/backend-layout/backend-layout.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { SettingComponent } from './backend/setting/setting.component';
import { ProfileComponent } from './backend/profile/profile.component';

const brand:string = "|IT Genius Engineering"

const routes: Routes = [
  {
  path:'',component:FrontendLayoutComponent,
  children:[
    {path:'',component:HomeComponent,pathMatch:'full'},
    {path:'about',component:AboutComponent,data:{title:'About'}},
    {path:'contact',component:ContactComponent,data:{title:'Contact'}},
    {path:'service',component:ServiceComponent,data:{title:'Service'}},
  ]
  },

  //backend
  {
    path:'backend',component:BackendLayoutComponent,
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'profile',component:ProfileComponent},
      {path:'setting',component:SettingComponent},

    ]
  },
  //Not found URL route
  {path:'**',redirectTo:''}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }