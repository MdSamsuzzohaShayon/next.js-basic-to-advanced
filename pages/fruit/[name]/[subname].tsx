// Defining routes by using predefined paths is not always enough for complex applications. In Next.js you can add brackets to a page ([param]) to create a dynamic route (a.k.a. url slugs, pretty urls, and others).

import React from 'react'

function FruitName() {
    return (
        <div>
            Dynamic route | Default Route
        </div>
    )
}

// http://localhost:3000/fruit/anytext/anysubtext


export default FruitName;

