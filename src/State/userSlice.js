import { createSlice } from "@reduxjs/toolkit";
import { authorizator } from "../Services/Authorizator";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        logIn: () => {
            authorizator.authAsync();
        },
        logOut: () => {
            authorizator.logOut();
        },
    }
});

export const { logIn, logOut } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const userReducer = userSlice.reducer;