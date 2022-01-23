import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import EmployersList from '../employers-list/employers-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

    function App() {

        const data = [
            {name: 'John C', salary: 800 , increase: true, id: 1},
            {name: 'Alex V.', salary: 3000, increase: false, id: 2},
            {name: 'Carl J.', salary: 5000, increase: false, id: 3},
        ];

        return (
            <div className='app'>
                <AppInfo />

                <div className='search-panel'>
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployersList data = {data}/>
                <EmployersAddForm />
            </div>
        )
    }

export default App;