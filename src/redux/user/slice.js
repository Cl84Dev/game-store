import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentUser: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.currentUser = action.payload
        },

        logout: (state, action) => {
            state.currentUser = null
        }
    }
})

export default userSlice.reducer

export const { login, logout } = userSlice.actions