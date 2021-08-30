const inizialState = {
  list: [],
  activeId: null
};

const hobbyReducer = (state = inizialState, action) => {
  switch(action.type) {
    case "ADD_HOBBY": {
      return state;
    }
    case "SET_ACCTIVE_HOBBY": {
      return state;
    }

    default: 
      return state;
  }
}
export default hobbyReducer;
