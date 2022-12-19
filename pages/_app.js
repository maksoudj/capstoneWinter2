import '../styles/globals.css'
import TopBar from '../Components/TopBar'


function MyApp({ Component, pageProps }) {
  return(
    <div>
      <TopBar/>
    <Component {...pageProps} />
    </div>
    )
}

export default MyApp
