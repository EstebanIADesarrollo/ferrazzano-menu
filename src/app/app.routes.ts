import { Routes } from '@angular/router';
import { Panes } from './components/panes/panes';
import { Pizzas } from './components/pizzas/pizzas';
import { Beneficios } from './components/beneficios/beneficios';

export const routes: Routes = [
    { path: '', component: Beneficios },
    { path: 'panes', component: Panes },
    { path: 'pizzas', component: Pizzas },
];
