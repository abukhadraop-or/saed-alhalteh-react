import getCurrentPagePosts from './fake-posts-service';

describe('#getCurrentPagePosts', () => {
  it('should return 5 posts', () => {
    const result = getCurrentPagePosts(1, 5, []);

    expect(result.posts.length).toBe(5);
  });

  it('should return the first post only', () => {
    const result = getCurrentPagePosts(1, 5, ['only the first Article']);

    expect(result.posts.length).toBe(1);
  });
});
