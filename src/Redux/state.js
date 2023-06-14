const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGETEXT = 'CHANGE-MESSAGETEXT';

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

    girlfriends: [
      { name: 'Diana', age: '21' },
      { name: 'Anna', age: '23' },
      { name: 'Veronika', age: '23' },
      { name: 'Ksenya', age: '23' },
      { name: 'Alina', age: '23' },
    ],
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

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  addMessage() {
    let newMessage = {
      id: 6,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },

  updateNewMessageText(newMessage) {
    this._state.dialogsPage.newMessageText = newMessage;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 6,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === CHANGE_MESSAGETEXT) {
      this._state.dialogsPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
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

export default store;
