import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Alert } from '@mui/material';

const Login = () => {
  const history = useNavigate();
    const { signin, signinError } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        const email = data.get('email');
        const password = data.get('password');

        console.log({
            email: email,
            password: password,
        });

        try { 
            await signin(email, password); //sign in
            if(signinError !== null) {
                console.log("ERROR")
                return
            }
            else {
                history("/")
                console.log("successfully signed in and switched to user page")
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
                {signinError && <Alert variant="filled" severity="error">{signinError}</Alert>} 
                <Avatar sx={{ m: 1, bgcolor: 'secondary' }}>
                    <LoginIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
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
                    
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Login
                    </Button>
                    
                    <Grid item>
                        <Link href="/get_started" variant="body2">
                        {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                    

                </Box>
            </Box>
        </Container>
    );


}

export default Login;
