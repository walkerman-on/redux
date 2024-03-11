import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../model/slice/userSlice"
import todoReducer from "../model/slice/todoSlice"
import postReducer from "../model/slice/postSlice"

export const store = configureStore({
	reducer: {
		user: userReducer,
		todo: todoReducer,
		post: postReducer,
	},
})
