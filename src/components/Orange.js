import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Orange extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.state !== this.props.state;
  }
  render() {
    let { state, eatOrange } = this.props;

    if (state.isEaten) return null;

    return (
      <div className="orange">
        <div className="orangeImage"><img src={require('../img/orange.png')} alt="" /></div>
        <div className="info">
          <div className="name"> No. {state.id + 1} Orange</div>
          <div className="weight">{state.weight} oz</div>
        </div>
        <div className="btn-div" onClick={eatOrange.bind(this, state.id)}><button>Eat</button></div>
      </div>
    );
  }
}


Orange.propTypes = {
  eatOrange: PropTypes.func
}

export default Orange;
