import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolicycrudComponent } from './policycrud/policycrud.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'policycrud', component: PolicycrudComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    PolicycrudComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
