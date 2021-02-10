import React from 'react'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import {
    Nav
} from '../';

const App = () => {
    return (
        <Router>
            <Nav></Nav>
            <Route exact path='/'>

            </Route>
        </Router>
    );
}

export default App;