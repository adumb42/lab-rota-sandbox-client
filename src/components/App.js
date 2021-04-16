import React from 'react'
import Modal from './Modal'
import 'react-app-polyfill/stable'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import HolidayHome from './holidays/HolidayHome'
import HolidaySwap from './holidays/HolidaySwap'
import CrewOne from './holidays/crewOne'
import CrewTwo from './holidays/crewTwo'
import CrewThree from './holidays/crewThree'
import CrewFour from './holidays/crewFour'
import CrewFive from './holidays/crewFive'
import Header from './Header'
import history from '../history'
import RotaHome from './holidays/RotaHome'
import LoginPage from './holidays/LoginPage'
import PasswordEntry from './holidays/PasswordEntry'
import { loginPassword } from '../actions'

class App extends React.Component {
    state = { passwordAttempt: 0 }

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
        console.log(history)
        if (localStorage.getItem('password')) {
            return (
                <div className="ui container">
                    <Router history={history}>
                        <div>
                            <Header />
                            <Route path="/" exact component={LoginPage} />
                            <Route path="/Holidays" exact component={HolidayHome} />
                            <Route path="/crewOne" exact component={CrewOne} />
                            <Route path="/crewTwo" exact component={CrewTwo} />
                            <Route path="/crewThree" exact component={CrewThree} />
                            <Route path="/crewFour" exact component={CrewFour} />
                            <Route path="/crewFive" exact component={CrewFive} />
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
                )
        }
    }        
}

const mapStateToProps = (state) => {
    return { ...state.passwords }
}

export default connect(
    mapStateToProps,
    { loginPassword }
)(App)
