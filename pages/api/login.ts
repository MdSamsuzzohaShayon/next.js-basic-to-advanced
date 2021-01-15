// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page. They are server-side only bundles and won't increase your client-side bundle size.

import { JsonWebTokenError } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';

const KEY = "some_random_key";

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.body) {
        res.statusCode = 404;
        res.end("error");
        return;
    }

    const { username, password } = req.body;
    console.log("Request Body JSON: ", { username, password });


    res.json({
        token: jwt.sign(
            {
                username,
                admin: username === 'admin' && password === "admin"
            },
            KEY
        )
    });
}
