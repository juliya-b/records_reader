import React from 'react';
import './CategoryList.scss';
import CategoryItem from './CategoryItem.jsx';
import AddCategory from './AddCategory.jsx';

const CategoryList = React.createClass({
    getInitialState() {
        return {
            categories: []
        };
    },

    componentDidMount() {
        let localCategories = JSON.parse(localStorage.getItem('categories'));

        if (localCategories) {
            this.setState({ categories: localCategories });
        }
    },

    componentDidUpdate() {
        this._updateLocalStorage();
    },

    handleCategoryAdd(newCategory) {
        let newCategories = this.state.categories.slice();

        newCategories.unshift(newCategory);
        this.setState({ categories: newCategories });
    },

    handleCategoryDelete(category) {
        let categoryId = category.id,
            newCategories = this.state.categories.filter(function(category) {
                return category.id !== categoryId;
            });

        this.setState({ categories: newCategories });
    },

    render() {
        let onCategoryDelete = this.handleCategoryDelete;
        return (
            <div className="wrap-category-list">
                <div className="category-list">
                    {
                        this.state.categories.map(function(category) {
                            return (
                                <CategoryItem
                                    key={category.id}
                                    onDelete={onCategoryDelete.bind(null, category)}>
                                    {category.text}
                                </CategoryItem>
                            );
                        })
                    }
                </div>
                <AddCategory onCategoryAdd={this.handleCategoryAdd}/>
            </div>
        )
    },

    _updateLocalStorage() {
        let categories = JSON.stringify(this.state.categories);
        localStorage.setItem('categories', categories);
    }
});

export default CategoryList;