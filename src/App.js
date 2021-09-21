import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import DetailedInform from './pages/detailed-info';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/user/:id' component={DetailedInform} exact />
			</Switch>
		</Router>
	);
}

export default App;
