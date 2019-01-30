let somePromise = new Promise((resolve, reject) => {
    resolve('It worked');
});

somePromise.then((msg) => {
    console.log('Success:',msg);
}, (msg) => {
    console.log('Erroe:',msg)
});