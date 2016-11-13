import {Routes, RouterModule} from '@angular/router';

import {IndexDefaultComponent} from './indexDefault/indexDefaultComponent';
import {FormComponent} from './form/formComponent';
import {ProductComponent} from './productPage/productComponent';
import {ProfileComponent} from './profilePage/profileComponent';

const appRoutes: Routes = <Routes>[
    {path: '', component: IndexDefaultComponent},
    {path: 'form', component: FormComponent},
    {path: 'productPage', component: ProductComponent},
    {path: 'profilePage', component: ProfileComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
