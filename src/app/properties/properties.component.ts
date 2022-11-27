import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IObjectProperty } from '../core/properties/properties';
import { IProperties } from './properties';
import { PropertiesPanelServiceService } from './properties-panel-service.service';

@Component({
    selector: 'app-properties',
    templateUrl: './properties.component.html',
    styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit, OnDestroy {
    panelVisible = false;
    panelVisibleSubscription: Subscription;

    objectSelectedProperties: IProperties = {
        fillColor: 'FFFFFF',
        angle: 0,
        strokeColor: 'FFFFFF',
        strokeWidth: 0,
    };

    constructor(private propertyPanelHandler: PropertiesPanelServiceService) {
        this.panelVisibleSubscription = this.propertyPanelHandler.porpertyPanelVisibleState$.subscribe((val) => {
            this.panelVisible = val;
        });

        this.propertyPanelHandler.objectProperties$.subscribe((val) => {
            this.objectSelectedProperties = val;
        });
    }
    ngOnInit(): void {}
    ngOnDestroy(): void {}

    onPropertyChanged(property:IObjectProperty)
    {
      this.propertyPanelHandler.objectPropertiesChanged.next(property);
    }
}
