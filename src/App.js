import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './views/Home'
import About from './views/About'
import Contacts from './views/Contacts'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      contact: [
        {first_name: "P",
        last_name: "Sherman",
        address: "42 Wallaby Way, Sydney",
        phone: "(123) 456-7890",}
      ],
      racers: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let year = event.target.year.value;
    let season = event.target.season.value
    fetch(`https://ergast.com/api/f1/${year}/${season}/driverStandings.json`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            })
        })
        .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Navbar/>
        
        <main className='container'>
          <Switch>
            <Route exact path='/' render={() => <Home name={this.state.name} racers={this.state.racers} handleSubmit={this.handleSubmit}/>}/>
            <Route path='/about' render={() => <About name={this.state.name}/>}/>
            <Route path='/contacts' render={() => <Contacts name={this.state.name} contact={this.state.contact}/>}/>
          </Switch>
        </main>
      </div>
    )
  }
}