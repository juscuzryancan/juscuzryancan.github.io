import React from 'react'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import {
    Header
} from '../';

const App = () => {
    return (
        <Router>
            <Header />
            <Route exact path='/'>

            </Route>
        </Router>
    );
}

export default App;