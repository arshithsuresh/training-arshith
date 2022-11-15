import { fabric } from "fabric";
import { IProperties } from "src/app/properties/properties";
import { IDrawableObject, IFreeScalable, ILockedScalable, ITwoPointObject } from "./object";

export class Circle extends IDrawableObject implements ILockedScalable
{
    object: fabric.Circle;
    properties?:IProperties;
    
    constructor(        
        public name:string,        
        public width:number,
        public radius:number,        
        public origin:fabric.Point= new fabric.Point(0,0),        
        )
    {
        super();

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