import { IUserState } from '../user/userState';

export enum UserActionTypes {
    LOG_IN = '[User] Log in',
    LOG_OUT = '[User] Log out'
}

export const logIn = (user: IUserState) => ({
    payload: user,
    type: UserActionTypes.LOG_IN
  });
  
  export const logOut = () => ({
    payload: null,
    type: UserActionTypes.LOG_OUT
  });