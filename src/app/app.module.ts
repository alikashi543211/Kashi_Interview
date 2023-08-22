import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { Sb2TopbarComponent } from './sb2_admin/layouts/sb2-topbar/sb2-topbar.component';
import { Sb2FooterComponent } from './sb2_admin/layouts/sb2-footer/sb2-footer.component';
import { Sb2DashboardComponent } from './sb2_admin/sb2-dashboard/sb2-dashboard.component';
import { Sb2SidebarComponent } from './sb2_admin/layouts/sb2-sidebar/sb2-sidebar.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        EventsComponent,
        SpecialEventsComponent,
        ProfileComponent,
        Sb2TopbarComponent,
        Sb2FooterComponent,
        Sb2DashboardComponent,
        Sb2SidebarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [AuthGuard, {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
