import React, { useEffect, useState } from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import style from './CountryPicker.style.css';
import {getCountryData} from '../../Api/GetData';

const CountryPicker = ({changeCountryHandler}) => {


    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            setCountries(await getCountryData());
        }
          
        fetchData();
    
        
    },[setCountries])

    return (
        <div className={style.container}>
   <h1 className={style.h1}>Covid-19 Tracker</h1>

            <FormControl className={style.formcontrol}>
                <NativeSelect defaultValue="" onChange={(e)=> changeCountryHandler(e.target.value)}>
                    <option value="">Global Data</option>
            {countries.map((country)=> <option key={country} value={country}>{country}</option> )}
                </NativeSelect>
            </FormControl>
        </div>
    );
}

export default CountryPicker;
