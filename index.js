const Koa = require('koa');
const {ApolloServer, gql} = require('apollo-server-koa');

const posts = [
  { id: 0, name: 'chaos knight', text: 'I will destroy you!' },
  { id: 1, name: 'juggernaut', text: 'My power. My mask.' },
  { id: 2, name: 'ember spirit', text: 'Wars flames blaze again' }
];

const typeDefs = gql`
  type Query{
    getPosts: [Post]
  }

  type Post{
    id: ID
    name: String
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

app.listen({ port: 5550 }, () => 
    console.log(`Server running on http://localhost:5550${server.graphqlPath}`)
)
