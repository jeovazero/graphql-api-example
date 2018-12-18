const fetch = require('node-fetch');

const URL = `http://localhost:3001/graphql`;

const post = (query) => fetch(URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query })
})


const getPosts = () => post(`
  {
    getPosts {
      author, text, id
    }
  }
`).then( res => res.json() )

const addPost = ({ author="annon", text=""}) => post(`
    mutation {
      addPost(author:"${author}", text:"${text}"){
        author, text, id
      }
    }
`).then( res => res.json() )


module.exports = {
  getPosts,
  addPost
}
