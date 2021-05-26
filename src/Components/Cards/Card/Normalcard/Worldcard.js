import React from 'react';
import useStyles from './styles';
import {Card, CardTitle,CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import infected from '../../../../assets/Infected.svg';
import redarrow from '../../../../assets/redarrow.svg';
import background1 from '../../../../assets/background1.svg';
import recovered from '../../../../assets/recovered.svg';
import death from '../../../../assets/death.svg';
import greenrecovered from '../../../../assets/greenrecovered.svg';
import background2 from '../../../../assets/background2.svg';
import background3 from '../../../../assets/background3.svg';
import background4 from '../../../../assets/background4.svg';
import greenarrow from '../../../../assets/greenarrow.svg';
import brownarrow from '../../../../assets/brownarrow.svg';
import orangearrow from '../../../../assets/orangearrow.svg';

function Indiacard() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3} direction="row" alignItems="center" justify="center" style={{ minHeight: '50vh' }}>
            <Grid item xs={12} sm={3}>
            <Card className={classes.card} elevation={4} expand style={{color: '#fff', background: `url(${background1})` }}>       
                    <CardContent>
                        <div>
                            <Grid  container spacing={1} >
                                <Grid item xs={3}>  <a><img src={infected} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                <Grid item xs={9}>  <Typography className={classes.black}> Confirmed Cases </Typography> </Grid>
                                <Grid item xs={7}>  <Typography className={classes.yellow}> 672,728,28,838</Typography> </Grid>
                            </Grid>
                            <br></br><br></br>
                            <br></br>
                            <Grid  container spacing={1} >
                                <Grid item xs={2}>  <a><img src={redarrow} height="40" width="40" alt='corona' /><b></b></a> </Grid>
                                <Grid item xs={9}>  <Typography className={classes.red}> 738389</Typography> </Grid>
                            </Grid>      
                        </div>
                    </CardContent>     
            </Card>  
            </Grid>
            <Grid item xs={12} sm={3}>
            <Card className={classes.card} elevation={4} expand style={{color: '#fff', background: `url(${background2})` }}>       
                    <CardContent>
                        <div>
                            <Grid  container spacing={1} >
                                <Grid item xs={3}>  <a><img src={recovered} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                <Grid item xs={9}>  <Typography className={classes.black}> Recovered Cases </Typography> </Grid>
                                <Grid item xs={7}>  <Typography className={classes.green}> 672,728,28,838</Typography> </Grid>
                            </Grid>
                            <br></br><br></br>
                            <br></br>
                            <Grid  container spacing={1} >
                                <Grid item xs={2}>  <a><img src={greenarrow} height="40" width="40" alt='corona' /><b></b></a> </Grid>
                                <Grid item xs={9}>  <Typography className={classes.green}> 738389</Typography> </Grid>
                            </Grid>      
                        </div>
                    </CardContent>     
            </Card>  
            </Grid>
            <Grid item xs={12} sm={3}>
            <Card className={classes.card} elevation={4} expand style={{color: '#fff', background: `url(${background3})` }}>       
                    <CardContent>
                        <div>
                            <Grid  container spacing={1} >
                                <Grid item xs={3}>  <a><img src={death} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                <Grid item xs={9}>  <Typography className={classes.black}> Worldwide Deaths </Typography> </Grid>
                                <Grid item xs={7}>  <Typography className={classes.brown}> 672,728,28,838</Typography> </Grid>
                            </Grid>
                            <br></br><br></br>
                            <br></br>
                            <Grid  container spacing={1} >
                                <Grid item xs={2}>  <a><img src={brownarrow} height="40" width="40" alt='corona' /><b></b></a> </Grid>
                                <Grid item xs={9}>  <Typography className={classes.brown}> 738389</Typography> </Grid>
                            </Grid>      
                        </div>
                    </CardContent>     
            </Card>  
            </Grid>
            <Grid item xs={12} sm={3}>
            <Card className={classes.card} elevation={4} expand style={{color: '#fff', background: `url(${background4})` }}>       
                    <CardContent>
                        <div>
                            <Grid  container spacing={1} >
                                <Grid item xs={3}>  <a><img src={greenrecovered} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                <Grid item xs={9}>  <Typography className={classes.black}> Active Cases  </Typography> </Grid>
                                <Grid item xs={7}>  <Typography className={classes.orange}> 672,728,28,838</Typography> </Grid>
                            </Grid>
                            <br></br><br></br>
                            <br></br>
                            <Grid  container spacing={1} >
                                <Grid item xs={2}>  <a><img src={orangearrow} height="40" width="40" alt='corona' /><b></b></a> </Grid>
                                <Grid item xs={9}>  <Typography className={classes.orange}> 738389</Typography> </Grid>
                            </Grid>      
                        </div>
                    </CardContent>     
            </Card>  
            </Grid>
            </Grid> 
    
        </div>
    )
}

export default Indiacard
