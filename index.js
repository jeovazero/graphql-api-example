const Koa = require('koa');
const {ApolloServer, gql} = require('apollo-server-koa');

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

const app = new Koa();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 3001;

app.listen({ port: PORT }, () =>
    console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`)
)
