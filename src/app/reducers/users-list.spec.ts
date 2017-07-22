import { reducer } from './index';

describe('reducers', () => {
  it('Shoud handle users list action', () => {
    let state;
    state = reducer({
      users: {
        users: [{
          name: '',
          screen_name: '',
          profile_image_url: ''
        }],
        selectedUser: '',
      },
      tweets: [{
        text: '',
        user: {
          name: '',
          screen_name: '',
          profile_image_url: '',
        }
      }]
    },  {
      type: '[UsersList] Load UsersList'
    });
    expect(state).toEqual({
      users: {
        users: [{
          name: '',
          screen_name: '',
          profile_image_url: ''
        }],
        selectedUser: '',
      },
      tweets: [{
        text: '',
        user: {
          name: '',
          screen_name: '',
          profile_image_url: '',
        }
      }]
    });
  });

  it('Should handle Load Users list Success action', () => { });

})
