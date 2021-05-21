import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import Signup from '../pages/Signup';

function App(): JSX.Element {
    return (
        <>
            <ConnectedRouter history={history}>
                <Route path="/user/signup" exact component={Signup} />
            </ConnectedRouter>
        </>
    );
}

export default App;
