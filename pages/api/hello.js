const handler = (req, res) => {
  res.status(200).json({ text: 'Hello' })
}

export default handler

// go to:  http://localhost:3000/api/hello
//
// req is an instance of http.IncomingMessage
//
// res is an instance of http.ServerResponse
