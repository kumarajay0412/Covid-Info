import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { ListBox } from 'primereact/listbox';
import { makeStyles } from '@material-ui/core/styles';
import array from './Table'
import axios from 'axios';
import jso from './state.json'
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
    
    const handleSearch = (event) => {
        let value = event.target.value;
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
        
        return data.name1.search(value) != -1;
        });

        setFilteredData(result);
    }

      const arr= Object.assign({}, array);
      
    console.log(filteredData[0],filteredData)

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
            {/* <div style={{ margin: '0 auto', marginTop: '10%' }}>
                <input type="text" onChange={(event) =>handleSearch(event)} />
            </div> */}
        
        </div>
    );
}

export default App;