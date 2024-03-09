import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../model/slice/userSlice"
import todosReducer from "../model/slice/todoSlice"

export const store = configureStore({
	reducer: {
		user: userReducer,
		todos: todosReducer,
	},
})
