//Business Logic

function Pizza(toppings, size) {
  this.toppingsArray = toppings;
  this.size = size;
}



Pizza.prototype.pizzaPrice = function() {
  const toppings1Small = "$10"
  const toppings3Small = "$15"
  const toppings1Medium = "$20"
  const toppings3Medium = "$25"
  const toppings1Large = "$30"
  const toppings3Large = "$35"
  if (this.toppingsArray.length > 1 && this.size === "small") {
    return toppings3Small;
  } else if (this.toppingsArray.length === 1 && this.size === "small") {
    return toppings1Small;
  } else if (this.toppingsArray.length === 1 && this.size === "medium") {
    return toppings1Medium;
  } else if (this.toppingsArray.length > 1 && this.size === "medium") {
    return toppings3Medium;
  } else if (this.toppingsArray.length === 1 && this.size === "large") {
    return toppings1Large;
  } else if (this.toppingsArray.length > 1 && this.size === "large") {
    return toppings3Large;
  } else {
    return "Please enter pizza Info"
  }
}


//UI Logic

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    let toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      const allToppings = $(this).val();
      toppings.push(allToppings);
    })
      console.log(toppings);
    const pizzaSize = $("select#size").val();
      console.log(pizzaSize);
    let pizzaOrder = new Pizza(toppings, pizzaSize);
    console.log(pizzaOrder);
    let pizzaOrderPrice = pizzaOrder.pizzaPrice();
    console.log(pizzaOrderPrice)
    $("#pizzaPrice").append("<p>" + "Pizza Price:" + pizzaOrderPrice + "</p>");
  })
});