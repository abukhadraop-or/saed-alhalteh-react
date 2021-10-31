import config from 'config';

describe('#config', () => {
  it('should return API url', () => {
    expect(config.apiUrl).toBe('https://api.realworld.io/api');
  });
});
