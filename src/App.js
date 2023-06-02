import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Contact from './containers/Contact';
import Home from './containers/Home';
import Podcast from './containers/Podcast';
import Projects from './containers/Projects';
import Layout from './hocs/Layout';

import Admin from './containers/Admin';
import './sass/main.scss';

const App = () => {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/podcast' element={<Podcast />} />
					<Route exact path='/projects' element={<Projects />} />
					<Route exact path='/contact' element={<Contact />} />
					<Route exact path='/admin-9ju6v' element={<Admin />} />
					{/* <Route exact path='/codingrepublic' element={<CodingRepublic />} /> */}
					<Route exact path='*' element={<NotFound />} />
				</Routes>
			</Layout>
		</Router>
	);
};

export default App;
