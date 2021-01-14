// IT'S LIKE HIGHER ORDER COMPONENT 

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
