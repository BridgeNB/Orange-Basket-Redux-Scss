import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Orange from './Orange';
import actions from '../actions/orangeActions';

class OrangeBasket extends Component {
  render() {
    let { state, actions } = this.props;
    let mockState = {
      ifPicked: false,
      newOrangeId: 2,
      oranges: [
          {
            id: 0,
            weight: 3,
            isEaten: false
          },
          {
            id: 1,
            weight: 4,
            isEaten: true
          }
      ]
    };

    let stats = {
        orangeNow: {
            quantity: 0,
            weight: 0
        },
        orangeEaten: {
            quantity: 0,
            weight: 0
        }
    };

    let mockActions = {
      eatApple : id => console.log('eatApple',id),
      foo: (arg1,arg2) => console.log('foo',arg1,arg2)
    };
    state = mockState; actions = mockActions;


    state.oranges.map((orange) => {
      let selector = orange.isEaten? 'orangeEaten': 'orangeNow';
      stats[selector].quantity += 1;
      stats[selector].weight += orange.weight;
    });

    return (
      <div className="orangeBasket">
        <div className="title">The Orange Basket</div>
        <div className="stats">
          <div className="section">
            <div className="head">Current</div>
            <div className="content">
              {stats.orangeNow.quantity} oranges,
              {stats.orangeNow.weight} ounce
            </div>
          </div>
          <div className="section">
            <div className="head">Have consumed</div>
            <div className="content">
              {stats.orangeEaten.quantity} Oranges,
              {stats.orangeEaten.weight} ounce
            </div>
          </div>
        </div>
        <div className="orangeList">
          { state.oranges.map((orange) =>
            <Orange
              state={orange}
              actions={{eatOrange: actions.eatOrange}}
              key={orange.id}
            />
          )}
        </div>
        <div className="btn-div">
          <button onClick={ actions.pickOrange }>
            <strong>Pick Orange</strong>
          </button>
        </div>
      </div>
    );
  }
}

function selectState(state) {
    return {
        state: state.orangeBasket
    }
}

function buildActionDispatcher(dispatch) {
  return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(selectState, buildActionDispatcher)(OrangeBasket);
