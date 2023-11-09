const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:
alert(
  `"Hey! Happy to serve your pizza. On our menu we have ${vegetarian},${hawaiian} & ${pepperoni}`
);
const orderName = prompt(
  `Enter the name of the pizza you want to order today.`
);

const orderQuantity = prompt(`How many of ${orderName} do you want?`);

const orderTotal = orderQuantity * pizzaPrice;
alert(
  `Great, I'll get started on your   ${orderName}  right away, it will cost   ${orderTotal} kr`
);

if (
  orderName == vegetarian ||
  orderName == hawaiian ||
  orderName == pepperoni
) {
  const orderQuantity = prompt(`How many of $ {orderName} do you want?`);
  const orderTotal = orderQuantity * pizzaPrice;
  alert(
    `Great I'll get started on your $ {orderName} right away, it will cost $ {orderPrice}kr`
  );
} else {
  alert("It's not on the menu");
}

let cookingTime;

if (orderQuantity >= 1 && orderQuantity <= 2) {
  cookingTime = 10;
} else if (orderQuantity >= 3 && orderQuantity <= 5) {
  cookingTime = 15;
} else {
  cookingTime = 20;
}

alert(
  "Great, I'll get started on your" +
    orderName +
    "right way. It will take approximately" +
    cookingTime +
    "minutes to cook, and it will cost" +
    orderTotal +
    "kr"
);

{
  alert("Sorry, we don't have that sort of pizza on the menu.");

}




