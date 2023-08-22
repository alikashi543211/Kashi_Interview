import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { EventsComponent } from './events/events.component';
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
    },
    {
        path: 'special',
        component: SpecialEventsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
