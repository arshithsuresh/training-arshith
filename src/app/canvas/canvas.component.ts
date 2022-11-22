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
import { IProperties } from '../properties/properties';

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('canvas') _mCanvas?: ElementRef<HTMLCanvasElement>;

    canvas!: fabric.Canvas;
    private shapeCreatedSubscription!: Subscription;
    private objectSelectedSubscription!:Subscription;
    private propertiesChangedSubscription:Subscription;
    objectSelected?: fabric.Object;

    constructor(private canvasService: CanvasCoreService,
        private eventHandlerService: EventHandlerService,
        private canvasStore: Store,
        ) {
        this.shapeCreatedSubscription = this.canvasService.shapeCreated.subscribe((object) => {
            this.drawObject(object);
            console.log(`Draw`);
        });         
        
        this.propertiesChangedSubscription = this.canvasService.propertiesChanged$.subscribe((properties)=>{
            console.log(properties);
            console.log(this.objectSelected);
            this.setObjectProperties(properties);
        })
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
    setObjectProperties(properties:IProperties){
        if(this.objectSelected != undefined)
        {
            this.objectSelected.angle = properties.angle;
            this.objectSelected.strokeWidth = properties.strokeWidth;
            this.canvas.renderAll();
        }
        
    }   

    dispatchAction(event: CanvasEvent) {
        let _action: Action;
        let _canvasState = JSON.stringify(this.canvas);
        switch (event.getEventType()) {
            case CANVAS_EVENT_TYPE.OBJECT_SELECTED:
                this.objectSelected = this.canvas.getActiveObject();
                this.canvasService.objectSelected.next(this.objectSelected);
                console.log("SELECTED")
                _action = new ObjectUpdated({
                    canvasState: _canvasState,
                    stateLog: event.getEventMessage(),
                });
                break;
            case CANVAS_EVENT_TYPE.OBJECT_DESELECTED:
                this.objectSelected = undefined;
                this.canvasService.objectSelected.next(undefined);
                console.log("UNSELECTED")

                _action = new ObjectUpdated({
                    canvasState: _canvasState,
                    stateLog: event.getEventMessage(),
                });
                break;
            case CANVAS_EVENT_TYPE.OBJECT_MODIFIED:
                _action = new ObjectUpdated({
                    canvasState: _canvasState,
                    stateLog: event.getEventMessage(),
                });
                break;
            default:
                _action = new ObjectUpdated({ canvasState: _canvasState, stateLog: event.getEventMessage() });
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
                    console.log(e.target);                    
                    this.dispatchAction(canvasEvent);
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
        this.objectSelectedSubscription.unsubscribe();
        this.propertiesChangedSubscription.unsubscribe();
    }
}
