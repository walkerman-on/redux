import React from "react"
import { Button } from "../ui/button/Button"
import { useDispatch, useSelector } from "react-redux"
import { getPosts, deletePostsById } from "../../features/model/slice/postSlice"

const Posts = () => {
	const dispatch = useDispatch()
	const posts = useSelector((state) => state.post.posts)

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
			<span className="titleText">Redux Toolkit Async Thunk</span>
			<div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
				<Button
					color="green"
					style={{ width: "" }}
					onClick={() => dispatch(getPosts())}
				>
					Get Posts
				</Button>
				{posts?.map((item) => (
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<span
							style={{
								padding: "5px 8px",
								borderRadius: "3px",
								background: "rgb(113, 155, 167)",
								color: "whitesmoke",
								width: "100%",
							}}
							key={item.id}
						>
							{item.title}
						</span>
						<Button
							color="red"
							onClick={() => dispatch(deletePostsById(item.id))}
						>
							Delete
						</Button>
					</div>
				))}
			</div>
		</div>
	)
}

export default Posts
