import React from 'react';
import './AddCategory.scss';

const AddCategory = React.createClass({
    getInitialState() {
        return {field: ''}
    },
    handleChange(e) {
        this.setState({field: e.target.value})
    },
    handleCategoryAdd() {
        if(!this.state.field) {
            return
        }
        let newCategory = {
            text: this.state.field,
            id: Date.now()
        };

        this.props.onCategoryAdd(newCategory);
        this.state.field = '';
    },

    render(){
        return (
            <div className="add-category" >
                <div className="add-category__wrap">
                    <label className="add-category__field">
                        <span>Add category: </span>
                        <input
                            type="text"
                            placeholder="Write name..."
                            ref="category"
                            value={this.state.field}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button className="add-category__btn"
                            disabled={!this.state.field}
                            onClick={this.handleCategoryAdd}
                    >
                        Add category
                    </button>
                </div>
            </div>
        )
    }
});

export default AddCategory;