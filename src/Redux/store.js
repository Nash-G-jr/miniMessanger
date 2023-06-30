import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';



//OLD BLL


let store = {
  _state: {
    profilePage: {
      posts: [
        { message: "Hi I'm Budda", likeCount: 10 },
        { message: 'How are u?', likeCount: 10 },
      ],
      newPostText: '',
    },

    dialogsPage: {
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
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State had changded');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
