const initialState = {
  auth: false,
  firstName: "",
  lastName: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "set_auth":
      return { ...state, auth: action.payload };
    case "set_firstname":
      return { ...state, firstName: action.payload };
    case "set_lastname":
      return { ...state, lastName: action.payload };
    case "set_userdata":
      return { ...state, userData: action.payload };
    default:
      return { ...state };
  }
}

export default reducer;
