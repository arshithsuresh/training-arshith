
import { fabric } from "fabric";
import { IProperties } from "src/app/properties/properties";

export abstract class IDrawableObject{
    abstract object:fabric.Object;
    abstract name:string;      
    abstract origin:fabric.Point;
    abstract properties?:IProperties;

    setStrokeWidth(width:number){
        this.object.strokeWidth = width;
    }

    setFillColor(color:string){
        this.object.set("fill",color)
    }

    setAngle(angle:number){
        this.object.set("angle", angle)
    }

    setStrokeColor(color:string){
        this.object.set("stroke", color)
    }
}

export interface IFreeScalable{
    width:number;
    height:number;

    freeScale(width:number, height:number):void;
}

export interface ILockedScalable{
    width:number;    
}
export interface ITwoPointObject{
    end:fabric.Point;
}
