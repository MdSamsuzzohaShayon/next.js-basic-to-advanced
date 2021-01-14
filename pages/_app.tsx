import '../styles/globals.css'
// Next.js uses the App component to initialize pages. You can override it and control the page initialization. 
/*


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
*/


// THIS EXECUTE ON SERVER AND CLIENT AS WELL 
// UPDATING THE PAGES BEFORE THEY RENDER 
function App({ Component, pageProps }) {
  console.log("Hello from _app"); // WE CAN SEE THIS CONSOLE LOG IN OUR SERVER CONSOLE

  return <Component {...pageProps} />
}



export default App;