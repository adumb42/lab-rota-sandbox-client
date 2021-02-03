import React from 'react';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import { fetchHolidays, fetchHoliday, crewOneBench, crewTwoBench, crewThreeBench, crewFourBench, crewFiveBench, fetchUser } from '../../actions';
import { connect } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class HolidayList extends React.Component {
    state = { startDate: '', endDate: ''};

    handleDateSubmit = () => {
        const { startDate, endDate } = this.state;
        moment(localStorage.setItem('startDate', startDate));
        moment(localStorage.setItem('endDate', endDate));
    };

    handleScrollPosition = () => {
        const scrollPosition = this.state.scrollPosition;
        const mainWindow = document.getElementById('divToPrint');
        if (scrollPosition) {
            mainWindow.scrollTo(0, scrollPosition);
        }
    };

    handleScroll = () => {
        const mainWindow = document.getElementById('divToPrint');
        localStorage.setItem('scrollPosition', mainWindow.scrollTop);
    };

    componentDidMount() {
        this.props.fetchHolidays();
        const startDate = moment(localStorage.getItem('startDate'));
        const endDate = moment(localStorage.getItem('endDate'));
        const scrollPosition = parseInt(localStorage.getItem('scrollPosition'));
        this.setState({ startDate, endDate, scrollPosition });
    };

    componentDidUpdate() {
        this.renderHolidays();
        this.handleDateSubmit();
        this.handleScrollPosition();
        this.handleScroll();
    };

    printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                let imgWidth = 190;
                let imgHeight = canvas.height * imgWidth / canvas.width;
                const imgData = canvas.toDataURL('img/png');
                const pdf = new jsPDF('p', 'mm', [297, 420]);
                pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
                pdf.save("download.pdf");
            })
        ;
    }

    renderHolidays() {
        return this.props.holidays.map(holiday => {
            let johnButton
            let emilyButton
            let ryanButton
            let alexButton
            let leanneButton
            let backgroundColorOne
            let backgroundColorTwo
            let backgroundColorThree
            let backgroundColorFour
            let backgroundColorFive

            if (holiday.crewOneBench === 0 && holiday.John === true) {
                backgroundColorOne = { "backgroundColor": "silver" }
            } if (holiday.crewOneBench === 1 && holiday.John === true) {
                backgroundColorOne = { "backgroundColor": "salmon" }
            } if (holiday.crewOneBench === 2 && holiday.John === true) {
                backgroundColorOne = { "backgroundColor": "khaki" }
            } if (holiday.crewOneBench === 3 && holiday.John === true) {
                backgroundColorOne = { "backgroundColor": "paleturquoise" }
            } if (holiday.crewOneBench === 4 && holiday.John === true) {
                backgroundColorOne = { "backgroundColor": "slateblue" }
            } if (holiday.crewOneBench === 5 && holiday.John === true) {
                backgroundColorOne = { "backgroundColor": "orange" }
            };
            

            if (holiday.crewTwoBench === 0 && holiday.Emily === true) {
                backgroundColorTwo = { "backgroundColor": "silver" }
            } if (holiday.crewTwoBench === 1 && holiday.Emily === true) {
                backgroundColorTwo = { "backgroundColor": "salmon" }
            } if (holiday.crewTwoBench === 2 && holiday.Emily === true) {
                backgroundColorTwo = { "backgroundColor": "khaki" }
            } if (holiday.crewTwoBench === 3 && holiday.Emily === true) {
                backgroundColorTwo = { "backgroundColor": "paleturquoise" }
            } if (holiday.crewTwoBench === 4 && holiday.Emily === true) {
                backgroundColorTwo = { "backgroundColor": "slateblue" }
            } if (holiday.crewTwoBench === 5 && holiday.Emily === true) {
                backgroundColorTwo = { "backgroundColor": "orange" }
            };

            if (holiday.crewThreeBench === 0 && holiday.Ryan === true) {
                backgroundColorThree = { "backgroundColor": "silver" }
            } if (holiday.crewThreeBench === 1 && holiday.Ryan === true) {
                backgroundColorThree = { "backgroundColor": "salmon" }
            } if (holiday.crewThreeBench === 2 && holiday.Ryan === true) {
                backgroundColorThree = { "backgroundColor": "khaki" }
            } if (holiday.crewThreeBench === 3 && holiday.Ryan === true) {
                backgroundColorThree = { "backgroundColor": "paleturquoise" }
            } if (holiday.crewThreeBench === 4 && holiday.Ryan === true) {
                backgroundColorThree = { "backgroundColor": "slateblue" }
            } if (holiday.crewThreeBench === 5 && holiday.Ryan === true) {
                backgroundColorThree = { "backgroundColor": "orange" }
            };

            if (holiday.crewFourBench === 0 && holiday.Alex === true) {
                backgroundColorFour = { "backgroundColor": "silver" }
            } if (holiday.crewFourBench === 1 && holiday.Alex === true) {
                backgroundColorFour = { "backgroundColor": "salmon" }
            } if (holiday.crewFourBench === 2 && holiday.Alex === true) {
                backgroundColorFour = { "backgroundColor": "khaki" }
            } if (holiday.crewFourBench === 3 && holiday.Alex === true) {
                backgroundColorFour = { "backgroundColor": "paleturquoise" }
            } if (holiday.crewFourBench === 4 && holiday.Alex === true) {
                backgroundColorFour = { "backgroundColor": "slateblue" }
            } if (holiday.crewFourBench === 5 && holiday.Alex === true) {
                backgroundColorFour = { "backgroundColor": "orange" }
            };

            if (holiday.crewFiveBench === 0 && holiday.LeAnne === true) {
                backgroundColorFive = { "backgroundColor": "silver" }
            } if (holiday.crewFiveBench === 1 && holiday.LeAnne === true) {
                backgroundColorFive = { "backgroundColor": "salmon" }
            } if (holiday.crewFiveBench === 2 && holiday.LeAnne === true) {
                backgroundColorFive = { "backgroundColor": "khaki" }
            } if (holiday.crewFiveBench === 3 && holiday.LeAnne === true) {
                backgroundColorFive = { "backgroundColor": "paleturquoise" }
            } if (holiday.crewFiveBench === 4 && holiday.LeAnne === true) {
                backgroundColorFive = { "backgroundColor": "slateblue" }
            } if (holiday.crewFiveBench === 5 && holiday.LeAnne === true) {
                backgroundColorFive = { "backgroundColor": "orange" }
            };
            
            switch (true) {
                case holiday.John:
                    johnButton =
                        <select className={this.props.holidays[365] !== "Admin" ? "disabled ui dropdown" : "ui dropdown"}
                            value={holiday.crewOneBench}
                            onChange={(e) => this.props.crewOneBench(holiday.id, { "crewOneBench": parseInt(e.target.value) })} style={{
                                "WebkitAppearance": "none",
                                "MozAppearance": "none",
                                "textIndent": "1px",
                                "textOverflow": '',
                                "border": "none",
                                "backgroundColor": "transparent"
                            }}>
                            <option value="0">NIR</option>
                            <option value="1">PHX</option>
                            <option value="2">WS</option>
                            <option value="3">WWT</option>
                            <option value="4">UTI</option>
                            <option value="5">SPT</option>
                        </select>
            }

            switch (true) {
                case holiday.Emily:
                    emilyButton =
                        <select className={this.props.holidays[365] !== "Admin" ? "disabled ui dropdown" : "ui dropdown"}
                            value={holiday.crewTwoBench}
                            onChange={(e) => this.props.crewTwoBench(holiday.id, { "crewTwoBench": parseInt(e.target.value) })} style={{
                                "WebkitAppearance": "none",
                                "MozAppearance": "none",
                                "textIndent": "1px",
                                "textOverflow": '',
                                "border": "none",
                                "backgroundColor": "transparent"
                            }}>
                            <option value="0">NIR</option>
                            <option value="1">PHX</option>
                            <option value="2">WS</option>
                            <option value="3">WWT</option>
                            <option value="4">UTI</option>
                            <option value="5">SPT</option>
                        </select>  
            }
                
            switch (true) {
                case holiday.Ryan:
                    ryanButton =
                        <select className={this.props.holidays[365] !== "Admin" ? "disabled ui dropdown" : "ui dropdown"}
                            value={holiday.crewThreeBench}
                            onChange={(e) => this.props.crewThreeBench(holiday.id, { "crewThreeBench": parseInt(e.target.value) })} style={{
                                "WebkitAppearance": "none",
                                "MozAppearance": "none",
                                "textIndent": "1px",
                                "textOverflow": '',
                                "border": "none",
                                "backgroundColor": "transparent"
                            }}>
                            <option value="0">NIR</option>
                            <option value="1">PHX</option>
                            <option value="2">WS</option>
                            <option value="3">WWT</option>
                            <option value="4">UTI</option>
                            <option value="5">SPT</option>
                        </select>
            }
                
            switch (true) {
                case holiday.Alex:
                    alexButton =
                        <select className={this.props.holidays[365] !== "Admin" ? "disabled ui dropdown" : "ui dropdown"}
                            value={holiday.crewFourBench}
                            onChange={(e) => this.props.crewFourBench(holiday.id, { "crewFourBench": parseInt(e.target.value) })} style={{
                                "WebkitAppearance": "none",
                                "MozAppearance": "none",
                                "textIndent": "1px",
                                "textOverflow": '',
                                "border": "none",
                                "backgroundColor": "transparent"
                            }}>
                            <option value="0">NIR</option>
                            <option value="1">PHX</option>
                            <option value="2">WS</option>
                            <option value="3">WWT</option>
                            <option value="4">UTI</option>
                            <option value="5">SPT</option>
                        </select>
            }
                
            switch (true) {
                case holiday.LeAnne:
                    leanneButton =
                        <select className={this.props.holidays[365] !== "Admin" ? "disabled ui dropdown" : "ui dropdown"}
                            value={holiday.crewFiveBench}
                            onChange={(e) => this.props.crewFiveBench(holiday.id, { "crewFiveBench": parseInt(e.target.value) })} style={{
                                "WebkitAppearance": "none",
                                "MozAppearance": "none",
                                "textIndent": "1px",
                                "textOverflow": '',
                                "border": "none",
                                "backgroundColor": "transparent"
                            }}>
                            <option value="0">NIR</option>
                            <option value="1">PHX</option>
                            <option value="2">WS</option>
                            <option value="3">WWT</option>
                            <option value="4">UTI</option>
                            <option value="5">SPT</option>
                        </select>
            }
    
            while (
                moment(holiday.date, 'DD-MM-YYYY').valueOf() >= moment(this.state.startDate - 86400000) &&
                moment(holiday.date, 'DD-MM-YYYY').valueOf() <= moment(this.state.endDate)
            )
                return (
                    <tbody className="maintable" id="maintable" key={holiday.id}>
                        <tr>
                            <td>{holiday.date}</td>
                            <td>{holiday.day}</td>
                            <td style={backgroundColorOne}>
                                {johnButton}
                            </td>
                            <td style={backgroundColorTwo}>
                                {emilyButton}
                            </td>
                            <td style={backgroundColorThree}>
                                {ryanButton}
                            </td>
                            <td style={backgroundColorFour}>
                                {alexButton}
                            </td>
                            <td style={backgroundColorFive}>
                                {leanneButton}
                            </td>
                            <td>{(holiday.John + holiday.Emily + holiday.Ryan + holiday.Alex + holiday.LeAnne)}</td>
                        </tr>
                    </tbody>
                );
            }
        );
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <button className="ui primary button" onClick={this.printDocument}>Export as PDF</button>
                <br></br>
                <br></br>
                <div className="App">
                <DateRangePicker
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        displayFormat={() => "DD-MM-YYYY"}
                />
                </div>
                <br></br>
                <div id="divToPrint" 
                    style={{
                    "borderRadius": "3px",
                    "border": "1px solid lightGrey",
                    "maxHeight": "330vh",
                    "overflowY": "scroll",
                    "width": "100%"
                    }}
                    onScroll={this.handleScroll}>
                    <table className="ui celled table" style={{ border: "1px" }}>
                        <thead>
                            <tr>
                                <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 0 }}>Date</th>
                                <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 0 }}>Day</th>
                                <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 1 }}>John</th>
                                <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 1 }}>Emily</th>
                                <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 1 }}>Ryan</th>
                                <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 1 }}>Alex</th>
                                <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 1 }}>LeAnne</th>
                                <th style={{ "position": "webkitSticky", /* Safari */ "position": "sticky", "top": 0, "zIndex": 1 }}>Count</th>
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
    return { holidays: Object.values(state.holidays) };
};

export default connect(
    mapStateToProps,
    { fetchHolidays, fetchHoliday, crewOneBench, crewTwoBench, crewThreeBench, crewFourBench, crewFiveBench, fetchUser }
)(HolidayList);