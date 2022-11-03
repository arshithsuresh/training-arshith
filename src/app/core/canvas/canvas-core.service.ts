import { Injectable, ViewChild,EventEmitter} from '@angular/core';
import { fabric } from 'fabric';
import { Canvas } from 'fabric/fabric-impl';
import { Subject } from 'rxjs';
import { IDrawableObject } from '../objects/object';
import { Rectangle } from '../objects/rectangle';



@Injectable({
  providedIn: 'root'
})
export class CanvasCoreService {
  
  objects:Map<string,IDrawableObject>= new Map();  
  canvas!:Canvas;
  
  shapeCreated : Subject<IDrawableObject> = new Subject();

  constructor() {
  }

  createShape(shape:IDrawableObject)
  {
    this.shapeCreated.next(shape)
  }


}
