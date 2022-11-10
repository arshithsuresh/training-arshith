import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CanvasCoreService } from '../core/canvas/canvas-core.service';
import { fabric } from 'fabric';
import { IDrawableObject } from '../core/objects/object';
import { Subscription } from 'rxjs';
import { EventHandlerService } from '../core/logging/event-handle.service';
import { Store } from '@ngrx/store';
import { CanvasStoreModule } from '../state/canvas-store.module';
import { AddedObject, ObjectUpdated } from '../state/canvas/canvas.actions';
import { CanvasEvent, ICanvasEventHandlers } from '../core/events/canvasEvent';
import { CANVAS_EVENT_TYPE, ObjectModifiedEvents, ObjectCreatedOrRemovedEvent } from '../core/events/eventType';
import { Action } from '@ngrx/store';

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('canvas') _mCanvas?: ElementRef<HTMLCanvasElement>;

    canvas!: fabric.Canvas;
    private shapeCreatedSubscription!: Subscription;

    constructor(private canvasService: CanvasCoreService, private eventHandlerService: EventHandlerService, private canvasStore: Store) {
        this.shapeCreatedSubscription = this.canvasService.shapeCreated.subscribe((object) => {
            this.drawObject(object);
        });

        // this.canvasStore.dispatch(new AddedObject({
        //     event: new CanvasEvent(CANVAS_EVENT_TYPE.OBJECT_MODIFIED," "),
        //     object: new fabric.Rect(),
        //     canvasState: JSON.stringify(this.canvas)
        // }));
    }

    ngAfterViewInit(): void {
        if (this._mCanvas != null) {
            this._mCanvas.nativeElement.width = this._mCanvas.nativeElement.offsetWidth;
            this._mCanvas.nativeElement.height = this._mCanvas.nativeElement.offsetHeight;

            this.canvas = new fabric.Canvas('canvas');
            this.initEventHandlers(this.canvas);
        } else {
            console.log('Canvas Null!');
        }
    }
    dispatchAction(event:CanvasEvent, selectedObject:any){
        
        let _action: Action;
        let _canvasState = JSON.stringify(this.canvas);
        switch(event.getEventType())
        {
            case CANVAS_EVENT_TYPE.OBJECT_MODIFIED:
                _action = new ObjectUpdated(
                    {
                        canvasState:_canvasState                   
                    }
                );
            break;

            default:
                _action = new ObjectUpdated(
                    {canvasState:_canvasState,
                     //event: event,
                     //object: selectedObject
                    }
                );
        }

        this.canvasStore.dispatch(_action);
    }
    initEventHandlers(canvas: fabric.Canvas) {
        this.eventHandlerService.registedEvents.forEach((event) => {
            canvas.on(event.getEventName(), (e) => {
                if (event.active) {
                    let canvasEvent = event.constructEvent(e);
                    let canvasAction = this.eventHandlerService.handleLogEvent(canvasEvent);
                    event.handleEvent();
                    // this.canvasStore.dispatch(new AddedObject({
                    //     event: canvasEvent,
                    //     object: e.target!,
                    //     canvasState: JSON.stringify(this.canvas)
                    // }));
                    this.dispatchAction(canvasEvent, e.target!);
                }
            });
        });
    }

    ngOnInit(): void {}

    drawObject(object: IDrawableObject) {
        this.canvas.add(object.object);
    }

    ngOnDestroy(): void {
        this.shapeCreatedSubscription.unsubscribe();
    }
}
