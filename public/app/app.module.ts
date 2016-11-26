import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule }  from 'ag-grid-ng2/main';
import { AppComponent }  from './app.component';
import { SparePartsService }  from './spare_parts.service';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports:      [ 
    BrowserModule, 
    AgGridModule.withNg2ComponentSupport(),
    HttpModule,
    JsonpModule 
  ],
  providers: [ SparePartsService ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }