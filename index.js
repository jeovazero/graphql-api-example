const Koa = require('koa');
const {ApolloServer, gql} = require('apollo-server-koa');

const posts = [
  { id: 0, author: 'chaos knight', text: 'I will destroy you!' },
  { id: 1, author: 'juggernaut', text: 'My power. My mask.' },
  { id: 2, author: 'ember spirit', text: 'Wars flames blaze again' }
];

const typeDefs = gql`
  type Query{
    getPosts: [Post]
  }

  type Post{
    id: ID
    author: String
    text: String
  }
`;

const resolvers = {
  Query: {
    getPosts: () => posts,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = new Koa();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 3001;

app.listen({ port: PORT }, () =>
    console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`)
)
