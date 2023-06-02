const axios = require('axios');

const htmlContent = '<html><body><h1>Hello, World!</h1></body></html>';
let count = 0;

const intervalId = setInterval(() => {
  if (count >= 1) {
    clearInterval(intervalId);
    return;
  }

  axios.post('https:/thrivehub.destools.ink/generate', { htmlContent })
    .then(response => {
      console.log(`Generated URL: ${response.data}`);
    })
    .catch(error => console.log(error));

  count++;
}, 1000);
