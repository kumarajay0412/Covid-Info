import React from 'react'
import useStyles from './styles';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import map from '../../../../assets/map.png';
import death from '../../../../assets/death.svg';
import recovered from '../../../../assets/recovered.svg';
import infected from '../../../../assets/Infected.svg';

function Districtcard() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
       
                    <Card className={classes.card} elevation={4} >
                        <CardContent>
                        <div>
                            <Grid  container spacing={1} >
                            <Grid item xs={4}>  <Typography className={classes.normal}> You are in</Typography> </Grid>
                            <Grid item xs={7}>  <Typography className={classes.highlight}> South West Delhi</Typography> </Grid>
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
                        </div>
                        </CardContent>
                                <CardMedia
                                    className={classes.map}
                                    image={map}
                            />
                    </Card>
    </div>
    )
}

export default Districtcard
