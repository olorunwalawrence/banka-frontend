export const actions = (state = [], action) => {
  switch (action.type) {
    case 'REMOVE':
      const index = state.indexOf(action.text);
      console.log(action)
      state.splice(index, 1)
      return state;
    default:
      return state
  }
}
