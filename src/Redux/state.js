let renderEntireTree = () => {
  console.log('State had changded');
};

let state = {
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
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
};

export const addMessage = () => {
  let newMessage = {
    id: 6,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  renderEntireTree(state);
};

export const updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  renderEntireTree(state);
};

export default state;
