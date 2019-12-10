import React from 'react';
import { PropTypes } from 'prop-types';

import goatShape from '../../helpers/propz/goatShape';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    freeGoat: PropTypes.func,
  }

  freeGoatEvent = (e) => {
    e.preventDefault();
    const { freeGoat, goat } = this.props;
    freeGoat(goat.id);
  }

  render() {
    const { goat } = this.props;

    return (
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={goat.imgUrl} alt="Itsa Goat" />
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">{goat.age}</p>
          <p className="card-text">{goat.description}</p>
          <button className="btn btn-danger" onClick={this.freeGoatEvent}>Free Goat</button>
        </div>
      </div>
    );
  }
}

export default Goat;
