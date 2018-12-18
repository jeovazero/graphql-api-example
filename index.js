const {ApolloServer, gql} = require('apollo-server');
const mongoose = require('mongoose');
const Post = require('./models/post');

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost/posts-app";
mongoose.connect(MONGO_URL, { useNewUrlParser: true });

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
    getPosts: async () => {
      const list = await Post.find();
      return list;
    }
  },
  Mutation: {
    addPost: async (_, {author, text}) => {
      const post = new Post({author, text});
      await post.save();
      const list = await Post.find();
      return list;
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 3001;

server.listen(PORT).then(({ url }) => {
  console.log(`server on ${url}`)
})
