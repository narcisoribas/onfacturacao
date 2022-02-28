import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import onSoft from "./../../assects/images/logos/onsoft.png"
import { Link } from 'react-router-dom';
import{useHistory} from"react-router-dom";


import { useState } from 'react';



const theme = createTheme();

export  function Login() {

  const [viewForm, setViewForm]=useState(true);

 


    const history = useHistory();

    function  handleSubmit(){
        history.push("/home")
    } 
    


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />

       
        
        
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          
              
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>

          
            <Typography component="h1" variant="h5">
              Login
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="palavra passe"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Lembrar a senha"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Entrar
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link to="#" variant="body2">
                    Esqueceu a palavra passe?
                  </Link>
                </Grid>


                <Grid item>
                  <Link  variant="body2">
                    {"Criar Conta"}
                  </Link>
                </Grid>
              </Grid>
              
            </Box>
          
              
           
          </Box>
        </Grid>

         <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${onSoft})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}