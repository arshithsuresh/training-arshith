import { MetaReducer, ActionReducer, Action, Store } from '@ngrx/store';
import { UndoRedoService } from '../undoredo/undoredo.service';
import { CanvasActions, CanvasStateModifiedAction, CANVAS_ACTION_TYPE, NoPayloadActions } from './canvas.actions';
import { INITIAL_CANVAS_STATE } from './canvas.reducers';
import {ICanvasState} from './canvas.state'

export function UndoRedoMetaReducer(undoRedoHandler : UndoRedoService): MetaReducer<ICanvasState, CanvasActions>{
    function UndoRedo(reducer:ActionReducer<ICanvasState, CanvasActions>):ActionReducer<ICanvasState,CanvasActions>{
        return (state = INITIAL_CANVAS_STATE, action)=>{
            let modifiedAction = action;            
            switch(action.type)
            {
                case CANVAS_ACTION_TYPE.CanvasStateModified:
                    undoRedoHandler.pushToUndoState(action.payload!.canvasState);
                    break;
                case CANVAS_ACTION_TYPE.CanvasUndoAction:                    
                    let undoState = undoRedoHandler.getUndoState();
                    //console.log("NEW STATE - UNDO",undoState);
                    modifiedAction = new CanvasStateModifiedAction(
                        {canvasState: undoState!,
                            applyState: true}
                    )                
                    break;
                case CANVAS_ACTION_TYPE.CanvasRedoAction:
                    let redoState = undoRedoHandler.getRedoState();
                    //console.log("NEW STATE - REDO ",redoState);
                    modifiedAction = new CanvasStateModifiedAction(
                        {canvasState: redoState!,
                        applyState: true
                    }
                    )                    
                    break;
                default:
                    undoRedoHandler.initializeUndoRedoState(state.canvasState);

            }
            return reducer(state,modifiedAction);
        }
    }
    return UndoRedo;
}