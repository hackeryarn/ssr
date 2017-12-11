import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import Home from './Home';

export default function App() {
    return (
        <div>
            Your React Node app is set up!
            <Switch>
                <Route path="/" exact component={ Home } />
            </Switch>
        </div>
    )
}
