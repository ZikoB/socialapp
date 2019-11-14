import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// MUI imports
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
	card: {
		display: 'flex',
		marginBottom: 20,
	},
	image: {
		minWidth: 200,
	},
	content: {
		padding: 25,
		objectFit: 'cover',
	},
};

const Post = props => {
	const {
		classes,
		post: { body, image, createdAt, handle },
	} = props;

	dayjs.extend(relativeTime);
	return (
		<Card className={classes.card}>
			<CardMedia
				image={image}
				className={classes.image}
				title="Profile image"
			/>
			<CardContent className={classes.content}>
				<Typography
					variant="h5"
					color="primary"
					component={Link}
					to={`/users/${handle}`}
				>
					{handle}
				</Typography>
				<Typography variant="body2" color="textSecondary">
					{dayjs(createdAt).fromNow()}
				</Typography>
				<Typography variant="body1">{body}</Typography>
			</CardContent>
		</Card>
	);
};

export default withStyles(styles)(Post);
