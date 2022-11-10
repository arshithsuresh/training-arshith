import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { CanvasEventReducer } from "./canvas/canvas.reducers";


@NgModule({
    declarations:[],
    imports:[
        StoreModule.forFeature('canvas', CanvasEventReducer)
    ],
    providers:[]
})
export class CanvasStoreModule{}