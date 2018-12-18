const api = require('../helpers/api');

describe('[getPosts]', () => {
  it('should load all posts', async () => {
    const { data, error } = await api.getPosts();
    expect(error).toBeUndefined();

    const { getPosts } = data;
    expect(getPosts.length).toStrictEqual(3);
  })
});

describe('[addPost]', () => {
  it('should add a post, then load all them', async () => {
    const { data, error } = await api.addPost({ author: "invoker", text: "My name is Karl!"});
    expect(error).toBeUndefined();
    console.log(data)
    const { addPost } = data;
    expect(addPost.length).toStrictEqual(4);
  })
});
