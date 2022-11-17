let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let [itemName, quantity, unitPrice] = order;

let total = function (order) {
  return order.reduce((sum, item) => {
    return sum + item.unitPrice * item.quantity;
  }, 0);
};

const totalPrice = total(order);

function orders(order) {
  let title = `QTY     ITEM                TOTAL`;
  console.log(title);

  for (let item of order) {
    console.log(
      `${item.quantity.toString().padEnd(8)}${item.itemName.padEnd(20)}${(
        (item.unitPrice * item.quantity * 100) /
        100
      )
        .toFixed(2)
        .toString()}`
    );
  }
  console.log(`Total : ${totalPrice}`);
}

orders(order);
