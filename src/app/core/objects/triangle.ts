import { fabric } from 'fabric';
import { IProperties } from 'src/app/properties/properties';
import { IDrawableObject, ILockedScalable } from './object';

export class Triangle extends IDrawableObject implements ILockedScalable {
    public object: fabric.Triangle;
    properties?: IProperties={
        angle:0,
        fillColor: "FFFFFF00",
        strokeColor: "FFFFFF",
        strokeWidth: 0
    };
    constructor(public name: string, public height: number, public width: number, public origin: fabric.Point = new fabric.Point(0, 0)) {
        super();
        this.object = new fabric.Triangle({
            name: name,
            width: width,
            height: height,
            left: origin.x,
            top: origin.y,
            originX: 'left',
            originY: 'top',
            fill: 'transparent',
            stroke: 'solid',
            strokeWidth: 1,
            strokeUniform: true,
        });
    }
}
