import { IUserState, initialUserState } from "./userState";
import { IActionType } from "../rootState/IActionType";
import { UserActionTypes } from "./userActions";

export function userReducer(state: IUserState = initialUserState, action: IActionType) {
    switch(action.type) {
        case UserActionTypes.LOG_IN:
            return { ...state, user: action.payload };
        case UserActionTypes.LOG_IN:
            return { ...state, user: action.payload };
        default: 
            return state;
    }
}
