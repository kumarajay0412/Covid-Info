import React, {  useState,  useEffect } from 'react';
import useStyles from './styles';
import {Card,CardContent, Typography} from '@material-ui/core';
import {IndiapatientData} from'../../../../api/index'
import Grid from '@material-ui/core/Grid';
import infected from '../../../../assets/Infected.svg';
import recovered from '../../../../assets/recovered.svg';
import death from '../../../../assets/death.svg';
import common from '../../../../assets/common.png';
import CountTo from 'react-count-to';
import Citymap from '../../../Citymap';

function Search() {
    const [Recoverd, setRecovered] = useState(0);
    const [Infected, setInfected] = useState(0);
    const [Death, setDeath] = useState(0);
    const [Recoverd1, setRecovered1] = useState(0);
    const [Infected1, setInfected1] = useState(0);
    const [Death1, setDeath1] = useState(0);
    const [Active, setActive] = useState(0);
    const [Active1, setActive1] = useState(0);
    const classes = useStyles();
    useEffect(() => {
        const fetcher =async()=>{
          const fetchedData = await IndiapatientData();
          const data1 = Object.values(fetchedData);
            setInfected1( parseInt((data1[3].replace(/,/g , " ")).replace(/ /g,'')))
            setRecovered1( parseInt((data1[3].replace(/,/g , " ")).replace(/ /g,''))*1.5)
            setDeath1( parseInt((data1[4].replace(/,/g , " ")).replace(/ /g,'')))
            setInfected( parseInt((data1[5].replace(/,/g , " ")).replace(/ /g,'')))
            setRecovered( parseInt((data1[7].replace(/,/g , " ")).replace(/ /g,'')))
            setDeath(parseInt((data1[6].replace(/,/g , " ")).replace(/ /g,'')))
            setActive1(parseInt((data1[3].replace(/,/g , " ")).replace(/ /g,'')))
            setActive(parseInt((data1[0].replace(/,/g , " ")).replace(/ /g,'')))
        }
        fetcher();
      },[]);
    return (
        <div>
            <Grid container spacing={3} direction="column" alignItems="center" justify="center" style={{ minHeight: '50vh' }}>

            <Grid  container spacing={1} >

                    <Grid item xs={12} sm={6} >  <Citymap/> </Grid>
                                
                    <Grid item xs={12} spacing={3} sm={3} >

                        <Grid item xs={12}>
                        <Card className={classes.card} elevation={4} expand style={{color: '#fff', background: `url(${common})` }}>       
                                <CardContent>
                                    <div>
                                        <Grid  container spacing={1} >
                                            <Grid item xs={3}>  <a><img src={infected} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                            <Grid item xs={9}>  <Typography className={classes.black}> Confirmed Cases </Typography> </Grid>
                                            <Grid item xs={12}>  <Typography className={classes.yellow}> <CountTo to= {Infected} speed={4500} /> </Typography> </Grid>
                                        </Grid>
                                        <br></br>
                        
                                    </div>
                                </CardContent>     
                        </Card>  
                        </Grid>

                        <br></br>

                        <Grid item xs={12}>
                        <Card className={classes.card} elevation={4} expand style={{color: '#fff', background: `url(${common})` }}>       
                                <CardContent>
                                    <div>
                                        <Grid  container spacing={1} >
                                            <Grid item xs={3}>  <a><img src={recovered} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                            <Grid item xs={9}>  <Typography className={classes.black}> Recovered Cases </Typography> </Grid>
                                            <Grid item xs={7}>  <Typography className={classes.green}> <CountTo to= {Recoverd} speed={4500} /></Typography> </Grid>
                                        </Grid>
                                        <br></br>  
                                    </div>
                                </CardContent>     
                        </Card>  
                        </Grid>

                        <br></br>

                        <Grid item xs={12}>
                        <Card className={classes.card} elevation={4} expand style={{color: '#fff', background: `url(${common})` }}>       
                                <CardContent>
                                    <div>
                                          <Grid  container spacing={1} >
                                            <Grid item xs={3}>  <a><img src={death} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                            <Grid item xs={9}>  <Typography className={classes.black}> Deaths </Typography> </Grid>
                                            <Grid item xs={7}>  <Typography className={classes.brown}> <CountTo to= {Death} speed={4500} /></Typography> </Grid>
                                        </Grid>
                                        <br></br>
                
                                    </div>
                                </CardContent>     
                        </Card>  
                        </Grid>
                    </Grid>

            </Grid>
            </Grid> 
    
        </div>
    )
}

export default Search
