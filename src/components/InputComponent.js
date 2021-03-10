import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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

    return (
        <div className="input-part">
            <form
                className={classes.form} 
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
                />
            </form>
        </div>
    )
};

export default InputComponent;