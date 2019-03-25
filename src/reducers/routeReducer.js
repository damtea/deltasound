export default (state = "Home", action) => {
  switch (action.type) {
    case "ROUTING":
      return action.payload;
    default:
      return state;
  }
};
