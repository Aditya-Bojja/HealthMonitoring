import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import HealthParams from './HealthParams';
import bodyTemp from './bodyTemp.png';
import roomTemp from './roomTemp.png';
import pulse from './pulse.png';
import humidity from './humidity.png';
import airQuality from './airQuality.png';

class App extends Component {

  constructor(){
      super()
      this.state = {
          fields : {},
      }
  }

  componentDidMount () {
      fetch('https://api.thingspeak.com/channels/1576885/feeds.json?api_key=S5J4DJXI9W4OGVQG&results=1')
      .then(response => response.json())
      .then(info => this.setState({fields : info.feeds[0]}));
  }

  render() {
      const {fields} = this.state;
      console.log(fields);

      if(!fields){
          return <h1 className = "tc">Loading...</h1>
      } else {
          return(
              <div className = "tc">
                <h1 className = "titleColor">HEALTH MONITORING SYSTEM</h1>
                <HealthParams value = {fields.field1} name = {"Pulse Rate"} img = {pulse} units = {"BPM"}/>
                <HealthParams value = {fields.field2} name = {"Body Temperature"} img = {bodyTemp} units = {"Celsius"}/>
                <HealthParams value = {fields.field3} name = {"Room Temperature"} img = {roomTemp} units = {"Celsius"}/>
                <HealthParams value = {fields.field4} name = {"Room Humidity"} img = {humidity} units = {"%"}/>
                <HealthParams value = {fields.field5} name = {"CO2 Levels"} img = {airQuality} units = {"ppm"}/>
              </div>
          );
      }
  }
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
