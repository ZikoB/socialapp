import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Components
import NavBar from './components/Navbar';

// Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#33bccd',
			main: '#00acc1',
			dark: '#007887',
			contrastText: '#fff',
		},
		secondary: {
			light: '#4dabf5',
			main: '#2196f3',
			dark: '#1769aa',
			contrastText: '#fff',
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Router>
					<NavBar />
					<div className="container">
						<Switch>
							<Route exact path="/" component={home} />
							<Route exact path="/login" component={login} />
							<Route exact path="/signup" component={signup} />
						</Switch>
					</div>
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;
