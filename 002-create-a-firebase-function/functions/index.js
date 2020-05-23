const functions = require('firebase-functions')

exports.helloServerless = functions.https.onRequest((request, response) => {
  if (process.env.NODE_ENV !== 'production') {
    response.setHeader('Access-Control-Allow-Origin', '*')
  }

  response.status(200).json({ message: 'And, hello from serverless!' })
})
