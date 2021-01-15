import {GetStaticProps} from 'next';
import path from 'path';

// EXUCATION ON SERVER 
export const getStaticProps:GetStaticProps = async context =>{

    const fs = require('fs');
    const text =fs.readFileSync(path.join(process.cwd(), 'public/robots.txt') , 'utf8');
    console.log(text);
    

    return {
        props: {
            num : 4,
            text
        }
    }
}

export default function Dynamic(props) {
    return (
        <div>
            <h1>Dynamic number: {props.num}</h1>
            <p>Dynamic content: {props.text}</p>
        </div>
    )
}
