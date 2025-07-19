import { Routes } from '@angular/router';
import { Panes } from './components/panes/panes';
import { Disponibles } from './components/disponibles/disponibles';

export const routes: Routes = [
    { path: '', redirectTo: 'panes', pathMatch: 'full' },
    { path: 'panes', component: Panes },
    { path: 'disponibles', component: Disponibles },
];
