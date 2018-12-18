const api = require('../helpers/api');

describe('[Mutation] addPost', () => {
  it('should add a post, then load all them', async (done) => {
    const { data: invokerData, error: invokerError } = await api.addPost({ author: "invoker", text: "My name is Karl!"});
    expect(invokerError).toBeUndefined();

    const { addPost } = invokerData;
    expect(addPost.length).toStrictEqual(1);

    const post = addPost[0];
    expect(post.author).toStrictEqual("invoker");
    expect(post.text).toStrictEqual("My name is Karl!");

    done();
  })
});

describe('[Query] getPosts', () => {
  it('should load all posts', async (done) => {
    const { data, error } = await api.getPosts();
    expect(error).toBeUndefined();

    const { getPosts } = data;
    expect(getPosts.length).toStrictEqual(1);
    
    done();
  })
});