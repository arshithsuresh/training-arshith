import { fabric } from "fabric";
import { Vector2 } from "../properties/location";
import { IDrawableObject, IFreeScalable, ILockedScalable, ITwoPointObject } from "./object";

export class Circle implements IDrawableObject, ILockedScalable
{
    object: fabric.Circle;
    constructor(        
        public name:string,        
        public width:number,
        public radius:number,        
        public origin:Vector2= Vector2.zero,        
        )
    {
        this.object = new fabric.Circle(
            {
                name:name,
                radius:radius*10,
                left:origin.x, top:origin.y,
                originX:"left", originY:"top",
                fill:"transparent", stroke:"solid",
                strokeWidth:1, hasControls:false,                
            }
        )
    }

    freeScale(width: number, height: number): void{
        
    }
    
}