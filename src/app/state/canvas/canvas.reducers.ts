import { CanvasActions, CANVAS_ACTION_TYPE } from './canvas.actions';
import { ICanvasState, initialCanvasState } from './canvas.state';

export function CanvasEventReducer(state: ICanvasState=initialCanvasState, action: CanvasActions): ICanvasState {
    switch (action.type) {
        case CANVAS_ACTION_TYPE.AddObject:
            console.log("Here");
            // state.canvasObjects.push(action.payload.object);
            let logs = state.canvasEventLog.concat(action.payload.event.getEventMessage());
            let newState = {...state, canvasEventLog: logs  }            
            return newState;            
        default:
            return state;
    }
}
