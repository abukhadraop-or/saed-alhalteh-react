import getTags from './fake-tag-lists';

describe('#getTags', () => {
  it('should return available tags', () => {
    const result = getTags();

    expect(result.tags).toBeTruthy();
  });
});
