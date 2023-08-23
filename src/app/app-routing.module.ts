import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sb2DashboardComponent } from './sb2_admin/sb2-dashboard/sb2-dashboard.component';
import { GeneralInterviewComponent } from './sb2_admin/pages/general-interview/general-interview.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/sb2_dashboard',
        pathMatch: 'full'
    },
    {
        path: 'sb2_dashboard',
        children: [
            {
                path: '',
                component: Sb2DashboardComponent
            },
            {
                path: 'general_interview',
                component: GeneralInterviewComponent
            },
        ]
    },
    {
        path: '**',
        redirectTo: '/sb2_dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
