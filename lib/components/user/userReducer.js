import { initialUserState } from './userState';
import { UserActionTypes } from './userActions';

export function userReducer(state = initialUserState, action) {
   switch(action.type) {
         case UserActionTypes.CHANGE_PASSWORD:
            return { ...state, password: action.payload };
         case UserActionTypes.CHANGE_LOGIN:
            return { ...state, login: action.payload };
         default: 
            return state;
   }
}
