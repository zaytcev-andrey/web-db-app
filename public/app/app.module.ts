import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule }  from 'ag-grid-ng2/main';
import { AppComponent }  from './app.component';
import { SparePartsService }  from './spare_parts.service';
import { ComplaintsService } from './complaints.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { TabComponent }  from './tab.component';
import { SparePartsComponent }  from './spare_parts.component';
import { SparePartsDBComponent } from './spare_parts_db.component';
import { SparePartAddDialogComponent } from './spare_part_add_dialog.component';
import { ComplaintsComponent } from './complaints.component';
import { DBToolbarComponent } from './db-toolbar.component';
import { ButtonModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { ToolbarModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';

@NgModule({
  imports:      [ 
    BrowserModule, 
    AgGridModule.withNg2ComponentSupport(),
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    TabViewModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    PanelModule
  ],
  providers: [ SparePartsService,
               ComplaintsService ],
  declarations: [ AppComponent, 
                  TabComponent,
                  SparePartsComponent,
                  ComplaintsComponent,
                  DBToolbarComponent,
                  SparePartsDBComponent,
                  SparePartAddDialogComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }