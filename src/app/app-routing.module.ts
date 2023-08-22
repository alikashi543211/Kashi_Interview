import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sb2DashboardComponent } from './sb2_admin/sb2-dashboard/sb2-dashboard.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/sb2_dashboard',
        pathMatch: 'full'
    },
    {
        path: 'sb2_dashboard',
        component: Sb2DashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
