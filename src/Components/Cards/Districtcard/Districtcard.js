import React from 'react'
import useStyles from './styles';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import map from '../../../assets/map.png';
import death from '../../../assets/death.svg';
import recovered from '../../../assets/recoveredd.svg';
import infected from '../../../assets/infected.svg';

function Districtcard() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
       
                    <Card className={classes.card} elevation={4}>
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
                            <Grid  container spacing={10} >
                            <Grid item xs={4}>
                                <Grid  container spacing={1} >
                                    <Grid item xs={12}> <CardMedia
                                    className={classes.media}
                                    image={infected}/> </Grid>
                                    <Grid item xs={12}> <Typography className={classes.highlight}>1728</Typography>  </Grid>
                                    <br></br><br></br>
                                    <Grid item xs={12}><Typography className={classes.normal1}> Infected</Typography> </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}> 
                                <Grid  container spacing={1}  >
                                <Grid item xs={12}> 
                                <CardMedia
                                    className={classes.mediar}
                                    image={recovered}/> </Grid>
                                    <Grid item xs={12}> <Typography className={classes.highlight} >128</Typography>  </Grid>
                                    <br></br><br></br>
                                    <Grid item xs={12}><Typography className={classes.normal1} align="center" > Recovered</Typography> </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid  container spacing={1} >
                                <Grid item xs={12}> <CardMedia
                                    className={classes.media}
                                    image={death}/> </Grid>
                                    <Grid item xs={12}> <Typography className={classes.highlight} >18</Typography>  </Grid>
                                    <br></br><br></br>
                                    <Grid item xs={12}><Typography className={classes.normal1}> Deaths</Typography> </Grid>
                                </Grid> 
                            </Grid>
                            </Grid>
                        </div>
                        </CardContent>
                                <CardMedia
                                    className={classes.media}
                                    image={map
                                    }
                                    />
                    </Card>
    </div>
    )
}

export default Districtcard
