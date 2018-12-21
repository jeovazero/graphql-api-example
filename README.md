# graphql-api-example
A simple api made with graphql

### A detailed documentation coming soon.

## Queries

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
