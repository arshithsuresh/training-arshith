import { Injectable} from '@angular/core';
import { Store } from '@ngrx/store';
import { fabric } from 'fabric';
import { Canvas } from 'fabric/fabric-impl';
import { Subject } from 'rxjs';
import { CanvasStoreModule } from 'src/app/state/canvas-store.module';
import { AddedObject, ObjectMoved } from 'src/app/state/canvas/canvas.actions';
import { CanvasEvent } from '../events/canvasEvent';
import { CANVAS_EVENT_TYPE } from '../events/eventType';
import { ObjectCreatedEvent } from '../events/objectCreatedEvent';
import { IDrawableObject } from '../objects/object';
import { Rectangle } from '../objects/rectangle';



@Injectable({
  providedIn: 'root'
})
export class CanvasCoreService {

  objects:Map<string,IDrawableObject>= new Map();    
  
  shapeCreated : Subject<IDrawableObject> = new Subject();
  shapeCreated$ = this.shapeCreated.asObservable();

  constructor(private store: Store<CanvasStoreModule>) {  
    store.dispatch(new AddedObject({
      event: new CanvasEvent(CANVAS_EVENT_TYPE.OBJECT_CREATED,"Test"),
      object: new Rectangle("test", 10, 10, 10)
    }))  
  }

  createShape(shape:IDrawableObject)
  {
    this.shapeCreated.next(shape)
  }


}
