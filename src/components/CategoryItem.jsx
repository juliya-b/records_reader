import React from 'react';
import './CategoryItem.scss';

const CategoryItem = React.createClass({
    handleChecked() {
        sessionStorage.setItem('category', this.props.children);
    },
    render() {
        return (
            <div className="item-wrapper">
                <label className="item-body" onClick={this.handleChecked}>
                    <input
                        type='radio'
                        name='catName'
                        onChange={this.handleChecked}
                    />
                    <span>{this.props.children}</span>
                </label>
                <p className="btn-delete" onClick={this.props.onDelete}> × </p>
            </div>
        )
    }
});

export default CategoryItem;