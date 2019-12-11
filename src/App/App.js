import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import goatData from '../helpers/data/goatData';

import GoatCorral from '../components/GoatCorral/GoatCorral';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();

    this.setState({ goats });
  }

  freeGoat = (goatId) => {
    goatData.freeAGoat(goatId);

    this.refreshGoats();
  }

  takeGoat = (goatId) => {
    goatData.takeAGoat(goatId);

    this.refreshGoats();
  }

  refreshGoats = () => {
    this.setState({ goats: goatData.getGoats() });
  }

  render() {
    return (
      <div className="App">
        <button className='btn btn-danger'>Bootstrap Button</button>
        <GoatCorral goats={this.state.goats} freeGoat={this.freeGoat} takeGoat={this.takeGoat}/>
      </div>
    );
  }
}

export default App;
