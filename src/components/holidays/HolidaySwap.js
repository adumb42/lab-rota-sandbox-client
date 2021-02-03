import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchHoliday, johnToggle, emilyToggle, ryanToggle, alexToggle, leanneToggle } from '../../actions';

class HolidaySwap extends React.Component {
    componentDidMount() {
        this.props.fetchHoliday(this.props.match.params.id);
    }

    renderActions() {
        const id = this.props.match.params.id 
        const John = this.props.holiday.John
        const Emily = this.props.holiday.Emily
        const Ryan = this.props.holiday.Ryan
        const Alex = this.props.holiday.Alex
        const LeAnne = this.props.holiday.LeAnne
        const getName = this.props.location.state.name
        const johnChange = () => this.props.emilyToggle(id, { "John": null })
        const emilyChange = () => this.props.emilyToggle(id, { "Emily": null })
        const ryanChange = () => this.props.ryanToggle(id, { "Ryan": null })
        const alexChange = () => this.props.alexToggle(id, { "Alex": null })
        const leanneChange = () => this.props.leanneToggle(id, { "LeAnne": null })
        
        let johnButton 
        let emilyButton 
        let ryanButton 
        let alexButton 
        let leanneButton 
        let nameChange

        if (getName === "John") {
            nameChange = johnChange
        } if (getName === "Emily") {
            nameChange = emilyChange
        } if (getName === "Ryan") {
            nameChange = ryanChange
        } if (getName === "Alex") {
            nameChange = alexChange
        } if (getName === "LeAnne") {
            nameChange = leanneChange
        }

        if (John === null && getName !== "John") {
            johnButton = <button className="ui button" onClick={() => this.props.johnToggle(id, { "John": true })}>John</button>
        } if (Emily === null && getName !== "Emily") {
            emilyButton = <button className="ui button" onClick={() => this.props.emilyToggle(id, { "Emily": true })}>Emily</button>
        } if (Ryan === null && getName !== "Ryan") {
            ryanButton = <button className="ui button" onClick={() => this.props.ryanToggle(id, { "Ryan": true })}>Ryan</button>
        } if (Alex === null && getName !== "Alex") {
            alexButton = <button className="ui button" onClick={() => this.props.alexToggle(id, { "Alex": true })}>Alex</button>
        } if (LeAnne === null && getName !== "LeAnne") {
            leanneButton = <button className="ui button" onClick={() => this.props.leanneToggle(id, { "LeAnne": true })}>Le'Anne</button>
        } 

        return (
            <div onClick={nameChange}>
               {johnButton}
               {emilyButton}
               {ryanButton}
               {alexButton}
               {leanneButton}
            </div>
        );
    }

    render() {
        return (
            <Modal 
                title= {`Now that you have booked this ${this.props.holiday.day} off ${this.props.location.state.name}, you'll have to swap.`}
                content="Who would you like to swap with?"
                actions={this.renderActions()}
            />
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { holiday: state.holidays[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchHoliday, johnToggle, emilyToggle, ryanToggle, alexToggle, leanneToggle })(HolidaySwap);
