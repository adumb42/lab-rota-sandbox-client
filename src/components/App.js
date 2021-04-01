import React from 'react';
import Modal from './Modal';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
;import HolidayHome from './holidays/HolidayHome';
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
import PasswordEntry from './holidays/PasswordEntry';
import { loginPassword } from '../actions';

class App extends React.Component {
    state = { passwordAttempt: 0 }
        
    componentDidMount() {
    }

    handleKeyDown = async (e) => {
        let typedValue = `${e.target.value}`
        if(e.key === "Enter") {
            this.props.loginPassword({
                "name": "laboratory",
                "password": typedValue
            }).then(() => {
                localStorage.setItem('password', this.props.password)
            }).then(() => {
                this.forceUpdate()
            }).catch(() => {
                this.setState({ passwordAttempt: this.state.passwordAttempt + 1 }) 
            })
        }
    }

    render() {
        if (localStorage.getItem('password')) {
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
                            <Route path="/password" exact component={PasswordEntry} />
                        </div>
                    </Router>
                </div>
            )
        } else {
            return (
                    <Modal
                        title="Enter Password"
                        content={<div className="ui input focus">
                            <input type="password" placeholder="Enter password..." onKeyDown={this.handleKeyDown}></input>
                            </div>}
                        actions={this.state.passwordAttempt > 0 ? <div class="ui negative message">
                                <div class="header">
                                    Incorrect Password Attempt {this.state.passwordAttempt}
                                </div>
                                <p>Please try again</p>
                            </div> : null}
                        onDismiss={() => history.push('/')}
                    />
                );
        }
    }        
};

const mapStateToProps = (state) => {
    return { ...state.passwords };
};

export default connect(
    mapStateToProps,
    { loginPassword }
)(App);
