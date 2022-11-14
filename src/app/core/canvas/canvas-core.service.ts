import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import { IDrawableObject } from '../objects/object';
import { Rectangle } from '../objects/rectangle';
import { fabric } from 'fabric';
import { IProperties } from 'src/app/properties/properties';



@Injectable({
  providedIn: 'root'
})
export class CanvasCoreService {

  objects:Map<string,IDrawableObject>= new Map(); 
  
  objectSelected: Subject<fabric.Object> = new Subject();
  objectSelected$ = this.objectSelected.asObservable();

  propertiesChanged: Subject<IProperties> = new Subject();
  propertiesChanged$ = this.propertiesChanged.asObservable();

  shapeCreated : Subject<IDrawableObject> = new Subject();
  shapeCreated$ = this.shapeCreated.asObservable();

  constructor() {  
  }   
  
  createShape(shape:IDrawableObject)
  {
    this.shapeCreated.next(shape)
  }

  getObjectProperties(object:fabric.Object):IProperties
    {
        let currentProperties: IProperties = {
        angle: 0,
        strokeWidth: 0,
        strokeColor: "FFFFFF",

        }
        if(this.objectSelected)
        {
        currentProperties = {
            angle:object.angle!,
            strokeColor: object.get("fill")!.toString(),
            strokeWidth:object.strokeWidth!
        } 
        }
        return currentProperties;
    }


}
