import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import goatData from '../helpers/data/goatData';

import GoatCorral from '../components/GoatCorral/GoatCorral';
import GoatCount from '../components/GoatCount/GoatCount';

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
        <GoatCount goats={this.state.goats}/>
        <GoatCorral goats={this.state.goats} freeGoat={this.freeGoat} takeGoat={this.takeGoat}/>
      </div>
    );
  }
}

export default App;
