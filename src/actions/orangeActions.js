let actions = {
  pickOrange: () => (dispatch, getState) => {
    if (getState().orangeBasket.isPicking) {
      return;
    }
    // Start to pick oranges
    dispatch(actions.beginPickOrange());

    fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
    .then(res => {
      if (res.status !== 200) dispatch(actions.failPickOrange(res.statusText));
      let weight = Math.floor((Math.random() * 1 + 3) * 100) / 100;
      dispatch(actions.donePickOrange(weight));
    }).catch(e => {
      dispatch(actions.failPickOrange(e.statusText));
    })
  },

  beginPickOrange: () => ({
    type: 'orange/BEGIN_PICK_ORANGE'
  }),

  donePickOrange: orangeWeight => ({
    type: 'orange/DONE_PICK_ORANGE',
    payload: orangeWeight
  }),

  failPickOrange: err => ({
    type: 'orange/FAIL_PICK_ORANGE',
    payload: new Error(err),
    error: true
  }),

  eatOrange: orangeId => ({
    type: 'orange/EAT_orange',
    payload: orangeId
  })
};

export default actions;
