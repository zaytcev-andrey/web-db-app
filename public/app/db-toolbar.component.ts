import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/primeng';            //api
import { ButtonModule } from 'primeng/primeng';
import { ToolbarModule } from 'primeng/primeng';

@Component({
selector: 'db-toolbar',
template: `
            <p-toolbar>
                <div class="ui-toolbar-group-left">
                    <button (click)="Add()" pButton type="button" label="Add" icon="fa-plus"></button>
                    <button (click)="Edit()" pButton type="button" label="Edit" icon="fa-pencil-square-o"></button>
                    <button (click)="Delete()" pButton type="button" label="Delete" icon="fa-close"></button>

                    <i class="fa fa-bars"></i>
                    <button (click)="Refresh()" pButton type="button" icon="fa-refresh"></button>
                </div>            
            </p-toolbar>
`
})
export class DBToolbarComponent 
{
    @Output() onAdd = new EventEmitter<boolean>();
    @Output() onEdit = new EventEmitter<boolean>();
    @Output() onDelete = new EventEmitter<boolean>();
    @Output() onRefresh = new EventEmitter<boolean>();

    Add() {
        this.onAdd.emit();
    }

    Edit() {
        this.onEdit.emit();
    }

    Delete() {
        this.onDelete.emit();
    }

    Refresh() {
        this.onRefresh.emit();
    }
}
