import React from 'react';
import { PropTypes } from 'prop-types';

import goatShape from '../../helpers/propz/goatShape';

class GoatCount extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
  }

  getGoatCount = () => {
    const { goats } = this.props;
    return goats.filter((g) => !g.isBusy).length;
  }

  render() {
    return (
      <div>
        <h1>{this.getGoatCount()} available goats!</h1>
      </div>
    );
  }
}

export default GoatCount;
