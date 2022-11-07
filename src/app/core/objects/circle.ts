import { fabric } from "fabric";
import { IDrawableObject, IFreeScalable, ILockedScalable, ITwoPointObject } from "./object";

export class Circle implements IDrawableObject, ILockedScalable
{
    object: fabric.Circle;
    constructor(        
        public name:string,        
        public width:number,
        public radius:number,        
        public origin:fabric.Point= new fabric.Point(0,0),        
        )
    {
        this.object = new fabric.Circle(
            {
                name:name,
                radius:radius*10,
                left:origin.x, top:origin.y,
                originX:"left", originY:"top",
                fill:"transparent", stroke:"solid",
                strokeWidth:1,
                strokeUniform:true,
                          
            }
        )
    }

    freeScale(width: number, height: number): void{
        
    }
    
}