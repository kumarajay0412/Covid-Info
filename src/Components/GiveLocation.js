import React from 'react';
import {Container} from '@material-ui/core';
import useStyles from './styles';
import {Grid,Card, CardContent,Typography} from '@material-ui/core';
import acess from '../assets/location.png'

const GiveLocation = () => {
        const classes = useStyles();
    return (
   
        <div>
            <Grid container spacing={4} direction="column" alignItems="center" justify="center"  >
                <Grid item xs={12} sm={12}>  
                    
                       <a className={classes.image}><img src={acess} alt="CovidInfo" width='100%'
height='100%'></img></a> 
                  
                </Grid>
                <Grid item xs={12} sm={12}>  
                <Typography className={classes.normal2}>Please Give location access</Typography>
               </Grid>

            </Grid>
        </div>
	)
    
}

export default GiveLocation




