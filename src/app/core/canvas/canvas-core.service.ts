import { Injectable, ViewChild,EventEmitter} from '@angular/core';
import { fabric } from 'fabric';
import { Canvas } from 'fabric/fabric-impl';
import { IDrawableObject } from '../objects/object';
import { Rectangle } from '../objects/rectangle';



@Injectable({
  providedIn: 'root'
})
export class CanvasCoreService {
  
  objects:Map<string,IDrawableObject>= new Map();  
  canvas!:Canvas;
  
  shapeCreated : EventEmitter<IDrawableObject> = new EventEmitter();

  constructor() {        
  }

}
