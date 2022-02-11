import React from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import EmployersList from '../employers-list/employers-list';

import SearchPanel from '../search-panel/search-panel';
import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
            data: [
                {name: 'John C', salary: 800 , increase: false, premium: false, id: 1},
                {name: 'Alex V.', salary: 3000, increase: false, premium: false, id: 2},
                {name: 'Carl J.', salary: 5000, increase: false, premium: false ,id: 3},
            ]
        }

    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false, 
            premium: false,
            id: Math.random().toString(30).substr(2,9)
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }


    
    render() {
        
        return (
            <div className='app'>
                <AppInfo />

                <div className='search-panel'>
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployersList data = {this.state.data}
                onDelete={this.deleteItem} />
                <EmployersAddForm onAdd={this.addItem}/>
               
            </div>
        )
    }
        
    }

export default App;