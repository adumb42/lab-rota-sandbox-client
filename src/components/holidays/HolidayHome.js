import React from 'react';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import { Link } from 'react-router-dom';
import { fetchHolidays, fetchHoliday, createDay, dateToggle, fetchUser, nameToggle } from '../../actions';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class HolidayList extends React.Component {

    state = { startDate: '01-09-2020', endDate: '31-09-2021' };

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
        this.props.fetchHolidays();
        this.props.fetchUser();
        const startDate = moment(localStorage.getItem('startDate'));
        const endDate = moment(localStorage.getItem('endDate'));
        this.setState({ startDate, endDate });
    };

    componentDidUpdate() {
        this.handleScrollPosition();
        this.handleDateSubmit();
        this.render();
    };

    renderHolidays() {
        console.log(this.props)
        return this.props.holidays.map(holiday => {
            while ( 
                    moment(holiday.date, 'DD-MM-YYYY').valueOf() >= moment(this.state.startDate - 86400000) &&
                    moment(holiday.date, 'DD-MM-YYYY').valueOf() <= moment(this.state.endDate)
                ) {
            let johnButton
            let emilyButton
            let ryanButton
            let alexButton
            let leanneButton
            if (holiday.day === "Saturday" || holiday.day === "Sunday") {
                johnButton =
                    <Link
                        to={{
                            pathname: `/swap/${holiday.id}`,
                            state: {
                                name: "John",
                                id: holiday._id
                            }
                        }}
                        className={this.props.user !== "John" || holiday.John !== true ? `disabled circular ui icon button` : `circular ui icon button restore-${holiday.id}`}>
                        <i className={
                            holiday.John === true ? "calendar icon" :
                                (holiday.John === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </Link>
                emilyButton = 
                    <Link 
                        to={{
                            pathname: `/swap/${holiday.id}`,
                            state: {
                                name: "Emily",
                                id: holiday._id
                            }
                        }}
                    className={this.props.user !== "Emily" || holiday.Emily !== true ? `disabled circular ui icon button` : `circular ui icon button restore-${holiday.id}`}>
                        <i className={
                            holiday.Emily === true ? "calendar icon" :
                            (holiday.Emily === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </Link>
                ryanButton = 
                    <Link 
                        to={{
                            pathname: `/swap/${holiday.id}`,
                            state: {
                                name: "Ryan",
                                id: holiday._id
                            }
                        }}
                    className={this.props.user !== "Ryan" || holiday.Ryan !== true ? `disabled circular ui icon button` : `circular ui icon button restore-${holiday.id}`}>
                        <i className={
                            holiday.Ryan === true ? "calendar icon" :
                            (holiday.Ryan === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </Link>
                alexButton = 
                    <Link 
                        to={{
                            pathname: `/swap/${holiday.id}`,
                            state: {
                                name: "Alex",
                                id: holiday._id
                            }
                        }}
                    className={this.props.user !== "Alex" || holiday.Alex !== true ? `disabled circular ui icon button` : `circular ui icon button restore-${holiday.id}`}>
                        <i className={
                            holiday.Alex === true ? "calendar icon" :
                            (holiday.Alex === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </Link>
                leanneButton = 
                    <Link
                        to={{
                            pathname: `/swap/${holiday.id}`,
                            state: {
                                name: "LeAnne",
                                id: holiday._id
                            }
                        }}
                    className={this.props.user !== "LeAnne" || holiday.LeAnne !== true ? `disabled circular ui icon button` : `circular ui icon button restore-${holiday.id}`}>
                        <i className={
                            holiday.LeAnne === true ? "calendar icon" :
                            (holiday.LeAnne === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </Link>
                } else {
                johnButton = 
                    <button className="circular ui icon button"
                        disabled={holiday.John === null || this.props.user !== "John"}
                        onClick={() => this.props.nameToggle(holiday._id, { "John": !holiday.John })}>
                        <i className={
                            holiday.John === true ? "calendar icon" :
                                (holiday.John === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </button>
                emilyButton =
                    <button className="circular ui icon button"
                        disabled={holiday.Emily === null || this.props.user !== "Emily"}
                        onClick={() => this.props.nameToggle(holiday._id, { "Emily": !holiday.Emily })}>
                        <i className={
                            holiday.Emily === true ? "calendar icon" :
                                (holiday.Emily === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </button>
                ryanButton =
                    <button className="circular ui icon button"
                        disabled={holiday.Ryan === null || this.props.user !== "Ryan"}
                        onClick={() => this.props.nameToggle(holiday._id, { "Ryan": !holiday.Ryan })}>
                        <i className={
                            holiday.Ryan === true ? "calendar icon" :
                                (holiday.Ryan === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </button>
                alexButton =
                    <button className="circular ui icon button"
                        disabled={holiday.Alex === null || this.props.user !== "Alex"}
                        onClick={() => this.props.nameToggle(holiday._id, { "Alex": !holiday.Alex })}>
                        <i className={
                            holiday.Alex === true ? "calendar icon" :
                                (holiday.Alex === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </button>
                leanneButton =
                    <button className="circular ui icon button"
                        disabled={holiday.LeAnne === null || this.props.user !== "LeAnne"}
                        onClick={() => this.props.nameToggle(holiday._id, { "LeAnne": !holiday.LeAnne })}>
                        <i className={
                            holiday.LeAnne === true ? "calendar icon" :
                                (holiday.LeAnne === false ? "calendar check outline icon" : "calendar outline icon")}>
                        </i>
                    </button>
                }
            return (
                <tbody className="maintable" key={holiday.id}>
                    <tr>
                        <td>{holiday.date}</td>
                        <td>{holiday.day}</td>
                        <td className={holiday.John === true ? "positive" : "negative"}>
                            {johnButton}
                        </td>
                        <td className={holiday.Emily === true ? "positive" : "negative"}>
                            {emilyButton}
                        </td>
                        <td className={holiday.Ryan === true ? "positive" : "negative"}>
                            {ryanButton}
                        </td>
                        <td className={holiday.Alex === true ? "positive" : "negative"}>
                            {alexButton}
                        </td>
                        <td className={holiday.LeAnne === true ? "positive" : "negative"}>
                            {leanneButton}
                        </td>
                        <td>{(holiday.John + holiday.Emily + holiday.Ryan + holiday.Alex + holiday.LeAnne)}</td>
                    </tr>
                </tbody>
            );
            }
        });
    }

    render() {
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
                        <tr>
                            <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 6 }}>Date</th>
                            <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 6 }}>Day</th>
                            <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 6 }}>John</th>
                            <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 6 }}>Emily</th>
                            <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 6 }}>Ryan</th>
                            <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 6 }}>Alex</th>
                            <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 6 }}>LeAnne</th>
                            <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 6 }}>Count</th>
                        </tr>
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
        ...state.users[0]
    };
};

export default connect(
    mapStateToProps, 
    { fetchHolidays, createDay, dateToggle, fetchHoliday, fetchUser, nameToggle }
)(HolidayList);
