const firstJob = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Hello World"));
    }, 2000);
  });

let resultPromice = async () => {
  try {
    var resultFirst = await firstJob();
    return resultFirst;
  } catch (err) {
    console.log(err);
  }
};
resultPromice();
