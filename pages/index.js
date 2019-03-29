import App from "./App/Home";
import { injectGlobal } from './styled/global.style';
import fetch from 'isomorphic-unfetch'
import Posts from "./components/Posts.js";
import Layout from "./components/MyLayout.js";
import Note from "./components/Note.js"
import Link from 'next/link'

const Index = (props) => (

	 <Layout>
	 <App />
  <Posts/>
  <Note/>
    <h1>List Of Task</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map(entry => entry.show)
  }
}


export default Index






