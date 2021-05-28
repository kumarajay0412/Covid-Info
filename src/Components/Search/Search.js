import React, { useState } from 'react';
import { ListBox } from 'primereact/listbox';
import array from './Table'
const App = () => {
    const [selectedCountries, setSelectedCountries] = useState(null);
    const countries = array;
   

    const countryTemplate = (option) => {
      setSelectedCountries(option.name)
    }
    console.log(selectedCountries)
    return (
        <div>
            <div className="card">
                <h5>Advanced with Templating, Filtering and Multiple Selection</h5>
                <ListBox value= {selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} filter optionLabel="name" itemTemplate= {countryTemplate}  />
                
            </div>
        </div>
    );
}

export default App;