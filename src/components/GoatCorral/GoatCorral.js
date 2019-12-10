import React from 'react';
import PropTypes from 'prop-types';

import Goat from '../Goat/Goat';
import goatShape from '../../helpers/propz/goatShape';

class GoatCorral extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
    freeGoat: PropTypes.func,
    takeGoat: PropTypes.func,
  }

  render() {
    const { goats, freeGoat, takeGoat } = this.props;

    const goatCards = goats.map((goat) => (<Goat key={goat.id} goat={goat} freeGoat={freeGoat} takeGoat={takeGoat}/>));

    return (
      <div className="goatCorral">
        {goatCards}
      </div>
    );
  }
}

export default GoatCorral;
