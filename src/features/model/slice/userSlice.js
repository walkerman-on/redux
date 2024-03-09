import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	firstName: "",
	lastName: "",
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		getFirstName: (state, action) => {
			state.firstName = action.payload
		},
		getLastName: (state, action) => {
			state.lastName = action.payload
		},
	},
})

export const { getFirstName, getLastName } = userSlice.actions
export default userSlice.reducer
