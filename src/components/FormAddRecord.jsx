import React from 'react';
import './FormAddRecord.scss';
import CategoryList from './CategoryList.jsx';

const FormAddRecord = React.createClass({
    getInitialState() {
        return {
            date: '',
            name:'',
            descriptionText: '',
            total: 0
        };
    },
    handleFieldChange(nameField, e) {
        switch (nameField) {
            case 'date': {
                this.setState({
                    date: e.target.value
                });
            }
                break;
            case 'name': {
                this.setState({
                    name: e.target.value
                });
            }
                break;
            case 'description': {
                this.setState({
                    descriptionText: e.target.value
                });
            }
                break;
            case 'total': {
                this.setState({
                    total: e.target.value
                });
            }
                break;
        }
    },
    handleRecordAdd() {
        let categoryText = '';

        if(sessionStorage.getItem('category')) {
            categoryText = sessionStorage.getItem('category');
        } else {
            categoryText = 'Car';
        }
        let newRecord = {
            id: Date.now(),
            category: categoryText,
            name: this.state.name,
            date: this.state.date,
            description: this.state.descriptionText,
            total: this.state.total
        };

        this.props.onRecordAdd(newRecord);
        this.setState({
            date: '',
            name:'',
            descriptionText: '',
            total: 0
        });
    },
    render(){
        return (
            <div className="add-record" >
                <p className="add-record__head">Add record</p>
                <div className="add-record__wrap">
                    <div className='add-record__field'>
                        <span>Choose category:</span>
                        <div className="wrap-category">
                            <CategoryList />
                        </div>
                    </div>
                    <label className="add-record__field">
                        <span>Date:</span>
                        <input
                            type="date"
                            value={this.state.date}
                            onChange={this.handleFieldChange.bind(this, 'date')}/>
                    </label>
                    <label className="add-record__field">
                        <span>Name:</span>
                        <input type="text"
                               placeholder="Write name..."
                               value={this.state.name}
                               onChange={this.handleFieldChange.bind(this, 'name')}/>
                    </label>
                    <label className="add-record__field">
                        <span>Description:</span>
                        <textarea
                            onChange={this.handleFieldChange.bind(this, 'description')}
                            value={this.state.descriptionText}
                            placeholder="Write description..."
                            rows={10}>

                        </textarea>
                    </label>
                    <label className="add-record__field">
                        <span>Spent money:</span>
                        <input type="number"
                               placeholder="0"
                               value={this.state.total}
                               onChange={this.handleFieldChange.bind(this, 'total')}/>
                    </label>
                    <button
                        className="add-record__btn"
                        onClick={this.handleRecordAdd}
                        disabled={ !(this.state.date) && !(this.state.name) && !(this.state.total) && !(this.state.descriptionText)}>Add record</button>
                </div>
            </div>
        )
    }
});

export default FormAddRecord;