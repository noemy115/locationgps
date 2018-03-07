import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from "@angular/router";
import {MatButtonModule} from "@angular/material";

const appRouter: Routes = [
  {path: "", component: AppComponent},
  {path: "login", component: LoginComponent},
];


@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    RouterModule.forRoot(appRouter),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
