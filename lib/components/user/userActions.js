export const UserActionTypes = {
   LOG_IN: '[User] Log in',
   LOG_OUT: '[User] Log out',
   CHANGE_LOGIN: '[User] Change login',
   CHANGE_PASSWORD: '[User] Change password'
};

export const logIn = user=> ({
   payload: user,
   type: UserActionTypes.LOG_IN
});

export const logOut = () => ({
   payload: null,
   type: UserActionTypes.LOG_OUT
});

export const changeLogin = event => ({
   payload: event.currentTarget.value,
   type: UserActionTypes.CHANGE_LOGIN
});

export const changePassword = event => ({
   payload: event.currentTarget.value,
   type: UserActionTypes.CHANGE_PASSWORD
});