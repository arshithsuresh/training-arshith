import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CanvasCoreService } from '../core/canvas/canvas-core.service';
import { fabric } from 'fabric';
import { IDrawableObject } from '../core/objects/object';
import { Subscription } from 'rxjs';
import { EventHandlerService } from '../core/logging/event-handle.service';
import { Action, select, Store } from '@ngrx/store';
import { CanvasStateModifiedAction } from '../core/canvas-store/canvas.actions';
import { canvasStateSelector } from '../core/canvas-store/canvas.selectors';

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
        private canvasStore: Store<CanvasState>
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

    dispatchAction(action: Action) {
        this.canvasStore.dispatch(action);
    }

    initSubscribers() {
        this.shapeCreatedSubscription = this.canvasService.shapeCreated.subscribe((object) => {
            this.canvas.add(object.object);
            // this.dispatchAction(new CanvasStateModifiedAction({ canvasState: JSON.stringify(this.canvas), applyState: false }));
        });
    }

    initEventHandlers() {
        this.eventHandlerService.registedEvents.forEach((event) => {
            this.canvas.on(event.getEventName(), (e) => {
                if(event.hasHistory)
                {
                    console.log("EVENT :: ", event.getEventName())
                    this.dispatchAction(new CanvasStateModifiedAction({ canvasState: JSON.stringify(this.canvas), applyState: false }));
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
