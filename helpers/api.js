const fetch = require('node-fetch');

const URL = `http://localhost:3001/graphql`;

const getPosts = () => fetch(URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: '{ getPosts { author, text, id } }' })
})
  .then( res => res.json() )

module.exports = {
  getPosts
}
