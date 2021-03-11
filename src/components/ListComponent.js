import React from 'react';
import ItemComponent from './ItemComponent';
import { useSelector } from 'react-redux';

function ListComponent() {
    //get todos items stored on states array
    const todos = useSelector(state => state)
    return (
        <div className="items">
            {/* if there are todos on array show, if not, show null */}
            {todos ? todos.map(todo => {
                return <ItemComponent key={todo.id} todo={todo}/>
            }) : null}
        </div>
    )
};

export default ListComponent;