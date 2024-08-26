let initialState = {
  count: 0,
  plus: 0,
  minus: 0,
};

function reducer(state = initialState, action) {
  console.log('action?', action);

  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.payload.num,
        plus: state.plus + 1,
      };
    case 'DECREASE':
      return {
        ...state,
        count: state.count - action.payload.num,
        minus: state.minus + 1,
      };
    case 'RESET':
      return {
        ...state,
        count: (state.count = 0),
        plus: state.plus * 0,
        minus: (state.minus = 0),
      };
    default:
      return { ...state };
  }
}

export default reducer;
