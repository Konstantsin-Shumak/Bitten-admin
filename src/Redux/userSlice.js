import { createSlice } from "@reduxjs/toolkit";
import {Authorizator} from "../Services/Authorizator";

const authorizatorClass=new Authorizator();

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        login: () => {
            authorizatorClass.firebaseAuthAsync();
        },
        logout: () => {
            authorizatorClass.firebaseLogOut();
        },
    }
});

export const {login,logout} = userSlice.actions;

export const selectUser = (state) =>state.user.user;

export default userSlice.reducer;