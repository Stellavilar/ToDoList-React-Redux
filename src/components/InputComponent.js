import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Button, Card, CardContent, CardActions } from '@material-ui/core';
import {addTodo} from '../redux/actions';
import { useDispatch } from 'react-redux';
import { v1 as uuid } from 'uuid';

//Styles for material ui components
const useStyles = makeStyles((theme) => ({
    form: {
        width: '70%',
        margin:'auto',
        padding: '20px'
      },
      input: {
          backgroundColor: 'white',
      }
    
  }));


function InputComponent () {
    //Classes for material ui components
    const classes = useStyles();
    //Use dispatch to get actions
    const dispatch = useDispatch();
    //input value hook
    const [ item, setItem ] = useState('');

    return (
        <div className="input-part">
            <Card>
                <CardContent>
                    <form
                    className={classes.form} 
                    onSubmit={e =>{ 
                        e.preventDefault();
                        dispatch(addTodo(
                            {
                                id: uuid(),
                                name: item
                            }
                    ))
                    setItem('');
                    }}
                    >
                        <TextField
                            className={classes.input}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="todo"
                            placeholder="Ajouter une tâche"
                            name="todo"
                            autoComplete="todo"
                            autoFocus
                            value={item}
                            onChange={e => setItem(e.target.value)}
                        />
                        <CardActions>
                            <Button variant="contained" color="primary" type="submit">Ok</Button>
                        </CardActions>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
};

export default InputComponent;