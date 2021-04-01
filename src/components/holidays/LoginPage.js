import React from 'react';
import { connect } from 'react-redux';
import { updateUser, fetchUser } from '../../actions';
 
class LoginPage extends React.Component {

    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        const href =  "./Holidays"
        const adminHref = "./rota"
        return (
        <div className="ui raised very padded container segment">
            <div>
                <h2 className="ui center aligned icon header">
                    <i className="circular users icon"></i>
                    Wissington Day Crew Holidays & Rota
                </h2>
                <div className="ui one column stackable center aligned page grid">
                    <div className="column twelve wide">
                        <div className="ui simple dropdown labeled search icon button">
                            <i className="users icon"></i>
                            <span className="text">Select User</span>
                            <div className="menu">
                                <a className="item" href={href} onClick={() => {this.props.updateUser({ "user": "John" })}}>
                                    John
                                </a>
                                <a className="item" href={href} onClick={() => { this.props.updateUser({"user": "Emily"})}}>
                                    Emily
                                </a>
                                <a className="item" href={href} onClick={() => {this.props.updateUser({"user": "Ryan"})}}>
                                    Ryan
                                </a>
                                <a className="item" href={href} onClick={() => {this.props.updateUser({"user": "Alex"})}}>
                                    Alex
                                </a>
                                <a className="item" href={href} onClick={() => {this.props.updateUser({"user": "LeAnne"})}}>
                                    LeAnne
                                </a>
                                <a className="item" href={adminHref} onClick={() => {this.props.updateUser({"user": "Admin"})}}>
                                    Admin
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    };
};

const mapStateToProps = (state) => {
    return { ...state.users[0] };
};

export default connect(
    mapStateToProps,
    { updateUser, fetchUser }
)(LoginPage);