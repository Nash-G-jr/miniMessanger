import profileReducer, { addPost } from './profileReducer';

it('length of posts should be incremented', () => {
  //1. Test data
  let action = addPost('budda!!!!');
  let state = {
    posts: [
      { id: 1, message: "Hi I'm Budda", likeCount: 10 },
      { id: 2, message: 'How are u?', likeCount: 10 },
    ],
    profile: null,
    status: '',
  };

  //2. action

  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(5);
});
