// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page. They are server-side only bundles and won't increase your client-side bundle size.

import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Request Body: ", req.body);
  console.log("Request Query: ", req.query);

  // res.end("close response");

  res.statusCode = 200;
  // console.log(req.cookies);
  // res.setHeader("Custom-header-shayon", "We are open to hire people"); // SEE THIS IN NETWORK TAB
  // res.json({ status: 'Ok' });
  // res.setHeader("X-Custom-Header", "We are open to hire people"); // SEE THIS IN NETWORK TAB
  
  // document.cookie // PASTE THIS LINE IN CONSOLE TO SEE COOKIE
  // res.setHeader("Set-Cookie", "thisiscookiewecansetinbrowser=true"); // SEE THIS console

  // res.statusCode = 404;

  res.send("This is not json");
}



// http://localhost:3000/api/hello


// FROM BROWSER CONSOLE MADE THIS API REQUEST 
// fetch('http://localhost:3000/api/hello', {method: "POST", body: "Hello"});
// WE WILL GET BACK RESPONSE IN OUR TERMINAL CONSOLE 



// MAKE ANOTHER REQUEST 
/*
fetch(
  'http://localhost:3000/api/hello',
  {
    method: "POST",
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify({ username: "admin", password: "admin" })
  });
*/


// GETTING THE REQUEST  QUERY 
// PARSE URL IN BROWSER 
// http://localhost:3000/api/hello?q=this+is+request+query