import "../styles/index.css"
import { createStore } from 'redux'
import reducer from '../redux/reducers'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  console.log(reducer)
  let store = createStore(reducer)

  return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default MyApp
