import { IDrawableObject } from "src/app/core/objects/object";

 export interface CreateShape {
    
    myShape? : IDrawableObject;    
    createShape():void;
}