import { createSlice } from "@reduxjs/toolkit"
import { fetchPosts } from "../../api/fetchPosts"

export const postSlice = createSlice({
	name: "posts",
	initialState: {
		posts: [],
		status: null,
		error: null,
	},
	reducers: {
		deletePost: (state, action) => {
			state.posts = state.posts.filter((item) => item.id !== action.payload)
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = "resolved"
				state.posts = action.payload
			})
			.addCase(fetchPosts.pending, (state) => {
				state.status = "loading"
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = "rejected"
				state.error = action.payload
				console.log(action.payload)
			})
	},
})

export const { deletePost } = postSlice.actions
export default postSlice.reducer
