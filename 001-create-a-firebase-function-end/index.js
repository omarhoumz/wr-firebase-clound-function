// get the heading element
const messageDiv = document.querySelector('#function-response')

const YOUR_PROJECT_ID = 'YOUR_PROJECT_ID'
const DATA_CENTER_REGION = 'DATA_CENTER_REGION'
const FUNCTION_NAME = 'FUNCTION_NAME'

// the function trigger endpoint
const url =
  process.env.NODE_ENV === 'production'
    ? `https://${DATA_CENTER_REGION}-${YOUR_PROJECT_ID}.cloudfunctions.net/${FUNCTION_NAME}`
    : `http://localhost:5001/${YOUR_PROJECT_ID}/${DATA_CENTER_REGION}/${FUNCTION_NAME}`

// trigger the function and get the result back
fetch(url)
  .then((result) => result.json())
  // when we have the result, we update the heading with the message
  .then((data) => updateMessage(data.message))

// heading updater function
function updateMessage(message) {
  messageDiv.innerText = message
}
