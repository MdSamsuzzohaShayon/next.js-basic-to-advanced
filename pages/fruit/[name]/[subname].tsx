// Defining routes by using predefined paths is not always enough for complex applications. In Next.js you can add brackets to a page ([param]) to create a dynamic route (a.k.a. url slugs, pretty urls, and others).

import {useRouter} from "next/router";

function FruitName() {
    const router   = useRouter();
    console.log(router);

    function takeMeHome(){
        router.push('/');
    }

    function replaceBlank(){
        router.replace('/');
    }
    
    return (
        <div>
            <h2>
            Dynamic route | Default Route
            </h2>
            {/* router.query.filename  */}
            <p>Router query name: {router.query.name}</p>
            <p>Router query subname: {router.query.subname}</p>
            <button onClick={takeMeHome}>Home</button>
            <button onClick={replaceBlank} >Replace Blank</button>
            
        </div>
    )
}

// http://localhost:3000/fruit/anytext/anysubtext


export default FruitName;

