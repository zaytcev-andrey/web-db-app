import { AfterViewInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/primeng';            //api
import { ButtonModule } from 'primeng/primeng';
import { ToolbarModule } from 'primeng/primeng';
import { DBToolbarComponent } from './db-toolbar.component'
import { SparePartsComponent }  from './spare_parts.component';
import { SparePartAddDialogComponent } from './spare_part_add_dialog.component';

@Component({
selector: 'spare-parts-db',
template: `
            <db-toolbar
                (onAdd)="onAdd($event)"
                (onRefresh)="onRefresh($event)">
            </db-toolbar>
            <spare-parts-table></spare-parts-table>
            <spare-part-add-dialog></spare-part-add-dialog>
`
})

export class SparePartsDBComponent {
  
    @ViewChild( SparePartsComponent )
    private sparePartsComponent: SparePartsComponent;

    @ViewChild( SparePartAddDialogComponent )
    private sparePartAddDialogComponent: SparePartAddDialogComponent;
    
    onAdd() {
        this.sparePartAddDialogComponent.showDialog();
    }
    
    onRefresh() {
        this.sparePartsComponent.getHeroes();
    }
}
