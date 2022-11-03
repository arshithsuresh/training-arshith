import {Component, Output, EventEmitter } from "@angular/core";
import { IDrawableObject } from "src/app/core/objects/object";
@Component({
    selector: 'app-create-shape',
    template: ``,
    styles:[]
  })
 export abstract class CreateShape {
    
    @Output('onCreate') createShape = new EventEmitter<IDrawableObject>();    
    abstract create():void;
}