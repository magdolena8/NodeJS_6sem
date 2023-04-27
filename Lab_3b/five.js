const square = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num == "number") resolve(num * num);
      else reject("square: Invalid input");
    }, 2000);
  });

const threePow = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num == "number") resolve(Math.pow(num, 3));
      else reject("threePow: Invalid input");
    }, 3000);
  });

const fourthPow = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num == "number") resolve(Math.pow(num, 4));
      else reject("fourthPow: Invalid input");
    }, 4000);
  });

Promise.all([square("qwawe"), threePow(4), fourthPow(3)])
  .then((result) => {
    console.log(`All: ${result}`);
  })
  .catch((error) => {
    console.log("All: ERROR");
  });

Promise.race([square(12), threePow(12), fourthPow("qweqwe")])
  .then((result) => {
    console.log(`Race: ${result}`);
  })
  .catch((error) => {
    console.log("Race: ERROR");
  });

Promise.any([square("qweq"), threePow("asdqwe"), fourthPow("qweqwe")])
  .then((result) => {
    console.log(`Any: ${result}`);
  })
  .catch((error) => {
    console.log("Any: ERROR");
  });

// console.log(fourthPow(12));
