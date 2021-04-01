import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchUser, loginPassword } from '../../actions';

class PasswordEntry extends React.Component {
    componentDidMount() {
        this.props.fetchUser()
        console.log(this.props)
    }

    loginPassword(password) {
        this.props.loginPassword({
            "name": "hellomate",
            "password": password
        })
    }

    handleKeyDown(e) {
        if (e.key === "Enter") {
            this.props.loginPassword(e.target.value)
        }
    }
    
    render() {
        return (
            <Modal 
                title="Enter Password"
                content={<div className="ui input focus">
                            <input type="password" placeholder="Enter password..." onKeyDown={this.handleKeyDown}></input>
                        </div>}
                onDismiss={() => history.push('/')}
            />
        );
    }
};

const mapStateToProps = (state) => {
    return { ...state.passwords };
};

export default connect(mapStateToProps, { fetchUser, loginPassword })(PasswordEntry);
