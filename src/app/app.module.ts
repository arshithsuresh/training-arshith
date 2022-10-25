import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { DesignPageComponent } from './design-page/design-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon'
import { SotiLogoComponent } from './shared/soti-logo/soti-logo.component';
import { SideBarPalleteComponent } from './side-bar-pallete/side-bar-pallete.component';
import { CanvasComponent } from './canvas/canvas.component';
import { CanvasToolbarComponent } from './canvas-toolbar/canvas-toolbar.component';
import { PropertiesComponent } from './properties/properties.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DesignPageComponent,
    SotiLogoComponent,
    SideBarPalleteComponent,
    CanvasComponent,
    CanvasToolbarComponent,
    PropertiesComponent,    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
