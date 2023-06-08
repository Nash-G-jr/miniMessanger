import { renderEntireTree } from '../render';

let state = {
  profilePage: {
    posts: [
      { message: "Hi I'm Budda", likeCount: 10 },
      { message: 'How are u?', likeCount: 10 },
    ],
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
  },

  girlfriends: [
    { name: 'Diana', age: '21' },
    { name: 'Anna', age: '23' },
    { name: 'Veronika', age: '23' },
    { name: 'Ksenya', age: '23' },
    { name: 'Alina', age: '23' },
  ],
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likeCount: 0,
  };
  state.profilePage.posts.push(newPost);
  renderEntireTree(state);
};
export default state;
