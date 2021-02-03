import React from 'react';
import { fetchHolidays } from '../../actions';
import { connect } from 'react-redux';

class Ryan extends React.Component {
    componentDidMount() {
        this.props.fetchHolidays();
    }

    render() {

        let booked = this.props.holidays.filter(holiday => holiday.Ryan === false).length
        let swapsBooked = this.props.holidays.filter(holiday => holiday.Ryan === null).length - 113
        let remaining = 24 - booked


        return (
            <div className="ui raised card">
                <div className="content">
                    <div className="header">Ryan Hewitt</div>
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
        );
    }
}

const mapStateToProps = (state) => {
    return { holidays: Object.values(state.holidays) };
};

export default connect(
    mapStateToProps,
    { fetchHolidays }
)(Ryan);
