import React, {useState, useEffect } from 'react';
import useStyles from './styles';
import background9 from '../../../../assets/image1.svg'
import {Grid,Card, CardContent,Typography} from '@material-ui/core';
import {vaccineData} from'../../../../api/index'
import orangearrow from '../../../../assets/orangearrow.svg';
function Vaccine() {

    const [Totaldoses, setTotaldoses] = useState(0);
    const [LastTotaldoses, setLastTotaldoses] = useState(0);
    const [Dose1, setDose1] = useState(0);
    const [Dose2, setDose2] = useState(0);

    const classes = useStyles();

    useEffect(() => {
        const fetcher =async()=>{
          const fetchedData = await vaccineData();
          const data= fetchedData.pop();
          setTotaldoses(data.Total_doses)
          setLastTotaldoses(data.Last_Total_doses)
          setDose1(data.dose1)
          setDose2(data.dose2)
        }
        fetcher();
      },[]);

    return (
        <div>
            <Card className={classes.card} elevation={4} expand style={{color: '#fff', background: `url(${background9})` }}>       
                    <CardContent>
                    <Grid item xs={12} sm={3} container spacing={3} direction="column"  style={{ minHeight: '5vh' }}>
                        <Grid item xs={12}>  <Typography className={classes.black1}> Vaccination in India Stats </Typography> </Grid>
                        <br></br><br></br>
                        
                        
                        <Grid item xs={6}>  <Typography className={classes.black1} > Total doses Given: </Typography> </Grid>
                        <Grid item xs={5}>  <Typography className={classes.red1} align="right"> {Totaldoses} </Typography> </Grid>
                        
                        <br></br><br></br>
                       
                            <Grid item xs={3}>  <Typography className={classes.black1}> Dose1 : </Typography> </Grid>
                            <Grid item xs={4}>  <Typography className={classes.red1}> {Dose1} </Typography> </Grid>
                      
                        <br></br>
                        
                        <Grid item xs={3}>  <Typography className={classes.black1}> Dose2 : </Typography> </Grid>
                        <Grid item xs={4}>  <Typography className={classes.red1}> {Dose2} </Typography> </Grid>
                        
                         <br></br><br></br>
                         
                         <Grid item xs={6}>  <Typography className={classes.black1}> Total doses Given in last 24hr </Typography></Grid>
                         <br></br>
                         <Grid container spacing={3}>
                        <Grid item xs={4}>  <a><img src={orangearrow} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                        <Grid item xs={5}>  <Typography className={classes.red2}> {LastTotaldoses}</Typography></Grid>
                        </Grid>
                        
                      
                    </Grid>
                    </CardContent>     
            </Card>  
        </div>
    )
}

export default Vaccine
