import React from 'react';
import {Navbar,Cards,Chart,CountryPicker} from './Components';
import './App.css';
import {GetData} from './Api/GetData';

class App extends React.Component{
  state = {
    data: {},
  }
 async componentDidMount(){
      this.setState({data: await GetData()});
  }
  changeCountryHandler = async(country)=>{
    this.setState({data: await GetData(country), country: country});
  }

render(){
  const {data, country} = this.state;
    return(
      <div>
      <Navbar/>
        <Cards data={data}/>
        <CountryPicker changeCountryHandler={this.changeCountryHandler}/>
        <Chart data={data} country={country}/>  
      </div>
    )}
} 
export default App;
