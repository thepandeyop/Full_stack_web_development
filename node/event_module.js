// const event = require("node:events");
// const emiiter = new event();
// emiiter.on("order-pizza",(size,topping)=>{
//     console.log(`order recieved ${size},${topping}`);
// });
// emiiter.on("pizza order",(size)=>{
// if(size =="large"){
//     console.log("done");
// }
// });

// emiiter.emit("order_pizza");

const PizzaShop = require("./pizza_shop");
const shop = new pizzaShop();
shop.order();