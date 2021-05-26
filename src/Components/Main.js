import React from 'react'
import { Container ,Grid } from '@material-ui/core';
import useStyles from './styles';
import {Typography} from '@material-ui/core';
import Homecard from './Cards/Homecard';
import Worldcard from './Cards/Card/Normalcard/Worldcard'
import Indiacard from './Cards/Card/Normalcard/Indiacard'
import Statecard from './Cards/Card/Districtcard/Districtcard'
function Main() {
    const classes = useStyles();
    return (
        <div>
            
            <Homecard/>
            <br></br><br></br>  <br></br><br></br>  <br></br><br></br>  <br></br><br></br><br></br><br></br>
            <Grid container spacing={0} direction="row" alignItems="center" justify="center" >
                <Typography className={classes.highlight} alignContent="center" >World Wide Count </Typography>
            </Grid>
            <Worldcard/>
            <Grid container spacing={0} direction="row" alignItems="center" justify="center" >
                <Typography className={classes.highlight} alignContent="center" >India Count </Typography>
            </Grid>
            <Indiacard/>

        </div>
    )
}

export default Main
