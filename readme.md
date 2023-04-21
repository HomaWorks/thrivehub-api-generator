# API Usage Instructions

## Introduction
This API allows you to generate a unique URL for a given HTML content. 

## Prerequisites
- You must have access to the internet to be able to use this API. 
- You must have a basic understanding of how to make API calls using JavaScript.

## Getting started
To use this API, follow these steps:

1. Copy the code snippet below and replace `'<html><body><h1>Hello, world!</h1></body></html>'` with your own HTML content. 

```js
const htmlContent = '<html><body><h1>Hello, world!</h1></body></html>';

let count = 0;

const intervalId = setInterval(() => {
  if (count >= 1) {
    clearInterval(intervalId);
    return;
  }

  fetch('https://webapi.daveonlittlejo1.repl.co/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ htmlContent: htmlContent })
  })
    .then(response => response.text())
    .then(url => {
      console.log(`Generated URL: ${url}`);
      // Use the generated URL as needed
    })
    .catch(error => console.error(error));

  count++;
}, 1000); // Interval of 1 second (1000 milliseconds)
```



2. Open your JavaScript console in your web browser and paste the code.

3. The `htmlContent` variable should contain the HTML code you want to generate a unique URL for.

4. The API call will execute every 1 second (1000 milliseconds) for a maximum of 2 times (`count >= 2`). You can adjust this interval and maximum count to suit your needs.

5. Once the API call is successful, the generated URL will be logged to the console.

6. You can then use the generated URL as needed.

## Notes
- This API does not store any data and the generated URLs are only valid for a short period of time.
- If you encounter any issues or have any questions, please join the discord server!.



#
