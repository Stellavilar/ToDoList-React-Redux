import React from 'react';
import ItemComponent from './ItemComponent';
import { useSelector } from 'react-redux';

function ListComponent() {
    let todos = useSelector(state => state)
    console.log(todos)
    return (
        <div className="items">
            {todos ? todos.map(todo => {
                return <ItemComponent key={todo.id} todo={todo}/>
            }) : null}
        </div>
    )
};

export default ListComponent;