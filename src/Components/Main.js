import React from 'react'
import { Container ,Grid } from '@material-ui/core';
import useStyles from './styles';
import {Typography} from '@material-ui/core';
import Homecard from './Cards/Homecard';
import Multicard from './Cards/Card/Multicard/Multicard'
import Statecard from './Cards/Card/Districtcard/Districtcard'
function Main() {
    const classes = useStyles();
    return (
        <div>
            
            <Homecard/>
            <br></br><br></br>  <br></br><br></br>  <br></br><br></br>
            <Grid container spacing={0} direction="row" alignItems="center" justify="center" >
                <Typography className={classes.highlight} alignContent="center" >World Wide Count </Typography>
            </Grid>
            
            <Grid container spacing={0} direction="row" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
            <Grid item xs={12} sm={3}><Statecard/></Grid>
            <Grid item xs={12} sm={3}><Statecard/></Grid>
            <Grid item xs={12} sm={3}><Statecard/></Grid>
            <Grid item xs={12} sm={3}><Statecard/></Grid>
            </Grid> 

        </div>
    )
}

export default Main
