import React, {  useState,  useEffect } from 'react';
import useStyles from './styles';
import {Card,CardContent, Typography} from '@material-ui/core';
import {patientData} from'../../api/index'
import Grid from '@material-ui/core/Grid';
import infected from '../../assets/Infected.svg';
import recovered from '../../assets/recovered.svg';
import death from '../../assets/death.svg';
import common from '../../assets/common.png';
import CountTo from 'react-count-to';
import Citymap from '../Citymap';
import TextField from '@material-ui/core/TextField';
import { ListBox } from 'primereact/listbox';
import { makeStyles } from '@material-ui/core/styles';
import array from './Table'
import axios from 'axios';
import jso from './state.json'
import Searchcard from './../Cards/Card/Search/Search';

function Search() {

    const [Recovered, setRecovered] = useState(0);
    const [Infected, setInfected] = useState(0);
    const [Death, setDeath] = useState(0);
    const classes = useStyles();
    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);
    const[Place ,setPlace] = useState(null);
    const[Maplocation,setMaplocation]=useState(null);
    
    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        result = allData.filter((data) => {
        return data.name1.search(value) != -1;
        });
        setFilteredData(result);
        setPlace(filteredData[0].name1);
        console.log(Place); 
        if(Place){
            fetcher1();
            setMaplocation(filteredData[0].name1);
        }     
        
              
    }

    var name = ["Delhi","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir",
    "Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Orissa"
    ,"Punjab","Rajasthan","Sikkim","Tamil Nadu","Tripura","Uttarakhand","Uttar Pradesh","West Bengal","Tamil Nadu","Tripura","Andaman and Nicobar Islands","Chandigarh"
        ,"Dadra and Nagar Haveli","Daman and Diu","Lakshadweep","Pondicherry"];
    var code = ["DL","AP","AR","AS","BR","CG","GA","GJ","HR","HP","JK","JH","KA","KL","MP","MH","MN","ML","MZ","NL","OR","PB","RJ","SK","TN","TR","UK","UP","WB","TN","TR","AN","CH","DH","DD","LD","PY"];


    // useEffect(() => {
        const fetcher1 =async()=>{
            var key = 0;
            var Place1=null;
            for (var z=0; z<name.length; z++){
                if(name[z].toLowerCase()===Place){
                    Place1 = code[z];
                    key = 1;
                    break;
                }
              }
            const fetchedData = await patientData();
    
            const data1 = Object.values(fetchedData);
            const data2 = Object.keys(fetchedData);

            if(Place1){
                for (var j=0; j<data2.length; j++){
                    if(data2[j]===Place1){
                        setRecovered(data1[j].total.recovered);
                        setInfected(data1[j].total.confirmed);
                        setDeath(data1[j].total.deceased);
                        
                        break;
                    }}
            }
            else{
                console.log(Place)
                for (var i=0; i<data1.length; i++){
                    // console.log(data2[i]);
                    const data3 = Object.values(data1[i].districts);
                    const data4 = Object.keys(data1[i].districts);
                    for (var z=0; z<10; z++){
                        console.log(data4[j],Place)
                        if(data4[j]===Place){
                            setRecovered(data3[z].total.recovered);
                            setInfected(data3[z].total.confirmed);
                            setDeath(data3[z].total.deceased);
                            
                            break;
                        }}
                        if(i===32){i+=1}
                    }
            }
           
            console.log(Recovered,Infected,Death,Maplocation);
            
            console.log(Place,Place1,Maplocation)
        }
        // fetcher1();
    //   },[]);


      useEffect(() => {
        axios('https://api.covid19india.org/v4/min/data.min.json')
        .then(response => {
        setAllData(jso);
        setFilteredData(jso);
        console.log("ajay")
        })
        .catch(error => {
        console.log('Error getting fake data: ' + error);
        })
        }, []);

    return (

        <div>
          <TextField
          type="text" onChange={(event) =>handleSearch(event)}
          id="standard-full-width"
          style={{ margin: 8 ,padding:10}}
          placeholder="Enter name of Location to see stats"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        
        {/* !(Place)? <div/> : (
           <Searchcard Place={Place}/>
          )   */}
          {/* {
          if(Place){<Citymap Loc={Maplocation}/> }
          } */}
            <Grid container spacing={3} direction="column" alignItems="center" justify="center" style={{ minHeight: '50vh' }}>

                <Grid  container spacing={1} >
                        <Grid item xs={12} sm={1} >  </Grid>  
                            <Grid item xs={12} sm={6} >
                            <Card className={classes.card} elevation={4} expand> 
                                {/* <Citymap Loc={Maplocation}/>  */}
                            </Card> 
                            </Grid>
                        <Grid item xs={12} sm={1} >  </Grid>     
                    <Grid item xs={12} spacing={3} sm={3} >

                        <Grid item xs={12}>
                        <Card className={classes.card} elevation={4} expand style={{color: '#fff', background: `url(${common})` }}>       
                                <CardContent>
                                    <div>
                                        <Grid  container spacing={1} >
                                            <Grid item xs={3}>  <a><img src={infected} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                            <Grid item xs={9}>  <Typography className={classes.black}> Confirmed Cases </Typography> </Grid>
                                            <Grid item xs={12}>  <Typography className={classes.yellow}> {Infected}  </Typography> </Grid>
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
                                            <Grid item xs={7}>  <Typography className={classes.green}>{Recovered} </Typography> </Grid>
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
                                            <Grid item xs={7}>  <Typography className={classes.brown}>{Death} </Typography> </Grid>
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
