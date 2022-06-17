//Business Logic

function Pizza(toppings, crust, size) {
  this.toppingsArray = toppings;
  this.crust = crust
  this.size = size;
}



Pizza.prototype.pizzaPrice = function() {
  const topping = 1;
  const smallSize = 10;
  const mediumSize = 15;
  const largeSize = 20;
  const regularCust = 0;
  const thinCrust = 2;
  const deepDish = 4;
  let totalToppings = this.toppingsArray.length * topping;
  let totalCharge = totalToppings;

  if (this.size === "small") {
    totalCharge += smallSize;
  } else if (this.size === "medium") {
    totalCharge += mediumSize;
  } else if (this.size === "large") {
    totalCharge += largeSize;
  }
  if (this.crust === "regular") {
    totalCharge += regularCust;
  } else if (this.crust === "thin") {
    totalCharge += thinCrust;
  } else if (this.crust === "deep") {
    totalCharge += deepDish;
  }
  return totalCharge;
}

//UI Logic

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    let toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      const allToppings = $(this).val();
      toppings.push(allToppings);
    });
    const crust = $("Select#crust").val();
    const pizzaSize = $("select#size").val();
    let pizzaOrder = new Pizza(toppings, crust, pizzaSize);
    let pizzaOrderPrice = pizzaOrder.pizzaPrice();
    $("#pizzaPrice").append("<p>" + "Pizza Price: $" + pizzaOrderPrice + "</p>");
    setInterval(function() {
      $("#pizzaPrice").remove();
    }, 5000);
  })
});
