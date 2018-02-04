import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Orange extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.state !== this.props.state;
  }
  render() {
    let { state, eatOrange } = this.props;
    {console.log('eeeee')}
    {console.log(eatOrange)}
    if (state.isEaten) return null;
    return (
      <div className="orange">
        <div className="orangeImage"><img src={require('../img/orange.png')} alt="" /></div>
        <div className="info">
          <div className="name"> No. {state.id + 1} Orange</div>
          <div className="weight">{state.weight} oz</div>
        </div>
        <div className="btn-div" onClick={eatOrange}><button>Eat</button></div>
      </div>
    );
  }
}


Orange.propTypes = {

}

export default Orange;
