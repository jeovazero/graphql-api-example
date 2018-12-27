# graphql-api-example
A simple api made with GraphQL, which you allow to make simple postings with a pair (author, text).

**Server**: Apollo Server
**Database**: MongoDB

## Preparation

#### Install Dependencies
`yarn install`

#### Configure your environment variables

On development configure `.env` file with your variables.

Example:
```shell
PORT=3001
MONGO_URL=mongodb://localhost:27017/posts-app
```


## Running 
#### Development mode
`yarn dev`

#### Production mode
`yarn prod`

#### Tests
`yarn test`


## Queries

- `getPosts`
  - returns all posts

- `addPosts`
  - add a new post with author and text passed
  - returns all posts

### getPosts
```graphql
query {
  getPosts{
    id
    author
    text
  }
}

```

### addPost
```graphql
mutation {
  addPost(author:"John Armless", text:"I don't know"){
    id
    author
    text
  }
}
```


Made with :smirk:
by <a href="https://github.com/jeovazero">@jeovazero</a>