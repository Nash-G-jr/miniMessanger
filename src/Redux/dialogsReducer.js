const ADD_MESSAGE = 'ADD-MESSAGE';


let inititialState = {
  dialogs: [
    { id: 1, name: 'Luka' },
    { id: 2, name: 'Kostya' },
    { id: 3, name: 'Andrew' },
    { id: 4, name: 'Levani' },
    { id: 5, name: 'Budda' },
  ],

  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: "I'm" },
    { id: 3, message: 'Fool' },
    { id: 4, message: 'LockOff' },
    { id: 5, message: 'Hahahahah' },
  ],
};

const dialogsReducer = (state = inititialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: 6, message: action.newMessageBody },
        ],
      };
    default:
      return state;
  }
};

export const addMessage = (newMessageBody) => ({
  type: ADD_MESSAGE,
  newMessageBody,
});




export default dialogsReducer;


