const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(err => {
    console.error('Error during request:', err);
    res.status(500).send('Internal Server Error');
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

// Simulate an asynchronous operation
function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a potential error
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve('Success!');
    }
  });
}
