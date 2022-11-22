import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { CanvasCoreService } from '../core/canvas/canvas-core.service';
import { IObjectProperty } from '../core/properties/properties';
import { IProperties } from './properties';

@Injectable({
    providedIn: 'root',
})
export class PropertiesPanelServiceService implements OnDestroy {
    porpertyPanelVisibleState = new BehaviorSubject<boolean>(false);
    porpertyPanelVisibleState$ = this.porpertyPanelVisibleState.asObservable();

    objectProperties = new Subject<IProperties>();
    objectProperties$ = this.objectProperties.asObservable();

    objectPropertiesChanged = new Subject<IObjectProperty>();
    objectPropertiesChanged$ = this.objectPropertiesChanged.asObservable();

    panelVisible = false;
    selectedObjectProperties?:IProperties;

    objectSelectedSubscription: Subscription;

    constructor(private canvasService: CanvasCoreService) {
        this.objectSelectedSubscription = this.canvasService.canvasObjectSelected$.subscribe((object) => {
            if (object == undefined) {
                this.panelVisible = false;
            } else {
                this.panelVisible = true;
                this.selectedObjectProperties = {
                  angle: object.angle!,
                  fillColor: object.get("fill")!.toString(),
                  strokeColor: object.get('stroke')!,
                  strokeWidth: object.get('strokeWidth')!
                }
                
                this.objectProperties.next(this.selectedObjectProperties)
            }
            this.porpertyPanelVisibleState.next(this.panelVisible);
        });
    }

    ngOnDestroy(): void {
        this.objectSelectedSubscription.unsubscribe();
    }
}
