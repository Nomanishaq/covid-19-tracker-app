import React from 'react';
import CountUp from 'react-countup'

export default function Cards({data: {confirmed, recovered, deaths, lastUpdate}}) {    
    if(!confirmed){
        return 'loading';
    }
   return (
    <div>
        <h1>Confrim: <CountUp start={0} end={confirmed.value} duration={5.0}></CountUp></h1>
        <h1>Recovered: <CountUp start={0} end={recovered.value} duration={5.0}></CountUp></h1>
        <h1>Deaths: <CountUp start={0} end={deaths.value} duration={5.0}></CountUp></h1>
        <h1>LastUpdate: {new Date(lastUpdate).toDateString()}</h1>
  </div>
    )
}
