import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadComponent: ()=> import('./features/pages/login/login.component').then(comp => comp.LoginComponent)
    },
    {
        path: 'cattle-list',
        loadComponent: ()=> import('./features/pages/cattle-list/cattle-list.component').then(comp => comp.CattleListComponent)
    },
];
