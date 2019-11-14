import React, { useState, useEffect } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.png';
import { useForm } from '../hooks/useForm';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useDataApi from '../hooks/useDataApi';

// MUI imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
//import { connect } from 'react-redux'
// import { connect } from 'react-redux';
// import { loginUser } from '../redux/actions/userActions';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const styles = {
	form: {
		textAlign: 'center',
	},
	image: {
		margin: '20px auto',
	},
	pageTitle: {
		margin: '10px auto',
	},
	textField: {
		margin: '10px auto',
	},
	button: {
		marginTop: '10px',
		position: 'relative',
	},
	customError: {
		color: 'red',
		fontSize: '.8rem',
		marginTop: 10,
	},
	progress: {
		position: 'absolute',
	},
};

const Login = props => {
	const { classes } = props;
	const [values, handleChange] = useForm({ email: '', password: '' });
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState({});

	const handleSubmit = async event => {
		event.preventDefault();
		setIsLoading(true);
		try {
			const userData = {
				email: values.email,
				password: values.password,
			};
			console.log(userData);
			let res = await axios.post(
				'https://us-central1-socialapp-6d379.cloudfunctions.net/api/login',
				userData
			);
			let data = res.data;
			console.log(data);
			props.history.push('/');
		} catch (err) {
			setErrors(err.response.data);
		}
		setIsLoading(false);
	};

	// useEffect(() => {
	// 	return () => {
	// 		source.cancel('Cancelling in cleanup');
	// 	};
	// });
	return (
		<Grid container className={classes.form}>
			<Grid item sm />
			<Grid item sm>
				<img src={AppIcon} alt="monkey image" className={classes.image} />
				<Typography variant="h2" className={classes.pageTitle}>
					Login
				</Typography>
				<form noValidate onSubmit={handleSubmit}>
					<TextField
						id="email"
						name="email"
						type="email"
						label="Email"
						className={classes.textField}
						helperText={errors.email}
						error={errors.email ? true : false}
						value={values.email}
						onChange={handleChange}
						fullWidth
					/>
					<TextField
						id="password"
						name="password"
						type="password"
						label="Password"
						className={classes.textField}
						helperText={errors.password}
						error={errors.password ? true : false}
						value={values.password}
						onChange={handleChange}
						fullWidth
					/>
					{errors.general && (
						<Typography variant="body2" className={classes.customError}>
							{errors.general}
						</Typography>
					)}
					<Button
						type="submit"
						variant="contained"
						color="primary"
						className={classes.button}
						disabled={isLoading}
					>
						Login
						{isLoading && (
							<CircularProgress size={30} className={classes.progress} />
						)}
					</Button>
					<br />
					<small>
						dont have an account ? sign up <Link to="/signup">here</Link>
					</small>
				</form>
			</Grid>
			<Grid item sm />
		</Grid>
	);
};

Login.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
