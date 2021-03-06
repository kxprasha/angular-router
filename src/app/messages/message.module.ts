import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';
import { MessageService } from './message.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([{outlet: 'popup', component: MessageComponent ,
    path: 'messages'}])
    ],
    declarations: [
        MessageComponent
    ],
    providers: [
        MessageService
    ]
})
export class MessageModule { }
