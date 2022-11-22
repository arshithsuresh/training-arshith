import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IProperties } from '../properties';
@Component({
  selector: 'app-general-properties',
  templateUrl: './general-properties.component.html',
  styleUrls: ['./general-properties.component.scss']
})
export class GeneralPropertiesComponent implements OnInit {

  @Output('onPropChanged') generalProperties:EventEmitter<IProperties>= new EventEmitter();
  
  @Input('properties')
  properties:IProperties={
    fillColor:"FFFFFF",
    angle:0,
    strokeColor:"FFFFFF",
    strokeWidth:0
  };

  visible:boolean = true;
  constructor() { }

  isDisabled(){
    return this.properties == null || !this.visible;
  }

  emitPropertyChanges(){
    this.generalProperties.emit(this.properties);
  }

  ngOnInit(): void {
  }



}
