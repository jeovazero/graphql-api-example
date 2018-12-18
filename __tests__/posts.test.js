const api = require('../helpers/api');

describe('[getPosts]', () => {
  it('should load all posts', async () => {
    const { data, error } = await api.getPosts();
    expect(error).toBeUndefined();

    const { getPosts } = data;
    expect(getPosts.length).toStrictEqual(3);
  })
});
