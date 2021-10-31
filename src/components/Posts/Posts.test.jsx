import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Posts from '.';
import { PostContent } from './posts.styles';

describe('<Posts /> tests', () => {
  it('matches the snapshot when there is no posts', () => {
    const wrapper = shallow(<Posts />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('hides "No articles are here" and display posts details, when there is posts', () => {
    const posts = [
      {
        id: 'gvnzew4eh6d87v3',
        slug: 'how-to-train-your-dragon',
        title: 'How to train your dragon',
        description: 'Ever wonder how?',
        body: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tagList: ['dragons', 'training', 'odd', 'only the first Article'],
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:48:35.824Z',
        favorited: false,
        favoritesCount: 27,
        author: {
          username: 'jake',
          bio: 'I work at statefarm',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Crystal_personal.svg/1024px-Crystal_personal.svg.png',
          following: false,
        },
      },
      {
        slug: 'how-to-train-your-dragon-2',
        title: 'How to train your dragon 2',
        description: 'So toothless',
        body: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tagList: ['dragons', 'training', 'even'],
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:48:35.824Z',
        favorited: false,
        favoritesCount: 0,
        author: {
          username: 'jake',
          bio: 'I work at statefarm',
          image: 'https://i.stack.imgur.com/xHWG8.jpg',
          following: false,
        },
      },
    ];
    const wrapper = shallow(<Posts posts={posts} />);

    expect(
      wrapper
        .find('p')
        .at(0)
        .matchesElement(<p> No articles are here... yet. </p>)
    ).toBeFalsy();
    expect(wrapper.find(PostContent).length).toBe(2);
  });
});
