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
import { EventInspectorComponent } from './event-inspector/event-inspector.component';
import { CreateRectComponent } from './side-bar-pallete/collections/create-rect/create-rect.component';
import { CreateCircleComponent } from './side-bar-pallete/collections/create-circle/create-circle.component';
import { CreateTriangleComponent } from './side-bar-pallete/collections/create-triangle/create-triangle.component';
import {  StoreModule, META_REDUCERS } from '@ngrx/store';
import { CanvasReducers } from './core/canvas-store/canvas.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { GeneralPropertiesComponent } from './properties/general-properties/general-properties.component';
import { UndoRedoMetaReducer } from './core/canvas-store/canvas.meta';
import { UndoRedoService } from './core/undoredo/undoredo.service';

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
    EventInspectorComponent,
    CreateRectComponent,    
    CreateCircleComponent, CreateTriangleComponent, GeneralPropertiesComponent     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    StoreModule.forRoot(CanvasReducers),
    StoreDevtoolsModule.instrument({
      maxAge:25
    })
  ],
  providers: [
    {
      provide: META_REDUCERS,
      deps:[UndoRedoService],
      useFactory: UndoRedoMetaReducer,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
