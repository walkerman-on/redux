import React, { useState } from "react"
import { Input } from "../ui/input/Input"
import { Button } from "../ui/button/Button"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../../features/model/slice/todoSlice"

const ToDo = () => {
	const [inputValue, setInputValue] = useState("")
	const dispatch = useDispatch()
	const addTodoHandler = () => {
		dispatch(addTodo(inputValue))
		setInputValue("")
	}
	const todos = useSelector((state) => state.todos.todos)

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
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<Button color="green">Done!</Button>
						<span>{item.text}</span>
						<Button color="red">Delete</Button>
					</div>
				))}
			</div>
		</div>
	)
}

export default ToDo
