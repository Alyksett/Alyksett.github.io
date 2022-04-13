import { useNavigate} from 'react-router-dom'
import { useAuth } from '../AuthContext'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { useState } from 'react';
import { Alert } from '@mui/material';

const GetStarted = () => {
  const history = useNavigate();
  const { signup, signupError } = useAuth();
  const [ passwordMatchError, setPasswordMatchError ] = useState(null)

  const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      
      const email = data.get('email');
      const password = data.get('password');
      const confirmedPassword = data.get('confirmPassword')
      console.log({
          email: email,
          password: password,
          confirmedpassword: confirmedPassword
      });
      if(password !== confirmedPassword) {
          setPasswordMatchError('Passwords do not match!')
          return;
      } else {
          setPasswordMatchError(null)
      }

      try { 

          await signup(email, password); //sign up
          if(signupError !== null) {
              console.log("ERROR")
              return
          }
          else {
              history("/")
              console.log("successfully signed up and switched to user page")
          }
          
      } catch(err) {
          console.log("ERROR: " + err);
      }
  };

    
    return (
      <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
          sx={{
              marginTop: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
          }}
          >
              { signupError && <Alert variant="filled" severity="error">{signupError}</Alert> }
              { passwordMatchError && <Alert variant="filled" severity="error">{passwordMatchError}</Alert> }
              <Avatar sx={{ m: 1, bgcolor: 'secondary' }}>
                  <AccountCircleIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                  Sign up
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  />

                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  />

                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                  />

                  <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  >
                  Sign Up
                  </Button>

                  <Grid item>
                      <Link href="/login" variant="body2">
                      {"Have an account? Sign In"}
                      </Link>
                  </Grid>

              </Box>
          </Box>
      </Container>
  );

}

export default GetStarted
