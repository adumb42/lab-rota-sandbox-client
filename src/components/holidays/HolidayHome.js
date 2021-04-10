import React from 'react';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import { Link } from 'react-router-dom';
import { fetchHolidays, fetchHoliday, createDay, dateToggle, fetchUser, nameToggle, fetchUserByCrew } from '../../actions';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class HolidayList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { startDate: null, endDate: null }
    }

    handleDateSubmit = () => {
        const { startDate, endDate } = this.state;
        moment(localStorage.setItem('startDate', startDate));
        moment(localStorage.setItem('endDate', endDate));
    };

    handleScrollPosition = () => {
        const scrollPosition = localStorage.getItem('scrollPosition2');
        const mainWindow = document.getElementById('div2ToPrint');
        if (scrollPosition) {
            mainWindow.scrollTo(0, parseInt(scrollPosition));
        };
    };

    handleScroll = () => {
        const mainWindow = document.getElementById('div2ToPrint');
        localStorage.setItem('scrollPosition2', mainWindow.scrollTop);
    };
   
    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchHolidays();
        if (!localStorage.getItem('startDate')) {
            localStorage.setItem('startDate', moment());
        }
        if (!localStorage.getItem('endDate')) {
            localStorage.setItem('endDate', moment().add(7, 'days'))
        }
        const startDate = moment(localStorage.getItem('startDate'));
        const endDate = moment(localStorage.getItem('endDate'));
        this.setState({ startDate, endDate });
    };

    componentDidUpdate() {
        if (!this.props.users[0]) {
            return 
        } else {
            this.handleScrollPosition();
            this.handleDateSubmit();
        }      
    };

    renderTableHeader() {
        return (
            <tr>
                <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 6 }}>Date</th>
                <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 6 }}>Day</th>
                <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 6 }}>{this.props.users[0].userName}</th>
                <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 6 }}>{this.props.users[1].userName}</th>
                <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 6 }}>{this.props.users[2].userName}</th>
                <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 6 }}>{this.props.users[3].userName}</th>
                <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 6 }}>{this.props.users[4].userName}</th>
                <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 6 }}>Count</th>
            </tr>
        )
    }

    renderHolidays() {
        return this.props.holidays.map(holiday => {
            while ( 
                    moment(holiday.date, 'DD-MM-YYYY').valueOf() >= moment(this.state.startDate - 86400000) &&
                    moment(holiday.date, 'DD-MM-YYYY').valueOf() <= moment(this.state.endDate)
                ) {
            let crewOneButton
            let crewTwoButton
            let crewThreeButton
            let crewFourButton
            let crewFiveButton
            if (holiday.day === "Saturday" || holiday.day === "Sunday") {
                crewOneButton =
                    <Link
                        to={{
                            pathname: `/swap/${holiday.id}`,
                            state: {
                                name: this.props.users[0].userName,
                                id: holiday._id
                            }
                        }}
                        className={this.props.userName !== this.props.users[0].userName || holiday.crewOne !== true ? `disabled circular ui icon button` : `circular ui icon button restore-${holiday.id}`}>
                        <i className={
                            holiday.crewOne === true ? "calendar icon" :
                                (holiday.crewOne === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </Link>
                crewTwoButton = 
                    <Link 
                        to={{
                            pathname: `/swap/${holiday.id}`,
                            state: {
                                name: this.props.users[1].userName,
                                id: holiday._id
                            }
                        }}
                    className={this.props.userName !== this.props.users[1].userName || holiday.crewTwo !== true ? `disabled circular ui icon button` : `circular ui icon button restore-${holiday.id}`}>
                        <i className={
                            holiday.crewTwo === true ? "calendar icon" :
                            (holiday.crewTwo === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </Link>
                crewThreeButton = 
                    <Link 
                        to={{
                            pathname: `/swap/${holiday.id}`,
                            state: {
                                name: this.props.users[2].userName,
                                id: holiday._id
                            }
                        }}
                    className={this.props.userName !== this.props.users[2].userName || holiday.crewThree !== true ? `disabled circular ui icon button` : `circular ui icon button restore-${holiday.id}`}>
                        <i className={
                            holiday.crewThree === true ? "calendar icon" :
                            (holiday.crewThree === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </Link>
                crewFourButton = 
                    <Link 
                        to={{
                            pathname: `/swap/${holiday.id}`,
                            state: {
                                name: this.props.users[3].userName,
                                id: holiday._id
                            }
                        }}
                    className={this.props.userName !== this.props.users[3].userName || holiday.crewFour !== true ? `disabled circular ui icon button` : `circular ui icon button restore-${holiday.id}`}>
                        <i className={
                            holiday.crewFour === true ? "calendar icon" :
                            (holiday.crewFour === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </Link>
                crewFiveButton = 
                    <Link
                        to={{
                            pathname: `/swap/${holiday.id}`,
                            state: {
                                name: this.props.users[4].userName,
                                id: holiday._id
                            }
                        }}
                    className={this.props.userName !== this.props.users[4].userName || holiday.crewFive !== true ? `disabled circular ui icon button` : `circular ui icon button restore-${holiday.id}`}>
                        <i className={
                            holiday.crewFive === true ? "calendar icon" :
                            (holiday.crewFive === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </Link>
                } else {
                crewOneButton = 
                    <button className="circular ui icon button"
                        disabled={holiday.crewOne === null || this.props.userName !== this.props.users[0].userName}
                        onClick={() => this.props.nameToggle(holiday._id, { "crewOne": !holiday.crewOne })}>
                        <i className={
                            holiday.crewOne === true ? "calendar icon" :
                                (holiday.crewOne === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </button>
                crewTwoButton =
                    <button className="circular ui icon button"
                        disabled={holiday.crewTwo === null || this.props.userName !== this.props.users[1].userName}
                        onClick={() => this.props.nameToggle(holiday._id, { "crewTwo": !holiday.crewTwo })}>
                        <i className={
                            holiday.crewTwo === true ? "calendar icon" :
                                (holiday.crewTwo === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </button>
                crewThreeButton =
                    <button className="circular ui icon button"
                        disabled={holiday.crewThree === null || this.props.userName !== this.props.users[2].userName}
                        onClick={() => this.props.nameToggle(holiday._id, { "crewThree": !holiday.crewThree })}>
                        <i className={
                            holiday.crewThree === true ? "calendar icon" :
                                (holiday.crewThree === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </button>
                crewFourButton =
                    <button className="circular ui icon button"
                        disabled={holiday.crewFour === null || this.props.userName !== this.props.users[3].userName}
                        onClick={() => this.props.nameToggle(holiday._id, { "crewFour": !holiday.crewFour })}>
                        <i className={
                            holiday.crewFour === true ? "calendar icon" :
                                (holiday.crewFour === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </button>
                crewFiveButton =
                    <button className="circular ui icon button"
                        disabled={holiday.crewFive === null || this.props.userName !== this.props.users[4].userName}
                        onClick={() => this.props.nameToggle(holiday._id, { "crewFive": !holiday.crewFive })}>
                        <i className={
                            holiday.crewFive === true ? "calendar icon" :
                                (holiday.crewFive === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </button>
                }
            return (
                <tbody className="maintable" key={holiday.id}>
                    <tr>
                        <td>{holiday.date}</td>
                        <td>{holiday.day}</td>
                        <td className={holiday.crewOne === true ? "positive" : "negative"}>
                            {crewOneButton}
                        </td>
                        <td className={holiday.crewTwo === true ? "positive" : "negative"}>
                            {crewTwoButton}
                        </td>
                        <td className={holiday.crewThree === true ? "positive" : "negative"}>
                            {crewThreeButton}
                        </td>
                        <td className={holiday.crewFour === true ? "positive" : "negative"}>
                            {crewFourButton}
                        </td>
                        <td className={holiday.crewFive === true ? "positive" : "negative"}>
                            {crewFiveButton}
                        </td>
                        <td>{(holiday.crewOne + holiday.crewTwo + holiday.crewThree + holiday.crewFour + holiday.crewFive)}</td>
                    </tr>
                </tbody>
            );
            }
        });
    }

    render() {
        if (!this.props.users[0]) {
            return <div />
        }
        return (
            <div className="search-bar ui segment">
                <div className="field">
                <DateRangePicker
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        displayFormat={() => "DD-MM-YYYY"}
                        isOutsideRange={() => false}
                />
                </div>
                <br></br>
            <div 
                id='div2ToPrint'
                style={{
                    "borderRadius": "3px",
                    "border": "1px solid lightGrey",
                    "maxHeight": "75vh",
                    "overflowY": "scroll",
                    "width": "100%", 
                    "zIndex": 7 }}
                onScroll={this.handleScroll}>
                <table className="ui celled table" style={{border: "1px"}}>
                    <thead>
                        {this.renderTableHeader()}
                    </thead>   
                        {this.renderHolidays()}
                </table>
            </div>
        </div>
        );
    }
}


const mapStateToProps = (state) => {
    return { 
        holidays: Object.values(state.holidays),
        ...state.users[10],
        users: Object.values(state.users)
    };
};

export default connect(
    mapStateToProps, 
    { fetchHolidays, createDay, dateToggle, fetchHoliday, fetchUser, nameToggle, fetchUserByCrew }
)(HolidayList);
