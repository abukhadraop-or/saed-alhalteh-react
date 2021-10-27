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
  {
    slug: 'how-to-train-your-dragon',
    title: 'How to train your dragon 3',
    description: 'Ever wonder how?',
    body: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tagList: ['dragons', 'training', 'odd', '3/9/16/27'],
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:48:35.824Z',
    favorited: false,
    favoritesCount: 0,
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
    title: 'How to train your dragon 4',
    description: 'So toothless',
    body: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
  {
    slug: 'how-to-train-your-dragon',
    title: 'How to train your dragon 5',
    description: 'Ever wonder how?',
    body: '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tagList: ['dragons', 'training', 'odd'],
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:48:35.824Z',
    favorited: false,
    favoritesCount: 0,
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
    title: 'How to train your dragon  6',
    description: 'So toothless',
    body: '6 It a dragon',
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
  {
    slug: 'how-to-train-your-dragon',
    title: 'How to train your dragon 7',
    description: 'Ever wonder how?',
    body: '7 It takes a Jacobian',
    tagList: ['dragons', 'training', 'odd'],
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:48:35.824Z',
    favorited: false,
    favoritesCount: 0,
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
    title: 'How to train your dragon 8',
    description: 'So toothless',
    body: '8 It a dragon',
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
  {
    slug: 'how-to-train-your-dragon',
    title: 'How to train your dragon 9',
    description: 'Ever wonder how?',
    body: '9 It takes a Jacobian',
    tagList: ['dragons', 'training', 'odd', '3/9/16/27'],
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:48:35.824Z',
    favorited: false,
    favoritesCount: 0,
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
    title: 'How to train your dragon 10',
    description: 'So toothless',
    body: '10 It a dragon',
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
  {
    slug: 'how-to-train-your-dragon',
    title: 'How to train your dragon 11',
    description: 'Ever wonder how?',
    body: '11 It takes a Jacobian',
    tagList: ['dragons', 'training', 'odd'],
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:48:35.824Z',
    favorited: false,
    favoritesCount: 0,
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
    title: 'How to train your dragon 12',
    description: 'So toothless',
    body: '12 It a dragon',
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
  {
    slug: 'how-to-train-your-dragon',
    title: 'How to train your dragon 13',
    description: 'Ever wonder how?',
    body: '13 It takes a Jacobian',
    tagList: ['dragons', 'training', 'odd'],
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:48:35.824Z',
    favorited: false,
    favoritesCount: 0,
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
    title: 'How to train your dragon 14',
    description: 'So toothless',
    body: '14 It a dragon',
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
  {
    slug: 'how-to-train-your-dragon',
    title: 'How to train your dragon 15',
    description: 'Ever wonder how?',
    body: '15 It takes a Jacobian',
    tagList: ['dragons', 'training', 'odd'],
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:48:35.824Z',
    favorited: false,
    favoritesCount: 0,
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
    title: 'How to train your dragon 16',
    description: 'So toothless',
    body: '16 It a dragon',
    tagList: ['dragons', 'training', 'even', '3/9/16/27'],
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
  {
    slug: 'how-to-train-your-dragon',
    title: 'How to train your dragon 17',
    description: 'Ever wonder how?',
    body: '17 It takes a Jacobian',
    tagList: ['dragons', 'training', 'odd'],
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:48:35.824Z',
    favorited: false,
    favoritesCount: 0,
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
    title: 'How to train your dragon 18',
    description: 'So toothless',
    body: '18 It a dragon',
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
  {
    slug: 'how-to-train-your-dragon',
    title: 'How to train your dragon 19',
    description: 'Ever wonder how?',
    body: '19 It takes a Jacobian',
    tagList: ['dragons', 'training', 'odd'],
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:48:35.824Z',
    favorited: false,
    favoritesCount: 0,
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
    title: 'How to train your dragon 20',
    description: 'So toothless',
    body: '20 It a dragon',
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
  {
    slug: 'how-to-train-your-dragon',
    title: 'How to train your dragon 21',
    description: 'Ever wonder how?',
    body: '21 It takes a Jacobian',
    tagList: ['dragons', 'training', 'odd'],
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:48:35.824Z',
    favorited: false,
    favoritesCount: 0,
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
    title: 'How to train your dragon 22',
    description: 'So toothless',
    body: '22 It a dragon',
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
  {
    slug: 'how-to-train-your-dragon',
    title: 'How to train your dragon 23',
    description: 'Ever wonder how?',
    body: '23 It takes a Jacobian',
    tagList: ['dragons', 'training', 'odd'],
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:48:35.824Z',
    favorited: false,
    favoritesCount: 0,
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
    title: 'How to train your dragon 24',
    description: 'So toothless',
    body: '24 It a dragon',
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
  {
    slug: 'how-to-train-your-dragon',
    title: 'How to train your dragon 25',
    description: 'Ever wonder how?',
    body: '25 It takes a Jacobian',
    tagList: ['dragons', 'training', 'odd'],
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:48:35.824Z',
    favorited: false,
    favoritesCount: 0,
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
    title: 'How to train your dragon 26',
    description: 'So toothless',
    body: '26 It a dragon',
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
  {
    slug: 'how-to-train-your-dragon',
    title: 'How to train your dragon 27',
    description: 'Ever wonder how?',
    body: '27 It takes a Jacobian',
    tagList: ['dragons', 'training', 'odd', '3/9/16/27'],
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:48:35.824Z',
    favorited: false,
    favoritesCount: 0,
    author: {
      username: 'jake',
      bio: 'I work at statefarm',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Crystal_personal.svg/1024px-Crystal_personal.svg.png',
      following: false,
    },
  },
];

/**
 * Handles posts filtering.
 *
 * @param {string[]} tags The selected tags.
 *
 * @return {object[]} Posts.
 */
const getFilteredPosts = (tags) => {
  return tags.length === 0
    ? posts
    : posts.filter((post) => post.tagList.find((tag) => tags.includes(tag)));
};

/**
 * Handles posts segmentation.
 *
 * @param {number} currentPage The current page.
 * @param {number} pageSize Maximum allowed number of posts per page.
 * @param {string[]} tags The selected tags.
 *
 * @return {object} Posts for the curent page .
 */
const getCurrentPagePosts = (currentPage, pageSize, tags) => {
  const postsToBesliced = getFilteredPosts(tags);
  const start = (currentPage - 1) * pageSize;
  const postsToBeDisplayed = postsToBesliced.slice(start, start + pageSize);
  const currentPagePosts = {
    posts: postsToBeDisplayed,
    count: postsToBesliced.length,
  };
  return currentPagePosts;
};

export default {
  getFilteredPosts,
  getCurrentPagePosts,
};
