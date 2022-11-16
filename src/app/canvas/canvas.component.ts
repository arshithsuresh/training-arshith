import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CanvasCoreService } from '../core/canvas/canvas-core.service';
import { fabric } from 'fabric';
import { IDrawableObject } from '../core/objects/object';
import { Subscription } from 'rxjs';
import { EventHandlerService } from '../core/logging/event-handle.service';
import { Action, Store } from '@ngrx/store';
import { CanvasStateModified } from '../core/canvas-store/canvas.actions';

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('canvas') _mCanvas?: ElementRef<HTMLCanvasElement>;

    canvas!: fabric.Canvas;
    private shapeCreatedSubscription!: Subscription;

    constructor(private canvasService: CanvasCoreService,
        private eventHandlerService: EventHandlerService,
        private canvasStore: Store<CanvasState>) {   
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

    dispatchAction(action:Action){
        this.canvasStore.dispatch(action);
    }

    initSubscribers(){
        this.shapeCreatedSubscription = this.canvasService.shapeCreated.subscribe((object) => {            
            this.canvas.add(object.object);           
            this.dispatchAction(
                CanvasStateModified({canvasState:JSON.stringify(this.canvas)}));           
        });
    }

    initEventHandlers() {
        this.eventHandlerService.registedEvents.forEach((event) => {
            this.canvas.on(event.getEventName(), (e) => {
                
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
