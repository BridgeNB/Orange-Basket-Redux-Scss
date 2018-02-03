import React, { Component } from 'react';

class Orange extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.state !== this.props.state;
  }
  render() {
    let { state, actions } = this.props;
    let mockState = {
      id: 1,
      weight: 4,
      isEaten: false
    }
    let mockActions = {
      eatOrange: id => console.log('eatApple', id)
    }
    state = mockState; actions = mockActions;
    if (state.isEaten) return null;
    return (
      <div className="orange">
        <div className="orangeImage"><img src={require('../img/orange.png')} alt="" /></div>
        <div className="info">
          <div className="name"> No. {state.id + 1} Orange</div>
          <div className="weight">{state.weight} oz</div>
        </div>
        <div className="btn-div" onClick={() => actions.eatOrange(state.id)}><button>Eat</button></div>
      </div>
    );
  }
}

export default Orange;
