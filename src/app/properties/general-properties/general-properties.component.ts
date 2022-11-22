import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IObjectProperty } from 'src/app/core/properties/properties';
import { IProperties } from '../properties';

@Component({
  selector: 'app-general-properties',
  templateUrl: './general-properties.component.html',
  styleUrls: ['./general-properties.component.scss']
})
export class GeneralPropertiesComponent implements OnInit {

  @Input('properties') currentProperty!:IProperties;
  @Output('onPropChanged') propertyChanged:EventEmitter<IObjectProperty> = new EventEmitter();

  debugInit(){
    this.currentProperty={
      fillColor:"FFFFFF",
      angle:0,
      strokeColor:"FFFFFF",
      strokeWidth:0
    };
  }
  constructor() {
    this.debugInit();
  }
  ngOnInit(): void {
  }  

  onStrokeWidthChange(){
    this.propertyChanged.emit({
      name:'strokeWidth',
      value: this.currentProperty.strokeWidth
    })
  }

  onStrokeColorChange(){
    this.propertyChanged.emit({
      name:'stroke',
      value: this.currentProperty.strokeColor
    })
  }

  onFillColorChange(){
    this.propertyChanged.emit({
      name:'fill',
      value: this.currentProperty.fillColor
    })
  }

  onAngleChange(){
    this.propertyChanged.emit({
      name:'angle',
      value: this.currentProperty.angle
    })
  }
}
