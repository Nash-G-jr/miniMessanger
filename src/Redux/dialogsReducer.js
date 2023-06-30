const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGETEXT = 'CHANGE-MESSAGETEXT';

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
  newMessageText: '',
};

const dialogsReducer = (state = inititialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, { id: 6, message: state.newMessageText }],
      };
    case CHANGE_MESSAGETEXT:
      return {
        ...state,
        newMessageText: action.newMessage,
      };

    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const onMessageChangeActionCreator = (text) => {
  return {
    type: CHANGE_MESSAGETEXT,
    newMessage: text,
  };
};

export default dialogsReducer;

//const dialogsReducer = (state = inititialState, action) => {
// switch (action.type) {
//   case ADD_MESSAGE: {
//    let newMessage = {
//      id: 6,
//      message: state.newMessageText,
//    };
//    let stateCopy = { ...state };
//  stateCopy.messages = [...state.messages];
//stateCopy.messages.push(newMessage);
//stateCopy.newMessageText = '';
//return stateCopy;
// }
//  case CHANGE_MESSAGETEXT: {
//    let stateCopy = { ...state };
//    stateCopy.newMessageText = action.newMessage;
//  return stateCopy;
//  }
//  default:
//    return state;
//}
//};
