import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { TextField } from '@mui/material';

export default function ListItem(props) {

    return(
        <Card sx={{ 
            minWidth: 275,
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <CardContent>
                <Typography variant="h5" component="div">
                IDEA {props.listNum}
                </Typography>
                <Typography variant="p" component="div">
                    {props.ideaText}
                </Typography>
                <Rating name="size-large" defaultValue={0} size="large" />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="comments"
                    label="comments"
                    name="comments"
                    rows={2}
                    maxRows={7}
                    autoComplete=""
                    multiline
                />

            </CardContent>

            <CardActions>
                <Button size="small">submit</Button>
            </CardActions>

        </Card>
    )
}