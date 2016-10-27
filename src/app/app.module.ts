import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {IndexDefaultComponent} from './indexDefault/indexDefaultComponent';
import {FormComponent} from './form/formComponent';
import {ProductComponent} from './productPage/productComponent';
import {ProfileComponent} from './profilePage/profileComponent';
import {LoginFormComponent} from './loginForm/loginFormComponent';
import {FooterComponent} from './footer/footerComponent';
import {profileDataServices} from './service/profileDataService';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        HomeComponent,
        AboutComponent,
        IndexDefaultComponent,
        ProductComponent,
        ProfileComponent,
        LoginFormComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing,
        ReactiveFormsModule

    ],
    providers: [appRoutingProviders,profileDataServices],
    bootstrap: [AppComponent]
})

export class AppModule {
}
