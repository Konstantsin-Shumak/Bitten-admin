import { createSlice } from "@reduxjs/toolkit";
import {authorizatorClass} from "../Services/Authorizator";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        logIn: () => {
            authorizatorClass.authAsync();
        },
        logOut: () => {
            authorizatorClass.logOut();
        },
    }
});

export const {logIn,logOut} = userSlice.actions;

export const selectUser = (state) =>state.user.user;

export const userReducer = userSlice.reducer;