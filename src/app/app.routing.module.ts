

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

const ROUTES = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'home', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES),
    ],
    exports: [RouterModule],
    declarations: [WelcomeComponent, PageNotFoundComponent],
    providers: [],
})


export class AppRoutingModule {


}
