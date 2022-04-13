import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Alert } from '@mui/material';
import { useState } from 'react';


const Billing = () => {

    const [billAlert, setBillAlert] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        try { 
            //enter billing info
            setBillAlert('Submitted! Please check for an email confirmation!')
        } catch(err) {
            console.log("ERROR: " + err);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            
            <Box
            sx={{
                marginTop: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                {billAlert && <Alert variant="filled" severity="success">{billAlert}</Alert>} 
                <Avatar sx={{ m: 1, bgcolor: 'secondary' }}>
                    <AttachMoneyIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Enter payment info
                </Typography>
                <Box component="form" 
                      onSubmit={handleSubmit} 
                      noValidate 
                      sx={{'& .MuiTextField-root': { m: 1, width: '50ch' }}}>
                    <div>
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name (as it appears on your card)"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        />
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="cardNumber"
                        label="Card number"
                        type="password"
                        id="cardNumber"
                        autoComplete="card number"
                        />
                    </div>
                    
                    <div>
                        <TextField
                        margin="normal"
                        required
                        id="expiration"
                        label="Expiration date"
                        placeholder="MM/YYYY"
                        multiline
                        />
                        <TextField
                        required
                        margin="normal"
                        id="cvv"
                        label="CVV"
                        placeholder="---"
                        multiline
                        />
                    </div>
                    
                    
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Submit
                    </Button>
                    
                    {/* <Grid item>
                        <Link href="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                    <Grid item sx={{mt: 5}}>
                        <Link href="/" variant="body2">
                        {"back"}
                        </Link>
                    </Grid> */}

                </Box>
            </Box>
        </Container>
    );

}

export default Billing;