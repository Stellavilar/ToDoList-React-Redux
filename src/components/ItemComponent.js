import React, { useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { IconButton } from '@material-ui/core';
import { deleteTodo, updateTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';

function ItemComponent({ todo }) {
    //Use dispatch to get actions 
    const dispatch = useDispatch();
    //Edit items
    const [ edit, setEdit ] = useState(false);
    //Change edit input
    const [ name, setName ] = useState(todo.name);

    return (
        <div className="list">
            <div className="title-list">
                {edit ? <input type="text" value={name} onChange={e => setName(e.target.value)} />: <div className="item">{todo.name}</div> }
            </div>
            <div className="icons">
                <IconButton
                onClick={() => {
                    dispatch(updateTodo(
                        {
                            ...todo,
                            name: name,
                        }
                    ))
                    if(edit) {
                        setName(todo.name);
                    }
                    setEdit(!edit);
                }}
                >
                    {edit ? <CheckCircleIcon /> : <CreateIcon />}
                </IconButton>
                <IconButton
                onClick={() => dispatch(deleteTodo(todo.id))}
                >
                    <DeleteIcon />                
                </IconButton>   
            </div>
        </div>
    )
};

export default ItemComponent;