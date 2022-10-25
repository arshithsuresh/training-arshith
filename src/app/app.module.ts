import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { DesignPageComponent } from './design-page/design-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import { SotiLogoComponent } from './shared/soti-logo/soti-logo.component';
import { SideBarPalleteComponent } from './side-bar-pallete/side-bar-pallete.component';
import { CanvasComponent } from './canvas/canvas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DesignPageComponent,
    SotiLogoComponent,
    SideBarPalleteComponent,
    CanvasComponent,    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
