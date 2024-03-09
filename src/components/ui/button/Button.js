import React from "react"

export const Button = (props) => {
	return (
		<button
			{...props}
			className="button"
			style={{ background: `${props.color}` }}
		>
			{props.children}
		</button>
	)
}
