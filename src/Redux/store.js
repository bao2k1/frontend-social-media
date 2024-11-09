// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import {
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./Reducers/UserReducers";

const reducer = {
  userLogin: userLoginReducer,
  userList: userListReducer,
  userRegister: userRegisterReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
};

// const initialState = {
//   // userLogin: { userInfo: userInfoFromLocalStorage },
// };

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const store = configureStore({
  reducer,
  initialState,
  devTools: process.env.NODE_ENV !== "production",

});

export default store;
