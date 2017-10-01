import React from 'react';
import './RecordGrid.scss';
import ItemRecord from './ItemRecord.jsx';

const RecordGrid = React.createClass({
    render(){
        let onRecordDelete = this.props.onRecordDelete;
        return (
            <div className="record-grid" ref="grid">
                {
                    this.props.records.map(function(record){
                        let options = {
                            category: record.category,
                            name: record.name,
                            description: record.description,
                            date: record.date,
                            total: record.total
                        };

                        return (
                            <ItemRecord
                                key = {record.id}
                                object={options}
                                onDelete={onRecordDelete.bind(null, record)}
                            />
                        );
                    })
                }
            </div>
        )
    }
});
export default RecordGrid;