const htmlContent = '<html><body><h1>Hello, World!</h1></body></html>';
let count = 0

const intervalId = setInterval(() => {
  if (count >= 1) {
    clearInterval(intervalId);
    return;
  }

  fetch('https:/thrivehub.destools.ink/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ htmlContent: htmlContent })
  })
    .then(response => response.text())
    .then(url => {
      console.log(`Generated URL: ${url}`);
    })
    .catch(error => console.log(error));

  count++;
}, 1000);
