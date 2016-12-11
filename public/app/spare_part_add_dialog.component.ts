import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { SparePart } from './spare_part';

@Component({
selector: 'spare-part-add-dialog',
template: `
            <p-dialog header="Новое требование к запчастям" [(visible)]="display" modal="modal" width="900" responsive="true">
                <form [formGroup]="userform" (ngSubmit)="onSubmit(userform.value)">
                    <p-panel header="Validate">
                        <div class="ui-grid ui-grid-responsive ui-grid-pad ui-fluid" style="margin: 10px 0px">
                            <div class="ui-grid-row">
                                <div class="ui-grid-col-2">
                                    Код детали *:
                                </div>
                                <div class="ui-grid-col-6">
                                    <input pInputText [(ngModel)]="sparePart.code" type="text" formControlName="code" placeholder="Required"/>
                                </div>
                                <div class="ui-grid-col-4">
                                    <div class="ui-message ui-messages-error ui-corner-all" *ngIf="!userform.controls['code'].valid&&userform.controls['code'].dirty">
                                        <i class="fa fa-close"></i>
                                        Требуется ввести Код детали
                                    </div>
                                </div>
                            </div>
                            <div class="ui-grid-row">
                                <div class="ui-grid-col-2">
                                    Название детали *:
                                </div>
                                <div class="ui-grid-col-6">
                                    <input pInputText type="text" [(ngModel)]="sparePart.name" formControlName="name" placeholder="Required"/>
                                </div>
                                <div class="ui-grid-col-4">
                                    <div class="ui-message ui-messages-error ui-corner-all" *ngIf="!userform.controls['name'].valid&&userform.controls['name'].dirty">
                                        <i class="fa fa-close"></i>
                                        Требуется ввести Название детали
                                    </div>
                                </div>
                            </div>
                            <div class="ui-grid-row">
                                <div class="ui-grid-col-2">
                                    Описание *:
                                </div>
                                <div class="ui-grid-col-6">
                                    <input pInputText type="text" [(ngModel)]="sparePart.description" formControlName="description" placeholder="Required"/>
                                </div>
                                <div class="ui-grid-col-4">
                                    <div class="ui-message ui-messages-error ui-corner-all" *ngIf="!userform.controls['description'].valid&&userform.controls['description'].dirty">
                                        <i class="fa fa-close"></i>
                                        Требуется ввести Описание
                                    </div>
                                </div>
                            </div>
                            <div class="ui-grid-row">
                                <div class="ui-grid-col-2">
                                    Комментарий воронеж:
                                </div>
                                <div class="ui-grid-col-6">
                                    <textarea pInputTextarea type="text" [(ngModel)]="sparePart.comment_voronezh" formControlName="comment_voronezh"></textarea>
                                </div>
                                <div class="ui-grid-col-4"></div>
                            </div>
                            <div class="ui-grid-row">
                                <div class="ui-grid-col-2">
                                    Комментарий ростов:
                                </div>
                                <div class="ui-grid-col-6">
                                    <textarea pInputTextarea type="text" [(ngModel)]="sparePart.comment_rostov" formControlName="comment_rostov"></textarea>
                                </div>
                                <div class="ui-grid-col-4"></div>
                            </div>
                            <div style="text-align:center;margin-top:20px" *ngIf="submitted">
                                Form Submitted
                                <br>
                                {{diagnostic}}
                            </div>
                        </div>   
                    </p-panel>
                    <footer>
                        <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
                            <button type="button" pButton icon="fa-close" (click)="display=false" label="No"></button>
                            <button type="submit" pButton icon="fa-check" [disabled]="!userform.valid" label="Yes"></button>
                        </div>
                    </footer> 
                </form>
            </p-dialog>

            <button type="text" (click)="showDialog()" pButton icon="fa-external-link-square" label="Show"></button>
`
})

export class SparePartAddDialogComponent {
  
    display: boolean = false;
    
    userform: FormGroup;
    
    submitted: boolean;
        
    sparePart = new SparePart();

    formBuilder: FormBuilder;

    constructor( @Inject( FormBuilder) fb: FormBuilder ) {
        this.formBuilder = fb;
        this.createForm();
    }

    createForm() {
        this.userform = this.formBuilder.group({
            'code': new FormControl('', Validators.required),
            'name': new FormControl('', Validators.required),
            'description': new FormControl('', Validators.required),
            'comment_voronezh': new FormControl(''),
            'comment_rostov': new FormControl('')
        });
    }

    showDialog() {
        this.createForm();
        this.display = true;
    }
    
    onSubmit(value: string) {
        this.submitted = true;
        console.log("submited");
        console.log( this.sparePart );
        this.display = false;
    }

    getSparePart(): SparePart {
        return this.sparePart;
    }
}
