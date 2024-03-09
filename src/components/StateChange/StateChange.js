import React from "react"
import { Input } from "../ui/input/Input"
import { useDispatch, useSelector } from "react-redux"
import { getFirstName, getLastName } from "../../features/model/slice/userSlice"

const StateChange = () => {
	const dispatch = useDispatch()
	const firstName = useSelector((state) => state.user.firstName)
	const lastName = useSelector((state) => state.user.lastName)

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
			<span className="titleText">Redux Toolkit State Change</span>
			<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
				<Input
					placeholder="First Name"
					onChange={(e) => dispatch(getFirstName(e.target.value))}
				/>
				<Input
					placeholder="Last Name"
					onChange={(e) => dispatch(getLastName(e.target.value))}
				/>
			</div>
			<p style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
				<span className="firstText">
					First Name: <span className="secondText">{firstName}</span>
				</span>
				<span className="firstText">
					Last Name: <span className="secondText">{lastName}</span>
				</span>
			</p>
		</div>
	)
}

export default StateChange
