import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { ListBox } from 'primereact/listbox';
import { makeStyles } from '@material-ui/core/styles';
import array from './Table'
import axios from 'axios';
import jso from './state.json'
import Searchcard from './../Cards/Card/Search/Search';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '105ch',
      },
    },
  }));

const App = () => {
    const classes = useStyles();
    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);
    const[Place ,setPlace] = useState(null);
    
    const handleSearch = (event) => {
        let value = event.target.value;
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
        
        return data.name1.search(value) != -1;
        });

        setFilteredData(result);
        console.log(result);
        console.log(filteredData[0]);
        setPlace(filteredData[0].name1);
        console.log(Place);
     
            <Searchcard Place={Place}/>
            
    }

    useEffect(() => {
        axios('https://api.covid19india.org/v4/min/data.min.json')
        .then(response => {
        setAllData(jso);
        setFilteredData(jso);
        })
        .catch(error => {
        console.log('Error getting fake data: ' + error);
        })
        }, []);

    return (
        <div >
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
        {/* { !(Place)? <div/> : (
           <Searchcard Place={Place}/>
          )  } */}
        </div>
    );
}

export default App;