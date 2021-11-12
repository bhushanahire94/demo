import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule }    from '@angular/common/http';  
import {ServiceService} from './service/service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  

@NgModule({  
  declarations: [  
    AppComponent  
  ],  
  imports: [  
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule, NgbModule  
  
  ],  
  providers: [ServiceService],
  bootstrap: [AppComponent]  
})  
export class AppModule { } 
