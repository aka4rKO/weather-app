console.log('starting app');

setTimeout(() => {
    console.log('inside 1st timeout');
}, 2000);

setTimeout(() => {
    console.log('inside 2nd timeout');
}, 0);

console.log('finishing app');