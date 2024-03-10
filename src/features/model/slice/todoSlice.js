import { createSlice } from "@reduxjs/toolkit"
import { uid } from "uid"

const initialState = {
	todos: [],
}

export const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todos.push({
				id: uid(6),
				text: action.payload,
				complited: false,
			})
		},
		complitedTodo: (state, action) => {
			const todo = state.todos.find((item) => item.id === action.payload)
			todo.complited = !todo.complited
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter((item) => item.id !== action.payload)
		},
	},
})

export const { addTodo, complitedTodo, deleteTodo } = todosSlice.actions
export default todosSlice.reducer
