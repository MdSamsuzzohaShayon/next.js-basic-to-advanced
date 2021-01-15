// https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes

import {useRouter} from 'next/router';

export default function Shayon() {
    const router  = useRouter();
    console.log( router);
    
    return (
        <div>
            <h2>Catch all routes inside shayon</h2>
            <u>http://localhost:3000/shayon/anytext/anysubtext</u>            
        </div>
    )
}
