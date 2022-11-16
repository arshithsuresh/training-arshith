import {ActionReducer, MetaReducer} from '@ngrx/store';
import { CanvasCoreService } from '../canvas/canvas-core.service';
import { CanvasStateModified } from './canvas.actions';

export function UndoRedoMetaReducer():ActionReducer<any>{
    return function(state,action){        
        console.log('state :: ', state)
        console.log(action);

        return action;
    }
}

export const metaReducers: MetaReducer<any>[] = [UndoRedoMetaReducer];