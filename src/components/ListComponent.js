import React from 'react';
import ItemComponent from './ItemComponent';
import { useSelector } from 'react-redux';

function ListComponent() {
    let todos = useSelector(state => state)
    return (
        <div className="items">
            {todos.map(todo => {
                return <ItemComponent key={todo.id} todo={todo}/>
            })}
        </div>
    )
};

export default ListComponent;