import { Routes } from '@angular/router';
import { Panes } from './components/panes/panes';
import { Pizzas } from './components/pizzas/pizzas';

export const routes: Routes = [
    { path: '', redirectTo: 'panes', pathMatch: 'full' },
    { path: 'panes', component: Panes },
    { path: 'pizzas', component: Pizzas },
];
