import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/primeng';     //accordion and accordion tab
import { MenuItem } from 'primeng/primeng';            //api
import { TabViewModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { SparePartsComponent }  from './spare_parts.component';
import { ComplaintsComponent } from './complaints.component';

@Component({
selector: 'my-tab',
template: `
            <p-tabView>
                <p-tabPanel header="Требования к запчастям">
                    <spare-parts-table></spare-parts-table>
                </p-tabPanel>
                <p-tabPanel header="Рекламации">
                    <complaints-table></complaints-table>
                </p-tabPanel>
                <p-tabPanel header="Отчет по приходу товара">
                    During implementation
                </p-tabPanel>
                <p-tabPanel header="Детали на просчет">
                    During implementation
                </p-tabPanel>
                <p-tabPanel header="Острая необходимость">
                    During implementation
                </p-tabPanel> 
                <p-tabPanel header="Заявка на поставку в Ростов">
                    During implementation
                </p-tabPanel>
                <p-tabPanel header="Прайс-лист">
                    During implementation
                </p-tabPanel>                                            
            </p-tabView>
`,
})
export class TabComponent {

}
