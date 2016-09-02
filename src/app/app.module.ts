import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {ControlGroup, FormBuilder} from '@angular/common';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {IndexDefaultComponent} from './indexDefault/indexDefaultComponent';
import {FormComponent} from './form/formComponent';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        HomeComponent,
        AboutComponent,
        IndexDefaultComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule {
}
