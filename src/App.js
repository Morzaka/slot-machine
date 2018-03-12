import React, { Component } from 'react';
import './App.css';
import './index.css';

function getRandomInt() {
  return (Math.floor(Math.random() * 11))*(-150);
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      slot1: '0px',
      slot2: '0px',
      slot3: '0px',
    }
  }

  startGame (){
    this.setState({
      slot1: getRandomInt(),
      slot2: getRandomInt(),
      slot3: getRandomInt()
    });
  }


  render() {

    let slot1 = this.state.slot1;
    let slot2 = this.state.slot2;
    let slot3 = this.state.slot3;

    //console.log(slot1, slot2, slot3);

    return (
      <div className="App">
        <h1 style={{color: '#ffffff'}}>IT'S YOUR LUCKY TIME</h1>
        <div className='jumbotron'>
          <div className='row'>
            <div className='col'>
              <div className='slot' style={{backgroundPositionY: slot1+'px'}}/>
            </div>
            <div className='col'>
              <div className='slot' style={{backgroundPositionY: slot2+'px'}}/>
            </div>
            <div className='col'>
              <div className='slot' style={{backgroundPositionY: slot3+'px'}}/>
            </div>
          </div>
          <br/>
          <div className='row'>
            <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.startGame.bind(this)}>Start Game</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
