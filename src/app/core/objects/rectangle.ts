import { fabric } from 'fabric';
import { Point } from 'fabric/fabric-impl';
import { IProperties } from 'src/app/properties/properties';
import { IDrawableObject, IFreeScalable, ITwoPointObject } from './object';

export class Rectangle extends IDrawableObject implements IFreeScalable {

    object: fabric.Object;
    properties?: IProperties;
    constructor(
        public name: string,
        public length: number,
        public width: number,
        public height: number,
        public origin: fabric.Point = new fabric.Point(0, 0)
    ) {
        super();
        this.object = new fabric.Rect({
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

        this.object.on('scaled', (event) => {});
    }

    freeScale(width: number, height: number): void {}
}
