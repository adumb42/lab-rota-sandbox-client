import React from 'react'
import { connect } from 'react-redux'
import { updateUser, fetchUser } from '../../actions'
 
class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        props.fetchUser()
    }

    

    render() {
        if (!this.props.users[5]) {
            return <div />
        }
        return (
        <div className="ui raised very padded container segment">
            <div>
                <h2 className="ui center aligned icon header">
                    <i className="circular users icon"></i>
                    Holidays & Day Crew Sandbox
                </h2>
                <div className="ui one column stackable center aligned page grid">
                    <div className="column twelve wide">
                        <div className="ui simple dropdown labeled search icon button">
                            <i className="users icon"></i>
                            <span className="text">Select User</span>
                            <div className="menu">
                                <div className="item" onClick={() => {this.props.updateUser({ "userName": this.props.users[5].userName, "crewNumber": 1 })}}>
                                    {this.props.users[5].userName}
                                </div>
                                <div className="item" onClick={() => { this.props.updateUser({ "userName": this.props.users[6].userName, "crewNumber": 2})}}>
                                    {this.props.users[6].userName}
                                </div>
                                <div className="item" onClick={() => { this.props.updateUser({ "userName": this.props.users[7].userName, "crewNumber": 3 })}}>
                                    {this.props.users[7].userName}
                                </div>
                                <div className="item" onClick={() => { this.props.updateUser({ "userName": this.props.users[8].userName, "crewNumber": 4 })}}>
                                    {this.props.users[8].userName}
                                </div>
                                <div className="item" onClick={() => { this.props.updateUser({ "userName": this.props.users[9].userName, "crewNumber": 5 })}}>
                                    {this.props.users[9].userName}
                                </div>
                                <div className="item" onClick={() => {this.props.updateUser({"userName": "Admin"})}}>
                                    Admin
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        ...state.users[10],
        users: Object.values(state.users)   
    }
}

export default connect(
    mapStateToProps,
    { updateUser, fetchUser }
)(LoginPage)