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
import Register from '../Register/Register';

import { useState } from 'react';



const theme = createTheme();

export  function Sigup() {






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
              Cadastro
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                   <Grid container spacing={3}>
                      <Grid item x2={6} sm={6}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="name"
                          label="name"
                          name="name"                          
                          type="text"
                          autoFocus/>
                      </Grid>

                      <Grid item xs={6} sm={6}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="sobrenome"
                          label="Sobrenome"
                          type="text"
                          id="sobrenome"                       
                          />
                      </Grid>                       
                    </Grid>

                    <Grid container spacing={3}>
                      <Grid item x2={6} sm={6}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Email"
                          name="email"                          
                          type="email"
                          autoFocus/>
                      </Grid>

                      <Grid item xs={6} sm={6}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="Palavra passe"
                          type="password"
                          id="password"                       
                          />
                      </Grid>                       
                    </Grid>


                      <Grid item xs={12} sm={12}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="Acesso"
                          label="Acesso"
                          type="text"
                          id="nivelAcesso"                       
                          />
                      </Grid>

                    
           
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Salvar
              </Button>

             
              
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