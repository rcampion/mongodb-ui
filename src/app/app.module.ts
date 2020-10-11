import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { RequestInterceptor } from './core/services/request.interceptor';
import { LayoutComponent } from './layout/layout.component';
// import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';

import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { ErrorService } from './core/services/error.service';

import { ErrorComponent } from './error/error.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ContactDeleteDialogComponent } from './contact/contact-delete/contact-delete-dialog.component';
import { EmailComponent } from './email/email.component';

@NgModule({
      declarations: [
            AppComponent,
            LayoutComponent,
            AboutComponent,
            HeaderComponent,
            SidenavListComponent,
            ErrorComponent,
            FooterComponent,
            ContactDeleteDialogComponent,
            EmailComponent
      ],
      entryComponents: [
            ContactDeleteDialogComponent

      ],
      imports: [
            BrowserModule,
            BrowserAnimationsModule,
            CoreModule,
            RouterModule,
            MaterialModule,
            FlexLayoutModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            SharedModule
      ],
    providers: [{
        provide: 'externalUrlRedirectResolver',
        useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
            //window.location.href = (route.data as any).externalUrl;
            let url = (route.data as any).externalUrl;
            window.open(url, '_blank');
        }
    },
        ErrorService,
    ],
      bootstrap: [AppComponent, ErrorComponent]
})
export class AppModule { }
