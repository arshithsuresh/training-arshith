import { ObjectCreatedEvent } from "./objectCreatedEvent";
import { ObjectMovedEvent } from "./objectMovedEvent";
import { ObjectRotatedEvent } from "./objectRotatedEvent";
import { ObjectScaledEvent } from "./objectScaledEvent";

export enum CANVAS_EVENT_TYPE{
    OBJECT_CREATED,
    OBJECT_DELETED,
    OBJECT_MODIFIED,
    MOUSE_EVENT,
    KEYBOARD_EVENT,
    OBJECT_SELECTED,
    OBJECT_DESELECTED
}

export type ObjectModifiedEvents = ObjectMovedEvent | ObjectScaledEvent | ObjectRotatedEvent;
export type ObjectCreatedOrRemovedEvent = ObjectCreatedEvent;