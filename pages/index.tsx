function Heading(props) {
  const variables = Math.random() > 0.5 ? "green": "blue";
  return (
    <div>
      {/* INSPECT ELEMENT TO SEE NEXT IS ADDING A CLASS IN EVERY ELEMENT  */}
      <h1 className="blue" >{props.heading}</h1>
      {/* https://nextjs.org/blog/styling-next-with-styled-jsx */}
      {/* <style jsx>
        {`
          h1{
            color: green;
            font-size: 3rem;
          }
        `}
      </style> */}

      <style jsx global>
        {`
          h2{
            color: ${variables};
            font-size: 3rem;
          }
        `}
      </style>
    </div>
  );
}


export default function Home(props) {

  // WE CAN FIND THIS H1 TAG AS PAGE SOURCE
  // THIS PAGE IS RENDERING ON SERVER AND SERVING THE PAFE TO BROWSER 


  // WE WILL NOT GET INFORMATIONS REGARDING ON CLICK METHOD OR JAVASCRIPT IN PAGE SOURCE 
  return (
    <div>
      <Heading heading="This is heading" />
      <h2 className="title" onClick={() => alert("hello from alert")}>Hello Next From index</h2>

    </div>
  )
}
