import Pagination from 'components/Pagination';
import { PaginationButton } from 'components/Pagination/pagination.styles';
import Posts from 'components/Posts';
import Tags from 'components/Tags';
import { Tag } from 'components/Tags/tags.styles';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import getCurrentPagePosts from 'services/fake-posts-service';
import HomePage from '.';

jest.mock('services/fake-posts-service');

const mockData = {
  posts: [
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
  ],
  count: 1,
};

describe('<HomePage /> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<HomePage />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('passes posts and count correctly to Posts and Pagination components ', () => {
    getCurrentPagePosts.mockReturnValue(mockData);
    const mountWrapper = mount(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const { posts } = mountWrapper.find(Posts).props();
    const { count } = mountWrapper.find(Pagination).props();

    expect(posts).toBe(mockData.posts);
    expect(count).toBe(1);
  });

  describe('#handleTagClick', () => {
    it('sets selectedTags and current page correctly', () => {
      getCurrentPagePosts.mockReturnValue(mockData);
      const mountWrapper = mount(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      );

      mountWrapper.find(Tag).at(1).simulate('click');

      let { selectedTags } = mountWrapper.find(Tags).props();
      let { currentPage } = mountWrapper.find(Pagination).props();

      expect(selectedTags).toEqual(['even']);
      expect(currentPage).toEqual(1);

      mountWrapper.find(Tag).at(1).simulate('click');

      ({ selectedTags } = mountWrapper.find(Tags).props());
      ({ currentPage } = mountWrapper.find(Pagination).props());

      expect(selectedTags).not.toEqual(['even']);
      expect(currentPage).toEqual(1);
    });
  });

  describe('pagination onClick', () => {
    it('sets current page correctly', () => {
      const mockData2 = {
        posts: [
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
        ],
        count: 12,
      };
      getCurrentPagePosts.mockReturnValue(mockData2);
      const mountWrapper = mount(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      );

      mountWrapper.find(PaginationButton).at(1).simulate('click');

      const { currentPage } = mountWrapper.find(Pagination).props();

      expect(currentPage).toEqual(2);
    });
  });
});
