import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';


import {RouterModule,Routes} from '@angular/router'
import { HttpModule } from '@angular/http';
const appRoutes:Routes=[
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'',redirectTo:'about',pathMatch:'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,AboutComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
