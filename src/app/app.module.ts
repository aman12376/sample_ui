import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialExampleModule} from '../material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderLayoutComponent } from './layouts/header-layout/header-layout.component';
import { BtnGrpLayoutComponent } from './layouts/btn-grp-layout/btn-grp-layout.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridLayoutComponent } from './layouts/ag-grid-layout/ag-grid-layout.component';
import {KeycloakService} from "keycloak-angular";
import {AuthService} from "../authGuard/AuthService";
import {initializer} from "../authGuard/AppAuthGuard";

@NgModule({
  declarations: [
    AppComponent,
    HeaderLayoutComponent,
    BtnGrpLayoutComponent,
    AgGridLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
