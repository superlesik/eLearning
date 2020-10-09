import React, { Fragment } from 'react';
import '../../App.css';
import { Button, Box, DialogContentText} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Textfield from '@material-ui/core/Textfield';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialogcontent from '@material-ui/core/Dialogcontent';
import DialogActions from '@material-ui/core/DialogActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}))


function Login() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
      <Fragment>
         <Box mr={3}>
            <Button 
                color="inherit" 
                variant="outlined" 
                onClick={handleClickOpen}> 
                Log in
            </Button>
        
            <Dialog 
                open={open} 
                onClose={handleClose} aria-labelledby="form-dialog-registration">
                <DialogTitle id="form-dialog-registration">Log in</DialogTitle>
                <Dialogcontent>
                    <DialogContentText> log in to see videos </DialogContentText>
                    <Textfield
                    autofocus
                    margin="dense"
                    id="name"
                    label="E-mail Address"
                    type="e-mail"
                    fullWidth />
                    <Textfield
                    autofocus
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth />
                </Dialogcontent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} color="primary">Log in</Button>
                </DialogActions>
            
            </Dialog>
        </Box>
        <Button color="secondary" variant="contained"> Sign up</Button> 
    </Fragment>
  );
}

export default Login;