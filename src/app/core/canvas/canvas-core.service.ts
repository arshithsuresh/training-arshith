import { Injectable} from '@angular/core';
import { fabric } from 'fabric';
import { Canvas } from 'fabric/fabric-impl';
import { Subject } from 'rxjs';
import { ICanvasEvent } from '../events/canvasEvent';
import { IDrawableObject } from '../objects/object';
import { Rectangle } from '../objects/rectangle';



@Injectable({
  providedIn: 'root'
})
export class CanvasCoreService {

  objects:Map<string,IDrawableObject>= new Map();    
  
  shapeCreated : Subject<IDrawableObject> = new Subject();
  shapeCreated$ = this.shapeCreated.asObservable();

  constructor() {     
  }

  createShape(shape:IDrawableObject)
  {
    this.shapeCreated.next(shape)
  }


}
