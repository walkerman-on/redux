import React from "react"

export const Input = (props, { placeholder }) => {
	return <input {...props} className="input" placeholder={placeholder} />
}
