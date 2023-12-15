// const name1='satya';

// console.log(name1);

setTimeout(() => {
    console.log('in the timeour')
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('in the interval');

}, 1000);