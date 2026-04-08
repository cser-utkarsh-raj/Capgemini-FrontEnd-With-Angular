const myPromise = new Promise(function(resolve, reject) {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

myPromise
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.log(error);
  });