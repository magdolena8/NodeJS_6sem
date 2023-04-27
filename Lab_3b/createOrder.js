const { v4: uuidv4 } = require("uuid");

const createOrder = (cardNumber) => {
  return new Promise((resolve, reject) => {
    if (!validateCard(cardNumber)) {
      reject("Card is not valid");
    } else {
      setTimeout(() => {
        resolve(uuidv4());
      }, 3000);
    }
  });
};

function validateCard(cardNumber) {
  console.log(`Card number: ${cardNumber}`);
  const random = Math.floor(Math.random() * 2);
  return Boolean(random);
}

function proceedToPayment(orderNumber) {
  console.log(orderNumber);
  return new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 2);
    if (Boolean(random) === true) {
      resolve("Payment successfull");
    } else {
      reject("Payment failed");
    }
  });
}

createOrder("1234123412341234")
  .then((orderNumber) => {
    proceedToPayment(orderNumber)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
