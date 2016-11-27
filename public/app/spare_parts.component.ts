import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { OnInit } from "@angular/core";
import { AgGridNg2 } from 'ag-grid-ng2/main';
import { GridOptions } from 'ag-grid/main';
import { SparePart } from './spare_part';
import { SparePartsService } from './spare_parts.service';
import './rxjs-operators';

@Component({
    selector: 'spare-parts-table',
    template: '<ag-grid-ng2 #agGrid style="height:100%;width:1140px" class="ag-fresh" \
              [gridOptions]="gridOptions" \
              enableColResize \
              enableSorting \
              enableFilter> \
              </ag-grid-ng2 >'
})

export class SparePartsComponent implements OnInit {
    
    private gridOptions:GridOptions;
    private showGrid:boolean;
    private rowData:any[];
    private rowCount:string;

    errorMessage: string;
    heroes: SparePart[];
    mode = 'Observable';

    spareParts = [];
 
    columnDefs = [
        {headerName: 'Код детали', field: "code", width: 200 },
        {headerName: 'Название детали', field: "name" ,width:180},
        {headerName: 'Описание', field: "description" ,width:160},
        {headerName: 'Комментарий воронеж', field: "comment_voronezh" ,width:300},
        {headerName: 'Комментарий ростов', field: "comment_rostov" ,width:300}
    ];
 
    constructor(private heroService: SparePartsService) {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.spareParts;
        this.gridOptions.columnDefs = this.columnDefs;
        this.showGrid = true;
    }

    ngOnInit() {         
        console.log( "OnInit works ))) " );

        this.getHeroes();
    }

    getHeroes() {

        this.heroService.getHeroes()
                        .subscribe(
                        heroes => {                             
                            Array.prototype.push.apply(this.spareParts, heroes);
                            this.gridOptions.rowData = this.spareParts;
                            this.gridOptions.api.setRowData( this.gridOptions.rowData );                        
                        },
                        error =>  { 
                            this.errorMessage = <any>error
                        });
    }
}