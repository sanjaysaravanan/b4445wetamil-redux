

const initialState = {
  count: 0,
}

function counterReducer(state = initialState, action) {

  switch (action.type) {
    case 'inc_counter':
      return {
        ...state,
        count: state.count + 1
      }
    case 'dec_counter':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }

}

export default counterReducer;