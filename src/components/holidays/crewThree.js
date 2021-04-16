import React from 'react'
import { fetchHolidays, fetchUser } from '../../actions'
import { connect } from 'react-redux'

class CrewThree extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hidden: true }
        props.fetchUser()
    }

    componentDidMount() {
        this.props.fetchHolidays()
        setTimeout(() => {
            this.setState({ hidden: false })
        }, 1500)
    }


    render() {

        let booked = this.props.holidays.filter(holiday => holiday.crewThree === false).length
        let swapsBooked = this.props.holidays.filter(holiday => holiday.crewThree === null).length - 115
        let remaining = 29 - booked

        return this.state.hidden ? (
            <div className="ui raised card">
                <div className="ui raised card">
                    <div className="content">
                        <div className="header"></div>
                        <div className="meta">
                            <span className="category"></span>
                        </div>
                        <div className="ui active centred inline loader">
                        </div>
                    </div>
                    <div className="extra content">
                        <div className="right floated author">
                        </div>
                    </div>
                </div>

            </div>
        ) :
            (
            <div className="ui raised card">
                <div className="content">
                        <div className="header">{this.props.users[7].fullNameOne}</div>
                    <div className="meta">
                        <span className="category">Summary 20/21</span>
                    </div>
                    <div className="description">
                        <p>Holidays Booked: <b>{booked}</b></p>
                        <p>Holidays Remaining: <b>{remaining}</b></p>
                        <p>Swap Balance: <b>{swapsBooked}</b></p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="right floated author">
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        holidays: Object.values(state.holidays),
        users: Object.values(state.users)
    }
}

export default connect(
    mapStateToProps,
    { fetchHolidays, fetchUser }
)(CrewThree)
