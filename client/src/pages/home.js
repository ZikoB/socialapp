import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Post from '../components/Post';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	console.log(posts);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			try {
				let res = await axios.get('/posts');
				let data = res.data;
				console.log('fetched data', data);
				let postsData = [];
				data.forEach(item => {
					postsData.push({
						id: item.postId,
						body: item.body,
						image: item.userImage,
						createdAt: item.createdAt,
						handle: item.userHandle,
					});
				});

				console.log(postsData);
				setPosts(postsData);
			} catch (error) {
				console.log(error);
			}
			setIsLoading(false);
		})();
	}, []);

	return (
		<Grid container spacing={2}>
			<Grid item sm={8} xs={12}>
				{isLoading ? (
					<div>Loading ...</div>
				) : (
					posts.map(post => <Post key={post.id} post={post} />)
				)}
			</Grid>
			<Grid item sm={4} xs={12}>
				<p>Profile...</p>
			</Grid>
		</Grid>
	);
};

export default Home;
