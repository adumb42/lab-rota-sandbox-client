import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const Header = (props) => {
    fetchUser();
    let linkTo 
    if  (props.user === "John") {
        linkTo = "/John"
    } if (props.user === "Emily") {
        linkTo = "/Emily"
    } if (props.user === "Ryan") {
        linkTo = "/Ryan"
    } if (props.user === "Alex") {
        linkTo = "/Alex"
    } if (props.user === "LeAnne") {
        linkTo = "/LeAnne"
    }
    console.log(linkTo);
    return (
        <div className="ui pointing menu">
            <Link to={linkTo} className="item">
                Your Summary
            </Link>
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
    return { ...state.holidays };
};

export default connect(
    mapStateToProps,
    { fetchUser }
)(Header);