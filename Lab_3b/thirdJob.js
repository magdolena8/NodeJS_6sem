const thirdJob = (data) => {
  if (typeof data != "number") {
    return new Promise((resolve, reject) => {
      reject("error");
    });
  }
  if (data % 2 == 1) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("odd");
      }, 1000);
    });
  }
  if (data % 2 == 0) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("even");
      }, 2000);
    });
  }
};

let resultPromise = async (data) => {
  try {
    var result = await thirdJob(data);
    console.log(result);
    // return result;
  } catch (err) {
    console.log(err);
  }
};
resultPromise(4);

// thirdJob(11)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
