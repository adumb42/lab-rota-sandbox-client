import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

const Header = (props) => {
    props.fetchUser()
    let linkTo 
    if (!props.users[5]) {
        return null
    }
    if  (props.userName === props.users[5].userName) {
        linkTo = "/crewOne"
    } if (props.userName === props.users[6].userName) {
        linkTo = "/crewTwo"
    } if (props.userName === props.users[7].userName) {
        linkTo = "/crewThree"
    } if (props.userName === props.users[8].userName) {
        linkTo = "/crewFour"
    } if (props.userName === props.users[9].userName) {
        linkTo = "/crewFive"
    }

    return (
        <div className="ui pointing menu">
            { props.userName !== "Admin" ? <Link to={linkTo} className="item">
                Summary
            </Link> : null }
            <div className="right menu">
                <Link to="/Holidays" className="item">
                    Book Holiday
                </Link>
                <Link to="/rota" className="item">
                    Check Rota
                </Link>
                <Link to="/" className="item">
                    Change User
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { 
        ...state.users[10],
        users: Object.values(state.users)
    }
}

export default connect(
    mapStateToProps,
    { fetchUser }
)(Header)