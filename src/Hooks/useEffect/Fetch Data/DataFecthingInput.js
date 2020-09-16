import React, { useEffect, useState } from "react";
import axios from "axios";
function DataFecthingInput() {
	const [post, setPost] = useState({});
	const [id, setId] = useState(1);
	const [idFromButtonClick, setidFromButtonClick] = useState(1);
	const handleClick = () => {
		setidFromButtonClick(id);
	};
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((re) => {
				console.log(re);
				setPost(re.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [idFromButtonClick]);
	return (
		<div>
			<input type="text" value={id} onChange={(e) => setId(e.target.value)} />
			<button type="button" onClick={handleClick}>
				Fetch post
			</button>
			<div> {post.title} </div>
			{/* <ul>
				{post.map((post) => (
					<li key={post.id}> {post.title} </li>
				))}
			</ul> */}
		</div>
	);
}

export default DataFecthingInput;
