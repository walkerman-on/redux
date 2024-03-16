import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { deletePost } from "../model/slice/postSlice"

export const deletePosts = createAsyncThunk(
	"posts/deletePosts",
	async (id, { rejectwithValue, dispatch }) => {
		try {
			const res = await axios.delete(
				`https://jsonplaceholder.typicode.com/posts/${id}`
			)

			if (!res.data) {
				throw new Error("Can't delete post. Server Error!")
			}

			dispatch(deletePost(id))
		} catch (error) {
			return rejectwithValue(error.message)
		}
	}
)
