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
  canvasLoaded:EventEmitter<HTMLCanvasElement> = new EventEmitter();
  canvas!:Canvas;
  constructor() {
    this.canvasLoaded.subscribe((newCanvas)=>{
      this.canvas = new fabric.Canvas(newCanvas); 
      
      this.canvas.on("mouse:down",(options)=>{
        if(options.target)
        {
          console.log(options.target.name);
        }
      });
      
    });  
    
  }

  addObject(id:string, object:IDrawableObject, rename:number=0)
  {
    
  }

  drawObject(object:IDrawableObject){     
    this.addObject(object.name, object);
    this.canvas.add(object.object);
  }

  

}
