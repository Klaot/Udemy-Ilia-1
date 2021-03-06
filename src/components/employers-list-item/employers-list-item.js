import React from 'react';
import './employers-list-item.css';


class EmployersListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            increase: false,
            premium: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    addLike = () => {
        this.setState(({premium}) => ({
            premium: !premium
        }))
    }

    render() {

        const {name, salary, onDelete} = this.props;
        const {increase, premium} = this.state;
        
        
        let className = "list-group-item d-flex justify-content-between";
        if (increase) {
            className += " increase"
        } 
         if (premium ) {
            className += " like"
        }

    return (
        <li className = {className}>
            <span className = "list-group-item-label" onClick={this.addLike}>{name}</span>
            <input type = "text" className = "list-group-item-input" defaultValue = {salary + '$'}/>
            <div className = "d-flex justify-content-center align-items-center">
                <button type = "button"
                        className = "btn-cookie btn-sm " onClick={this.onIncrease}>
                        <i className = "fas fa-cookie"></i>
                </button>
                <button type = "button"
                        className = "btn-trash btn-sm "
                        onClick={onDelete}>
                        <i className = "fas fa-trash"></i>
                </button>
                <i className = "fas fa-star"></i>
            </div>
        </li>
    )
    } 
}

export default EmployersListItem;