import EmployersListItem from "../employers-list-item/employers-list-item";

import './employers-list.css';


const EmployersList = ({data, onDelete}) => {   // Мы передаем в пропсах  объект используя деструктуризацию 

    const elements = data.map(item => { // Проходим полученные через пропс массив циклом и возвращаем 
                                        //каждый элемент объкта в массиве.
       const {id, ...itemProps} = item;//С помощью деструктуризации выдергиваем из item свойство id
       
       return (                        
            <EmployersListItem key={id} 
            {...itemProps}
            onDelete = {() => onDelete(id)}/>//Разворачиваем через сперд оператор {data.name},{data.salary} И {data.increase}
        )
    })


    return (
        <ul className = "app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;