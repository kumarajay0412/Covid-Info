import React, {  useState,  useEffect } from 'react';
import useStyles from './styles';
import {Card,CardContent, Typography} from '@material-ui/core';
import {IndiapatientData} from'../../../../api/index'
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
import CountTo from 'react-count-to';

function Worldcard() {
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
            <Grid container spacing={3} direction="row" alignItems="center" justify="center" style={{ minHeight: '50vh' }}>
            <Grid item xs={12} sm={6}>
            <Card className={classes.card} elevation={4} expand style={{color: '#fff', background: `url(${background1})` }}>       
                    <CardContent>
                        <div>
                            <Grid  container spacing={1} >
                                <Grid item xs={3}>  <a><img src={infected} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                <Grid item xs={9}>  <Typography className={classes.black}> Confirmed Cases </Typography> </Grid>
                                <Grid item xs={12}>  <Typography className={classes.yellow}> <CountTo to= {Infected} speed={4500} /> </Typography> </Grid>
                            </Grid>
                            <br></br><br></br>
                            <br></br>
                            <Grid  container spacing={1} >
                                <Grid item xs={2}>  <a><img src={redarrow} height="40" width="40" alt='corona' /><b></b></a> </Grid>
                                <Grid item xs={9}>  <Typography className={classes.red}> <CountTo to= {Infected1} speed={4500} /></Typography> </Grid>
                            </Grid>      
                        </div>
                    </CardContent>     
            </Card>  
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card className={classes.card} elevation={4} expand style={{color: '#fff', background: `url(${background2})` }}>       
                    <CardContent>
                        <div>
                            <Grid  container spacing={1} >
                                <Grid item xs={3}>  <a><img src={recovered} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                <Grid item xs={9}>  <Typography className={classes.black}> Recovered Cases </Typography> </Grid>
                                <Grid item xs={7}>  <Typography className={classes.green}> <CountTo to= {Recoverd} speed={4500} /></Typography> </Grid>
                            </Grid>
                            <br></br><br></br>
                            <br></br>
                            <Grid  container spacing={1} >
                                <Grid item xs={2}>  <a><img src={greenarrow} height="40" width="40" alt='corona' /><b></b></a> </Grid>
                                <Grid item xs={9}>  <Typography className={classes.green}> <CountTo to= {Recoverd1} speed={4500} /></Typography> </Grid>
                            </Grid>      
                        </div>
                    </CardContent>     
            </Card>  
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card className={classes.card} elevation={4} expand style={{color: '#fff', background: `url(${background3})` }}>       
                    <CardContent>
                        <div>
                            <Grid  container spacing={1} >
                                <Grid item xs={3}>  <a><img src={death} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                <Grid item xs={9}>  <Typography className={classes.black}> Deaths </Typography> </Grid>
                                <Grid item xs={7}>  <Typography className={classes.brown}> <CountTo to= {Death} speed={4500} /></Typography> </Grid>
                            </Grid>
                            <br></br><br></br>
                            <br></br>
                            <Grid  container spacing={1} >
                                <Grid item xs={2}>  <a><img src={brownarrow} height="40" width="40" alt='corona' /><b></b></a> </Grid>
                                <Grid item xs={9}>  <Typography className={classes.brown}> <CountTo to= {Death1} speed={4500} /></Typography> </Grid>
                            </Grid>      
                        </div>
                    </CardContent>     
            </Card>  
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card className={classes.card} elevation={4} expand style={{color: '#fff', background: `url(${background4})` }}>       
                    <CardContent>
                        <div>
                            <Grid  container spacing={1} >
                                <Grid item xs={3}>  <a><img src={greenrecovered} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                <Grid item xs={9}>  <Typography className={classes.black}> Active Cases  </Typography> </Grid>
                                <Grid item xs={7}>  <Typography className={classes.orange}><CountTo to= {Active} speed={4500} /></Typography> </Grid>
                            </Grid>
                            <br></br><br></br>
                            <br></br>
                            <Grid  container spacing={1} >
                                <Grid item xs={2}>  <a><img src={orangearrow} height="40" width="40" alt='corona' /><b></b></a> </Grid>
                                <Grid item xs={9}>  <Typography className={classes.orange}> <CountTo to= {Active1} speed={4500} /></Typography> </Grid>
                            </Grid>      
                        </div>
                    </CardContent>     
            </Card>  
            </Grid>
            </Grid> 
    
        </div>
    )
}

export default Worldcard
