import { fromJS } from 'immutable';

const initialState = {
  ifPicked: false,
  newOrangeId: 2,
  oranges: [
      {
        id: 0,
        weight: 3.01,
        isEaten: false
      },
      {
        id: 1,
        weight: 3.98,
        isEaten: true
      }
  ]
};

export default (state = initialState, action) => {
  switch(action.type) {

    case 'orange/BEGIN_PICK_ORANGE':
      return fromJS(state).set('ifPicked', true).toJS();

    case 'orange/DONE_PICK_ORANGE':
      let newOrange = {
        id: state.newOrangeId,
        weight: action.payload,
        isEaten: false
      };
      // Add a new orange object into oranges, add orange id by 1, set isPicking as false
      return fromJS(state).update('oranges', list => list.push(newOrange))
                          .set('newOrangeId', state.newOrangeId + 1 )
                          .set('ifPicked', false)
                          .toJS();

    case 'orange/FAIL_PICK_ORANGE':
        return fromJS(state).set('ifPicked', false).toJS();

    case 'orange/EAT_Orange':
        return fromJS(state).setIn(['oranges', action.payload, 'isEaten'], true).toJS();

    default:
        return state;
  }
};
