import React, { useState } from "react"
import { Input } from "../ui/input/Input"
import { Button } from "../ui/button/Button"
import { useDispatch, useSelector } from "react-redux"
import {
	addTodo,
	complitedTodo,
	deleteTodo,
} from "../../features/model/slice/todoSlice"

const ToDo = () => {
	const dispatch = useDispatch()
	const todos = useSelector((state) => state.todos.todos)

	const [inputValue, setInputValue] = useState("")

	const addTodoHandler = () => {
		dispatch(addTodo(inputValue))
		setInputValue("")
	}

	const complitedTodoHandler = (id) => {
		dispatch(complitedTodo(id))
	}

	const deleteTodoHandler = (id) => {
		dispatch(deleteTodo(id))
	}

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
			<span className="titleText">Redux Toolkit ToDo App</span>
			<div style={{ display: "flex" }}>
				<Input
					placeholder="Type something..."
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<Button onClick={() => addTodoHandler()}>+</Button>
			</div>
			<div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
				{todos?.map((item) => (
					<div
						style={{ display: "flex", justifyContent: "space-between" }}
						key={item.id}
					>
						<Button color="green" onClick={() => complitedTodoHandler(item.id)}>
							Done!
						</Button>
						<span className={`${item.complited ? "complTrue" : ""}`}>
							{item.text}
						</span>
						<Button color="red" onClick={() => deleteTodoHandler(item.id)}>
							Delete
						</Button>
					</div>
				))}
			</div>
		</div>
	)
}

export default ToDo
