import React from 'react'
import Grid from '@material-ui/core/Grid';
import Statecard from './Card/Statecard/Statecard';
import Districtcard from './Card/Districtcard/Districtcard';

function Homecard() {
    return (
            <Grid container spacing={3} direction="row" alignItems="center" justify="center" >
            <Grid item xs={0} sm={1}></Grid>
            <Grid item xs={12} sm={3}><Districtcard/></Grid>
            <Grid item xs={12} sm={2}></Grid>
            <Grid item xs={12} sm={3}><Statecard/></Grid>
            <Grid item xs={0} sm={1}></Grid>
            </Grid>
    )
}

export default Homecard
