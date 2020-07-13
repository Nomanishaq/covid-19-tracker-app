import axios from 'axios';
const api = "https://covid19.mathdro.id/api";

export const GetData = async(country)=>{

    let newApi = api;
    // console.log(country);
    if(country){
        newApi = `${api}/countries/${country}`;
    }

    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(newApi);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error);
        
    }
}

export const getDailyData = async()=>{
    try{
            const {data} = await axios.get(`${api}/daily`);
            return data.map(({ confirmed, deaths, reportDate: date, recovered })=> ({ confirmed: confirmed.total, deaths: deaths.total, date, recovered: recovered.total }))
    }
    catch(error){
      return error;
        
    }
}

export const getCountryData = async()=>{
    try{
        const {data:{countries}} = await axios.get(`${api}/countries`);
        return countries.map((country)=> country.name);
    }
    catch(error){
        console.log(error);
    }
}