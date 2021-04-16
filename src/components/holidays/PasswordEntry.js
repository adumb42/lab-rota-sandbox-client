import React from 'react'
import { connect } from 'react-redux'
import { fetchUser, loginPassword } from '../../actions'

class PasswordEntry extends React.Component {
    componentDidMount() {
        this.props.fetchUser()
        console.log(this.props)
    }

    
}

const mapStateToProps = (state) => {
    return { ...state.passwords }
}

export default connect(mapStateToProps, { fetchUser, loginPassword })(PasswordEntry)
