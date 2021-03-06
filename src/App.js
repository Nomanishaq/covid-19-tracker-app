import React,{Suspense} from 'react';
import {Navbar,Cards,Chart,CountryPicker, Footer} from './Components';
import './App.css';
import {GetData} from './Api/GetData';
import {Container} from '@material-ui/core';


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
      <React.Fragment>
      <Navbar/>
      <Container>
        <CountryPicker changeCountryHandler={this.changeCountryHandler}/>
        <Suspense fallback={<h1>Loading.....</h1>}>
        <Cards data={data}/>
        </Suspense> 
        <Chart data={data} country={country}/> 
      </Container>
      <Footer/>
      </React.Fragment>
    )}
} 
export default App;
