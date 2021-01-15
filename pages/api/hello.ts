// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page. They are server-side only bundles and won't increase your client-side bundle size.

import { NextApiRequest, NextApiResponse } from "next";

export default (req:NextApiRequest, res:NextApiResponse) => {

  res.statusCode = 200;
  res.json({ status: 'Ok' });
}



// http://localhost:3000/api/hello
