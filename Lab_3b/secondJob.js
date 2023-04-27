const secondJob = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(console.log("Promise rejected!"));
    }, 3000);
  });

let resultPromice = async () => {
  try {
    var resultSecond = await secondJob();
    return resultSecond;
  } catch (err) {
    console.log(err);
  }
};

resultPromice();
