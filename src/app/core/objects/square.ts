import { fabric } from 'fabric';
import { IProperties } from 'src/app/properties/properties';
import { IDrawableObject, ILockedScalable } from './object';

export class Square extends IDrawableObject implements ILockedScalable {
    properties?: IProperties | undefined;
    constructor(
        public object: fabric.Rect,
        public name: string,
        public length: number,
        public width: number,
        public origin: fabric.Point = new fabric.Point(0, 0)
    ) {
        super();
    }
}
