import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
    userId: null,
    userToken: null,
    userRole: null
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        getUser: (state) => state,
        modifyUser: (state, action) => ({...state, ...action.payload }),
        resetUser: () => initialState
    },
})

export const { getUser, modifyUser, resetUser } = userSlice.actions

export default userSlice.reducer