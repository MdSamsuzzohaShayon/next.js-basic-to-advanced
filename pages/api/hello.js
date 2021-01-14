// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// WE CAN WRITE API ENDPOINT FUNCTION IN NEXT.JS IN HERE 

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
