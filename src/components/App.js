import React from 'react';
import { Router, Route } from 'react-router-dom';
import HolidayHome from './holidays/HolidayHome';
import HolidaySwap from './holidays/HolidaySwap';
import John from './holidays/John';
import Emily from './holidays/Emily';
import Ryan from './holidays/Ryan';
import Alex from './holidays/Alex';
import LeAnne from './holidays/LeAnne';
import Header from './Header';
import history from '../history';
import RotaHome from './holidays/RotaHome';
import LoginPage from './holidays/LoginPage';

const App = () => {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        {
                            history.location.pathname !== '/' ? <Header /> : null
                        }
                        <Route path="/" exact component={LoginPage} />
                        <Route path="/Holidays" exact component={HolidayHome} />
                        <Route path="/John" exact component={John} />
                        <Route path="/Emily" exact component={Emily} />
                        <Route path="/Ryan" exact component={Ryan} />
                        <Route path="/Alex" exact component={Alex} />
                        <Route path="/LeAnne" exact component={LeAnne} />
                        <Route path="/rota" exact component={RotaHome} />
                        <Route path="/swap/:id" exact component={HolidaySwap} />
                    </div>
                </Router>
            </div>
        )
    };

export default App;