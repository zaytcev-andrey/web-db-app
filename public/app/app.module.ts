import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule }  from 'ag-grid-ng2/main';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, AgGridModule.withNg2ComponentSupport() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }