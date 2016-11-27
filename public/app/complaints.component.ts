import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { OnInit } from "@angular/core";
import { AgGridNg2 } from 'ag-grid-ng2/main';
import { GridOptions } from 'ag-grid/main';
import { Complaint } from './complaint';
import { ComplaintsService } from './complaints.service';
import './rxjs-operators';

@Component({
    selector: 'complaints-table',
    template: '<ag-grid-ng2 #agGrid style="height:100%;width:1600px" class="ag-fresh" \
              [gridOptions]="gridOptions" \
              enableColResize \
              enableSorting \
              enableFilter> \
              </ag-grid-ng2 >'
})

export class ComplaintsComponent implements OnInit {
    
    private gridOptions:GridOptions;
    private showGrid:boolean;

    errorMessage: string;
    dataset: Complaint[];
    mode = 'Observable';

    columnDefs = [
        {headerName: 'Дата', field: "date", width: 160 },
        {headerName: 'Организация', field: "company" ,width:200},
        {headerName: 'Описание проблемы', field: "description" ,width:160},
        {headerName: 'Деталь', field: "spare_part_id" ,width:160},
        {headerName: 'Фотография детали', field: "photo_id" ,width:160},
        {headerName: 'Скан документов', field: "docs_id" ,width:160},
        {headerName: 'Требования', field: "requirements" ,width:200},
        {headerName: 'Пути решения', field: "solution" ,width:200},
        {headerName: 'Рзультат', field: "result" ,width:200}
    ];
 
    constructor(private complaintsService: ComplaintsService) {
        this.dataset = [];
        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.dataset;
        this.gridOptions.columnDefs = this.columnDefs;
        this.showGrid = true;
    }

    ngOnInit() {         
        console.log( "OnInit works ))) " );

        this.getComplaints();
    }

    getComplaints() {

        this.complaintsService.getComplaints()
                        .subscribe(
                        complaints => {
                            Array.prototype.push.apply(this.dataset, complaints);
                            this.gridOptions.rowData = this.dataset;
                            this.gridOptions.api.setRowData( this.gridOptions.rowData );                        
                        },
                        error =>  { 
                            this.errorMessage = <any>error
                        });
    }
}