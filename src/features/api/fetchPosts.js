import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchPosts = createAsyncThunk(
	"posts/fetchPosts",
	async (_, { rejectwithValue }) => {
		try {
			const res = await axios.get(
				"https://jsonplaceholder.typicode.com/posts?_limit=10"
			)

			if (!res.data) {
				throw new Error("Server Error!")
			}

			return res.data
		} catch (error) {
			console.log(error.message)
			return rejectwithValue(error.message)
		}
	}
)
