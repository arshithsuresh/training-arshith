import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CanvasCoreService } from '../core/canvas/canvas-core.service';
import { fabric } from 'fabric';
import { IDrawableObject } from '../core/objects/object';
import { Subscription } from 'rxjs';
import { EventHandlerService } from '../core/logging/event-handle.service';
import { Action, select, Store } from '@ngrx/store';
import { CanvasStateModifiedAction } from '../core/canvas-store/canvas.actions';
import { canvasStateSelector } from '../core/canvas-store/canvas.selectors';
import { CanvasEvent } from '../core/events/canvasEvent';
import { CANVAS_EVENT_TYPE } from '../core/events/eventType';
import { PropertiesPanelServiceService } from '../properties/properties-panel-service.service';

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('canvas') _mCanvas?: ElementRef<HTMLCanvasElement>;

    canvas!: fabric.Canvas;
    private shapeCreatedSubscription!: Subscription;
    canvasStateSelector$ = this.canvasStore.pipe(select(canvasStateSelector));

    constructor(
        private canvasService: CanvasCoreService,
        private eventHandlerService: EventHandlerService,
        private canvasStore: Store<CanvasState>,
        private propertyPanelService : PropertiesPanelServiceService
    ) {
        this.canvasStateSelector$.subscribe((state) => {
            console.log(state);
            if (state.applyState == true) {
                this.canvas.off();
                this.canvas.loadFromJSON(state.canvasState, () => {
                    this.canvas.renderAll();
                    this.initEventHandlers();
                });
            }
        });
    }

    ngAfterViewInit(): void {
        if (this._mCanvas != null) {
            this._mCanvas.nativeElement.width = this._mCanvas.nativeElement.offsetWidth;
            this._mCanvas.nativeElement.height = this._mCanvas.nativeElement.offsetHeight;
            this.canvas = new fabric.Canvas('canvas');
            this.initEventHandlers();
            this.initSubscribers();
        } else {
            console.log('Canvas Null!');
        }
    }

    dispatchAction(hasHistory:boolean, action:Action) {
        if(hasHistory){
            this.canvasStore.dispatch(action);
        }
    }

    handleEvent(event: CanvasEvent) {
        let action = new CanvasStateModifiedAction({ canvasState: JSON.stringify(this.canvas), applyState: false });

        switch (event.getEventType()) {
            case CANVAS_EVENT_TYPE.OBJECT_CREATED:     
                this.dispatchAction(event.hasHistory, action)           
                break;
            case CANVAS_EVENT_TYPE.OBJECT_SELECTED:
                if (this.canvas.getActiveObjects().length == 1) {
                    console.log('Object Selected');
                    this.canvasService.canvasObjectSelected.next(this.canvas.getActiveObject());
                } else {
                    console.log('Multiple Object Selected');
                    this.canvasService.canvasObjectSelected.next(undefined);
                }
                break;
            case CANVAS_EVENT_TYPE.OBJECT_DESELECTED:
                if (this.canvas.getActiveObjects().length == 0) {
                    console.log('Object de selected');
                    this.canvasService.canvasObjectSelected.next(undefined);
                }
            break;
            case CANVAS_EVENT_TYPE.OBJECT_MODIFIED:                
                this.dispatchAction(event.hasHistory, action)
                console.log("Object Modified")
            break;
            case CANVAS_EVENT_TYPE.OBJECT_TRANSFORM_MODIFIED:                
            break;
        }

        
    }

    initSubscribers() {
        this.shapeCreatedSubscription = this.canvasService.shapeCreated.subscribe((object) => {
            this.canvas.add(object.object);
            // this.dispatchAction(new CanvasStateModifiedAction({ canvasState: JSON.stringify(this.canvas), applyState: false }));
        });

        this.propertyPanelService.objectPropertiesChanged$.subscribe((property)=>{
            this.canvas.getActiveObject()._set(property.name, property.value)
            this.canvas.renderAll();
            let action = new CanvasStateModifiedAction({ canvasState: JSON.stringify(this.canvas), applyState: false });
            this.dispatchAction(true, action);
        })
    }

    initEventHandlers() {
        this.eventHandlerService.registedEvents.forEach((event) => {
            this.canvas.on(event.getEventName(), (e) => {
                let eventMessage = event.getEventMessage(e);
                let eventName = event.getEventName();
                if (event.active) {
                    if (event.loggable) this.eventHandlerService.handleLogEvent(eventMessage);
                    let canvasEvent = event.constructEvent(e);
                    this.handleEvent(canvasEvent);
                }
                console.log("Object Event");
                if (event.hasHistory) {
                    console.log('EVENT :: ', eventName);
                    //this.dispatchAction(new CanvasStateModifiedAction({ canvasState: JSON.stringify(this.canvas), applyState: false }));
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
