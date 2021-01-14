export default function Home(props) {
  
  // WE CAN FIND THIS H1 TAG AS PAGE SOURCE
  // THIS PAGE IS RENDERING ON SERVER AND SERVING THE PAFE TO BROWSER 


  // WE WILL NOT GET INFORMATIONS REGARDING ON CLICK METHOD OR JAVASCRIPT IN PAGE SOURCE 
  return (
    <h1 onClick={()=>alert("hello from alert")}>Hello Next From index</h1>
  )
}
