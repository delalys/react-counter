import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddElementForm extends Component {

    state = {
        value: '',
    };

    handleChange = (e) => {
        this.setState({ value: e.target.value});
    }

    handleAddElement = (e) => {
        e.preventDefault();
        
        // Create a new element
        const newElement = {
            id: this.props.elements.length + 1,
            value: this.state.value,
            count: 0,
            elementSettingsIsDisplayed: false,
            elementIsInFullScreen: false,
            incrementBy: 1,
            settingsOpen: false,
            countHistory: [],
            countHistoryGroupByDay: [],
            todayCount: 0,
            lastWeekCount: 0,
            lastMonthCount: 0,
        }

        // Add a new element to app state
        this.props.addElement(newElement);
        
        // Clear input
        this.setState({ value: '' });
    }

    render() {

        return(
            <form className="d-flex" onSubmit={this.handleAddElement}>
                <span 
                    className="form-element__left-action"
                    onClick={() => {this.props.displayAppSettings()}}
                >
                    <svg version="1.1" viewBox="0 0 585.28 585.28" xmlns="http://www.w3.org/2000/svg">
                        <path d="m538 227.83h-20.963c-5.225 0-13.502-6.353-17.029-15.471-1.242-3.213-2.576-6.432-3.963-9.569-3.953-8.938-2.596-19.278 1.096-22.962l14.838-14.819c18.441-18.443 18.441-48.443 6e-3 -66.879l-24.783-24.783c-8.951-8.951-20.83-13.877-33.455-13.877s-24.504 4.927-33.451 13.877l-14.822 14.822c-2.158 2.157-6.531 3.498-11.414 3.498-3.957 0-8.064-0.851-11.564-2.399-3.139-1.386-6.352-2.717-9.553-3.957-9.123-3.528-15.479-11.809-15.479-17.032v-20.983c-1e-3 -26.074-21.216-47.292-47.29-47.292h-35.049c-26.077 0-47.289 21.215-47.289 47.292v20.982c0 5.223-6.356 13.5-15.475 17.029-3.191 1.233-6.405 2.564-9.553 3.954-3.5 1.548-7.613 2.399-11.573 2.399-4.883 0-9.259-1.34-11.417-3.495l-14.829-14.823c-8.938-8.938-20.82-13.865-33.452-13.865s-24.504 4.927-33.431 13.877l-24.77 24.772c-18.437 18.437-18.437 48.437 0 66.873l14.823 14.823c3.69 3.69 5.052 14.039 1.102 22.987-1.383 3.136-2.714 6.349-3.951 9.553-3.525 9.116-11.805 15.468-17.035 15.468h-20.976c-26.077 0-47.289 21.215-47.289 47.292v35.049c0 26.074 21.215 47.289 47.289 47.289h20.973c5.227 0 13.51 6.352 17.032 15.469 1.236 3.201 2.567 6.414 3.95 9.549 3.951 8.949 2.589 19.297-1.102 22.988l-14.823 14.822c-18.437 18.434-18.437 48.449-6e-3 66.9l24.786 24.789c8.935 8.932 20.808 13.854 33.437 13.854 12.628 0 24.501-4.918 33.437-13.854l14.832-14.842c2.188-2.189 6.454-3.496 11.408-3.496 3.957 0 8.063 0.85 11.567 2.398 3.109 1.377 6.328 2.711 9.562 3.963 9.122 3.527 15.475 11.805 15.475 17.029v20.963c0 26.074 21.215 47.293 47.289 47.293h35.05c26.076 0 47.289-21.215 47.289-47.293v-20.963c0-5.225 6.352-13.502 15.467-17.023 3.201-1.236 6.414-2.566 9.551-3.953 3.5-1.545 7.607-2.396 11.564-2.396 4.889 0 9.266 1.34 11.422 3.498l14.822 14.822c8.961 8.936 20.842 13.854 33.469 13.854 1.367 0 2.75-0.062 4.111-0.182 17.268-1.5 32.502-16.805 40.686-25.027l1.035-1.037 12.391-12.391c18.404-18.451 18.404-48.455 8e-3 -66.895l-14.832-14.832c-3.689-3.689-5.051-14.039-1.102-22.99 1.391-3.145 2.719-6.357 3.951-9.549 3.525-9.117 11.803-15.469 17.025-15.469h20.965c26.078 0 47.289-21.215 47.289-47.293v-35.045c0.012-26.076-21.203-47.291-47.277-47.291zm-117.39 64.817c0 70.559-57.402 127.96-127.96 127.96-70.558 0-127.96-57.402-127.96-127.96 0-70.557 57.403-127.96 127.96-127.96 70.557-1e-3 127.96 57.401 127.96 127.96z"/>
                    </svg>
                </span>
                <input
                    className="form-element__input" 
                    value={this.state.value}
                    type="text" 
                    placeholder="Enter a new name"
                    onChange={this.handleChange}
                    ></input>
                <input
                    type="submit" 
                    className="form-element__btn btn btn-primary"
                    value="Add"
                    />
                <span className="bg-btn"></span>
            </form>
        )
    }
}

AddElementForm.propTypes = {  
    elements: PropTypes.array.isRequired,
    
    addElement: PropTypes.func.isRequired,
    
    displayAppSettings: PropTypes.func.isRequired,
}

export default AddElementForm;