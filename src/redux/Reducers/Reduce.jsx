const initialState = [
  {
    id: 0,
    name: "Satyam",
    number: 1234567890,
    email: "sg123@gmail.com",
  },
  {
    id: 1,
    name: "Radha",
    number: 9874563210,
    email: "rd143@gmail.com",
  },
];

const Reduce = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const filterContacts = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContacts;
      return state;
    default:
      return state;
  }
};

export default Reduce;
