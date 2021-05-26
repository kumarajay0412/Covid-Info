import React from 'react'
import useStyles from './styles';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import death from '../../../../assets/death.svg';
import recovered from '../../../../assets/recovered.svg';
import infected from '../../../../assets/Infected.svg';
import injection from '../../../../assets/injection.png';
import bluerecovered from '../../../../assets/bluerecovered.svg';

function Statecard() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
       
                    <Card className={classes.card} elevation={4}>
                        <CardContent>
                        <div>
                            <Grid  container spacing={1} >
                            <Grid item xs={4}>  <Typography className={classes.normal}> You are in</Typography> </Grid>
                            <Grid item xs={7}>  <Typography className={classes.highlight}> Delhi</Typography> </Grid>
                            </Grid>
                            <Grid  container spacing={1} >
                            <Grid item xs={12}> <Typography className={classes.normal} >With </Typography> </Grid>
                            <Grid item xs={12}> <Typography className={classes.highlight} >1728 </Typography> </Grid><br></br><br></br>
                            <Grid item xs={12}> <Typography className={classes.normal}> Active cases near you </Typography></Grid>
                            </Grid>
                            <Grid  container spacing={5} >
                            <Grid item xs={4}>
                                <Grid  container spacing={1} >
                                    <Grid item xs={12}> <a><img src={infected} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                    {/* <Grid item xs={12}><img src={infected}/></Grid> */}
                                    <Grid item xs={12}> <Typography className={classes.highlight}>15628</Typography>  </Grid>
                                    <br></br><br></br>
                                    <Grid item xs={12}><Typography className={classes.normal1}> Infected</Typography> </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}> 
                                <Grid  container spacing={1}  >
                                     <Grid item xs={12}><a><img src={recovered} height="50" width="50" alt='corona' /><b></b></a></Grid>
                                    <Grid item xs={12}> <Typography className={classes.highlight} >12228</Typography>  </Grid>
                                    <br></br><br></br>
                                    <Grid item xs={12}><Typography className={classes.normal1} align="center" > Recovered</Typography> </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid  container spacing={1} >
                                    <Grid item xs={12}><a><img src={death} height="50" width="50" alt='corona' /><b></b></a></Grid>
                                    <Grid item xs={12}> <Typography className={classes.highlight} >1128</Typography>  </Grid>
                                    <br></br><br></br>
                                    <Grid item xs={12}><Typography className={classes.normal1}> Deaths</Typography> </Grid>
                                </Grid> 
                            </Grid>
                            </Grid>
                            
                            <Grid container spacing={7} >
                                    {/* <Grid item xs={2}><a><img src={bluerecovered} height="50" width="50" alt='corona' /><b></b></a></Grid> */}
                                    <Grid item xs={12}>
                                        <Grid  container spacing={0} >
                                            <Grid item xs={8}>  <Typography className={classes.normal2}>Yesterday Cases in</Typography> </Grid>
                                            <Grid item xs={4}>  <Typography className={classes.highlight1}> Delhi</Typography> </Grid>
                                           
                                            <Grid item xs={8}> <Typography className={classes.highlight}> 6373</Typography> </Grid>
                                        </Grid>
                                    </Grid> 
                            </Grid> 
                            <br></br><br></br>
                            <Grid  container spacing={0} >
                                    <Grid item xs={3}><a><img src={injection} height="100" width="35" alt='corona' /><b></b></a></Grid>
                                    <Grid item xs={9}>
                                        <Grid  container spacing={0}>
                                            <Grid item xs={8}>  <Typography className={classes.normal2}>Vaccination in </Typography> </Grid>
                                            <Grid item xs={4}>  <Typography className={classes.highlight1}> Delhi</Typography> </Grid>
                                        </Grid>
                                        
                                        <Grid  container spacing={1} >
                                            <Grid item xs={1}>  <Typography className={classes.normal2}></Typography> </Grid>
                                            <Grid item xs={5}>  <Typography className={classes.normal2}>Dose 1 :</Typography> </Grid>
                                            <Grid item xs={5}>  <Typography className={classes.highlight1}> 12440</Typography> </Grid>
                                           
                                        </Grid>
                                        <Grid  container spacing={0} >
                                            <Grid item xs={1}>  <Typography className={classes.normal2}></Typography> </Grid>
                                            <Grid item xs={5}>  <Typography className={classes.normal2}>Dose 2 :</Typography> </Grid>
                                            <Grid item xs={5}>  <Typography className={classes.highlight1}> 100</Typography> </Grid>
                                        
                                        </Grid>
                                    </Grid> 
                    
                            </Grid> 
                        </div>
                        </CardContent>
                                
                    </Card>
    </div>
    )
}

export default Statecard
