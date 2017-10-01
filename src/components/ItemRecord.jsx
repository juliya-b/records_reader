import React from 'react';
import './ItemRecord.scss';

const ItemRecord = React.createClass({
    render(){
        return (
            <div className="record">
                <div className="record__top">
                    <div className="record__category">
                        <span>Category:</span>
                        <p>{this.props.object.category}</p>
                    </div>
                    <div className="record__date">
                        <p>{this.props.object.date}</p>
                    </div>
                    <div className="record__name">
                        <span>Name:</span>
                        <p>{this.props.object.name}</p>
                    </div>
                    <div className="record__description">
                        <p>{this.props.object.description}</p>
                    </div>
                </div>
                <div className="record__bottom">
                    <div className="record__total">
                        <span className="total">Spent money:</span>
                        <p>{this.props.object.total}</p>
                    </div>
                </div>
                <span className="delete-record" onClick={this.props.onDelete}> × </span>
            </div>
        )
    }
});

export default ItemRecord;