import React, { Fragment } from 'react';
import '../../style.css';
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
  loginBottom: {
    color: "#1364b0"
  },
  loginDialog: {
    display: "block",
  },
  signUpDialog: {
    display: "none",
  },
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

  
  const showRegisterForm = () => {
    // здесь написать переключение классов, чтобы авторизация сменилась регистрацией
  }

  return (
      <Fragment>
         <Box mr={3}>
            <Button 
              className={classes.loginBottom}
                onClick={handleClickOpen}> 
                Вход / Регистрация
            </Button>
        
            <Dialog 
                className={classes.loginDialog}
                open={open} 
                onClose={handleClose} aria-labelledby="form-dialog-login"
                >
                <DialogTitle id="form-dialog-login">Вход в личный кабинет</DialogTitle>
                
                <Dialogcontent>
                  <DialogContentText>Введите e-mail и пароль, указанные при регистрации</DialogContentText>
                    
                    <Textfield
                      autoFocus
                      required
                      margin="dense"
                      id="name"
                      label="E-mail Address"
                      type="e-mail"
                      fullWidth />
                   
                    <Textfield
                      required
                      margin="dense"
                      id="pass"
                      label="Password"
                      type="password"
                      fullWidth />
                </Dialogcontent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Отмена</Button>
                    <Button onClick={handleClose} color="primary">Войти</Button>
                    <Button onClick={ showRegisterForm() } color="secondary">Создать аккаунт</Button>
                </DialogActions>
            </Dialog> 
            <Dialog 
                className={classes.signUpDialog}
                open={open} 
                onClose={handleClose} aria-labelledby="form-dialog-login"
                >
                <DialogTitle id="form-dialog-login">Регистрация</DialogTitle>
                
                <Dialogcontent>
                  <DialogContentText>Введите e-mail и пароль, указанные при регистрации</DialogContentText>
                    
                    <Textfield
                      autofocus
                      required
                      margin="dense"
                      id="name"
                      label="E-mail Address"
                      type="e-mail"
                      fullWidth />
                   
                    <Textfield
                      autofocus
                      required
                      margin="dense"
                      id="pass"
                      label="Password"
                      type="password"
                      fullWidth />
                </Dialogcontent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Отмена</Button>
                    <Button onClick={handleClose} color="primary">Войти</Button>
                    <Button onClick={showRegisterForm} color="secondary">Создать аккаунт</Button>
                </DialogActions>
            </Dialog> 
        </Box>
        {/* <Button className={classes.signUpBottom} onClick={handleClickOpen}>Регистрация</Button> */}
    </Fragment>
  );
}



export default Login;