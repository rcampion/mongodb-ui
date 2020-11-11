import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ErrorComponent } from '../error/error.component';
import { EmailComponent } from '../email/email.component';
import { TestComponent } from '../test/test.component';

const routes: Routes = [
    { path: 'test', component: TestComponent },
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'home',
        loadChildren: () => import("./../home/home.module").then(m => m.HomeModule)},
    {
        path: 'contact',
        loadChildren: () => import("./../contact/contact.module").then(m => m.ContactModule)
    },
    { path: 'email/:id', component: EmailComponent },
    {
        path: 'dashboard',
        component: AboutComponent,
        resolve: {
            url: 'externalUrlRedirectResolver'
        },
        data: {
            externalUrl: 'https://www.zdslogic.com/dashboard'
        }
    },
    {
        path: 'logs',
        component: AboutComponent,
        resolve: {
            url: 'externalUrlRedirectResolver'
        },
        data: {
            externalUrl: 'https://www.zdslogic.com/dashboard/log/logs'
        }
    },
    {
        path: 'whois',
        component: AboutComponent,
        resolve: {
            url: 'externalUrlRedirectResolver'
        },
        data: {
            externalUrl: 'https://www.zdslogic.com/dashboard/whois'
        }
    },


];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

