import React, { useEffect, useState } from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import style from './CountryPicker.module.css';
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
        <div>
            <FormControl className={style.formcontrol}>
                <NativeSelect defaultValue="" onChange={(e)=> changeCountryHandler(e.target.value)}>
                    <option value="">Global</option>
            {countries.map((country)=> <option key={country} value={country}>{country}</option> )}
                </NativeSelect>
            </FormControl>
        </div>
    );
}

export default CountryPicker;
