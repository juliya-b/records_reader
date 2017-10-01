import React from 'react';
import './RecordsApp.scss';
import FormAddRecord from './FormAddRecord.jsx';
import RecordGrid from './RecordGrid.jsx';

const RecordsApp = React.createClass({
    getInitialState() {
        return {
            records: []
        };
    },

    componentDidMount() {
        let localRecords = JSON.parse(localStorage.getItem('records'));
        if (localRecords) {
            this.setState({
                records: localRecords
            });
        }
    },

    componentDidUpdate() {
        this._updateLocalStorage();
    },

    handleRecordDelete: function(record) {
        let recordId = record.id,
            newRecords = this.state.records.filter(function(record) {
            return record.id !== recordId;
        });
        this.setState({
            records: newRecords
        });
    },

    handleRecordAdd(newRecord) {
        let newRecords = this.state.records.slice();
        newRecords.unshift(newRecord);
        this.setState({
            records: newRecords
        });
    },

    render() {
        return (
            <div className="wrapper">
                <FormAddRecord onRecordAdd={this.handleRecordAdd}/>
                <RecordGrid
                    records={this.state.records}
                    onRecordDelete={this.handleRecordDelete}/>
            </div>
        )
    },

    _updateLocalStorage() {
        let records = JSON.stringify(this.state.records);
        localStorage.setItem('records', records);
    }
});

export default RecordsApp;