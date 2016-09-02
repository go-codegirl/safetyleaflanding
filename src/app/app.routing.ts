import {Routes, RouterModule} from '@angular/router';

import {IndexDefaultComponent} from './indexDefault/indexDefaultComponent';
import {FormComponent} from './form/formComponent';

const appRoutes: Routes = <Routes>[
    {path: '', component: IndexDefaultComponent},
    {path: 'form', component: FormComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
