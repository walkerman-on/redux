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
	},
})

export const { addTodo } = todosSlice.actions
export default todosSlice.reducer
