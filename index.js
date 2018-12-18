const {ApolloServer, gql} = require('apollo-server');

const posts = {
  list: [
    { id: 0, author: 'chaos knight', text: 'I will destroy you!' },
    { id: 1, author: 'juggernaut', text: 'My power. My mask.' },
    { id: 2, author: 'ember spirit', text: 'Wars flames blaze again' }
  ],
  next_id: 3
}

const typeDefs = gql`
  type Query{
    getPosts: [Post]
  }

  type Mutation{
    addPost(author:String, text:String!): [Post]
  }

  type Post{
    id: ID
    author: String
    text: String
  }
`;

const resolvers = {
  Query: {
    getPosts: () => posts.list,
  },
  Mutation: {
    addPost: (_, {author, text}) => {
      posts.list = [
        ...posts.list, {
          id: posts.next_id,
          author,
          text
        }
      ];
      posts.next_id += 1;
      return posts.list;
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 3001;

server.listen(PORT).then(({ url }) => {
  console.log(`server on ${url}`)
})
