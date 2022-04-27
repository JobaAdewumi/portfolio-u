import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './containers/Home';
// import Projects from './containers/Projects';
// import Contact from './containers/Contact';
// import CodingRepublic from './containers/CodingRepublic';
// import NotFound from './components/NotFound';
import Layout from './hocs/Layout';

import store from './store';

import './sass/main.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            {/* <Route exact path='/projects' element={<Projects />} /> */}
            {/* <Route exact path='/contact' element={<Contact />} /> */}
            {/* <Route exact path='/codingrepublic' element={<CodingRepublic />} /> */}
            {/* <Route exact path='*' element={<NotFound />} /> */}
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
