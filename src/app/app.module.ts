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

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        HomeComponent,
        AboutComponent,
        IndexDefaultComponent,
        ProductComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing,
        ReactiveFormsModule

    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule {
}
