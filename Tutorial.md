# Next.js

 - [Tutorial](https://www.youtube.com/watch?v=tt3PUvhOVzo)
 - Install next.js 
 


### Install and setup next.js

 ```npx create-next-app nextjs-blog --use-npm```

 - Make everything as typscript in pages folder
 - create a **tsconfig.json** which will be track by next.js 
 - Install essential dependicies 

```
npm install typescript @types/node @types/react --save-dev
```

 - Start the project `npm run dev`


### File Structure

 - What ever inside **public** folder that is directly accessable as root directory 

 __http://localhost:3000/vercel.svg__

 - We must have two folder in our project that is **pages** and **public**