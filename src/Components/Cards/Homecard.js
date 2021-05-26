import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import Districtcard from './Districtcard/Districtcard';
import Statecard from './Statecard/Statecard';

function Homecard() {
    return (
        <Grid container spacing={4}>
            <Grid item xs={0} sm={1}>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Districtcard/>
            </Grid>
            <Grid item xs={0} sm={2}>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Statecard/>
            </Grid>
      </Grid>
    )
}

export default Homecard
