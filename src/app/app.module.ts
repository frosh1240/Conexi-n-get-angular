import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';
import {MaterialModule} from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorIntl} from '@angular/material';
import {PaginatorSpanish} from './class/paginator-spanish';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{
    provide:MatPaginatorIntl, 
    useClass: PaginatorSpanish
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
