import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule }  from 'ag-grid-ng2/main';
import { AppComponent }  from './app.component';
import { SparePartsService }  from './spare_parts.service';
import { ComplaintsService } from './complaints.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { TabComponent }  from './tab.component';
import { SparePartsComponent }  from './spare_parts.component';
import { ComplaintsComponent } from './complaints.component';
import { InputTextModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';

@NgModule({
  imports:      [ 
    BrowserModule, 
    AgGridModule.withNg2ComponentSupport(),
    HttpModule,
    JsonpModule,
    InputTextModule,
    TabViewModule
  ],
  providers: [ SparePartsService,
               ComplaintsService ],
  declarations: [ AppComponent, 
                  TabComponent,
                  SparePartsComponent,
                  ComplaintsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }