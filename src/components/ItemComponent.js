import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

function ItemComponent({ todo }) {
    return (
        <div className="list">
            <div className="title-list">
                {todo.name}
            </div>
            <div className="icons">
                <IconButton>
                    <CreateIcon />
                </IconButton>
                <IconButton>
                    <DeleteIcon />                
                </IconButton>   
            </div>
        </div>
    )
};

export default ItemComponent;