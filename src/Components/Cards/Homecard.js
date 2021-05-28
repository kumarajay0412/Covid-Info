import React from 'react'
import Grid from '@material-ui/core/Grid';
import Statecard from './Card/Statecard/Statecard';
import Statecard1 from './Card/Statecard/Statecard1';
import Districtcard from './Card/Districtcard/Districtcard';

function Homecard({Sta,Dis,Code}) {

    return (
            <Grid container spacing={6} direction="row" alignItems="center" justify="center" >
            <Grid item xs={12} sm={3}><Districtcard Sta={Sta} Dis={Dis} Code={Code}  /></Grid>
            <Grid item xs={12} sm={3}><Statecard Sta={Sta} Dis={Dis} Code={Code} /></Grid>
            <Grid item xs={12} sm={3}><Statecard1 Sta={Sta} Dis={Dis} Code={Code} /></Grid>
            </Grid>

    

            

            
    )
}

export default Homecard
