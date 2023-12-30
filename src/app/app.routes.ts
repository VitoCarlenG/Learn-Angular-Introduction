import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';

export const routes: Routes = [
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
