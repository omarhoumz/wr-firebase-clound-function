// get the heading element
const messageDiv = document.querySelector('#function-response')

// the function trigger endpoint
const url =
  'https://${DATA_CENTER_REGION}-${YOUR_PROJECT_ID}.cloudfunctions.net/${FUNCTION_NAME}'

// trigger the function and get the result back
fetch(url)
  .then((result) => result.json())
  // when we have the result, we update the heading with the message
  .then((data) => updateMessage(data.message))

// heading updater function
function updateMessage(message) {
  messageDiv.innerText = message
}
