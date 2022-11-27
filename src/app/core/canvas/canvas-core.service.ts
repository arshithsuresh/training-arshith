import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import { ICanvasEventHandler } from '../events/canvasEvent';
import { IDrawableObject } from '../objects/object';
import { Rectangle } from '../objects/rectangle';
import { fabric } from 'fabric';
import { IProperties } from 'src/app/properties/properties';



@Injectable({
  providedIn: 'root'
})
export class CanvasCoreService {

  objects:Map<string,IDrawableObject>= new Map();
  currentSelectedObject?:string;
  
  objectSelected: Subject<fabric.Object> = new Subject();
  objectSelected$ = this.objectSelected.asObservable();

  propertiesChanged: Subject<IProperties> = new Subject();
  propertiesChanged$ = this.propertiesChanged.asObservable();

  shapeCreated : Subject<IDrawableObject> = new Subject();
  shapeCreated$ = this.shapeCreated.asObservable();

  canvasObjectSelected : Subject<fabric.Object> = new Subject();
  canvasObjectSelected$ = this.canvasObjectSelected.asObservable();

  constructor() {

    this.canvasObjectSelected$.subscribe((obj)=>{
      
    })
  }

  getObjectByValue(object:fabric.Object):string|undefined
  {
    for(let [key,value] of this.objects.entries())
    {
      if(value.object == object)
      {
        return key;
      }
    }
    return undefined
  }

  renameObject(shapeName:string, suffix:number=0):string{
    if(suffix == 0)
    {
      if(this.objects.has(shapeName))
      {
        return this.renameObject(shapeName, suffix+1)
      }
      return shapeName
    }
    if(this.objects.has(shapeName+suffix))
    {
      return this.renameObject(shapeName, suffix+1)
    }
    return shapeName+suffix
    
  }

  createShape(shape:IDrawableObject)
  {
    let objectName = this.renameObject(shape.name);
    this.objects.set(objectName,shape);
    this.shapeCreated.next(shape)
  }
  
}
