from { fromJS } from 'immutable';

const initialState = {
  ifPicked: false;
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
