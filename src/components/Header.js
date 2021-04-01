import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const Header = (props) => {
    fetchUser();
    let linkTo 
    if  (props.user === "John") {
        linkTo = "/John";
    } if (props.user === "Emily") {
        linkTo = "/Emily";
    } if (props.user === "Ryan") {
        linkTo = "/Ryan";
    } if (props.user === "Alex") {
        linkTo = "/Alex";
    } if (props.user === "LeAnne") {
        linkTo = "/LeAnne";
    }

    return (
        <div className="ui pointing menu">
            { props.user !== "Admin" ? <Link to={linkTo} className="item">
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
};

const mapStateToProps = (state) => {
    return { ...state.users[0] };
};

export default connect(
    mapStateToProps,
    { fetchUser }
)(Header);