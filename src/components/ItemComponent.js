import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import {deleteTodo} from '../redux/actions';
import { useDispatch } from 'react-redux';

function ItemComponent({ todo }) {
    const dispatch = useDispatch();

    return (
        <div className="list">
            <div className="title-list">
                {todo.name}
            </div>
            <div className="icons">
                <IconButton>
                    <CreateIcon />
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