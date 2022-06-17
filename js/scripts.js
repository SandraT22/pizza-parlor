//Business Logic

function Pizza(toppings, crust, size) {
  this.toppingsArray = toppings;
  this.crust = crust
  this.size = size;
}



Pizza.prototype.pizzaPrice = function() {
  const toppings1Small = 10
  const toppings3Small = 15
  const toppings1Medium = 20
  const toppings3Medium = 25
  const toppings1Large = 30
  const toppings3Large = 35
  const thinCrust = 2
  const deepDish = 4
  if (this.toppingsArray.length > 1 && this.crust === "regular" && this.size === "small") {
    return toppings3Small;
  } 
  else if (this.toppingsArray.length === 1 && this.crust === "regular"  && this.size === "small") {
    return toppings1Small;
  } 
  else if (this.toppingsArray.length === 1 && this.crust === "regular" && this.size === "medium") {
    return toppings1Medium;
  } 
  else if (this.toppingsArray.length > 1 && this.crust === "regular" && this.size === "medium") {
    return toppings3Medium;
  } 
  else if (this.toppingsArray.length === 1 && this.crust === "regular" && this.size === "large") {
    return toppings1Large;
  } 
  else if (this.toppingsArray.length > 1 && this.crust === "regular" && this.size === "large") {
    return toppings3Large;
  } 
  else if (this.toppingsArray.length > 1 && this.crust === "thin" && this.size === "small") {
    return toppings3Small + thinCrust;
  } 
  else if (this.toppingsArray.length === 1 && this.crust === "thin"  && this.size === "small") {
    return toppings1Small + thinCrust;
  } 
  else if (this.toppingsArray.length === 1 && this.crust === "thin" && this.size === "medium") {
    return toppings1Medium + thinCrust;
  } 
  else if (this.toppingsArray.length > 1 && this.crust === "thin" && this.size === "medium") {
    return toppings3Medium + thinCrust;
  } 
  else if (this.toppingsArray.length === 1 && this.crust === "thin" && this.size === "large") {
    return toppings1Large + thinCrust;
  } 
  else if (this.toppingsArray.length > 1 && this.crust === "thin" && this.size === "large") {
    return toppings3Large + thinCrust;
  } 
  else if (this.toppingsArray.length > 1 && this.crust === "deep" && this.size === "small") {
    return toppings3Small + deepDish;
  } 
  else if (this.toppingsArray.length === 1 && this.crust === "deep"  && this.size === "small") {
    return toppings1Small + deepDish;
  } 
  else if (this.toppingsArray.length === 1 && this.crust === "deep" && this.size === "medium") {
    return toppings1Medium + deepDish;
  } 
  else if (this.toppingsArray.length > 1 && this.crust === "deep" && this.size === "medium") {
    return toppings3Medium + deepDish;
  } 
  else if (this.toppingsArray.length === 1 && this.crust === "deep" && this.size === "large") {
    return toppings1Large + deepDish;
  } 
  else if (this.toppingsArray.length > 1 && this.crust === "deep" && this.size === "large") {
    return toppings3Large + deepDish;
  }
  else {
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
    const crust = $("Select#crust").val();
    console.log(crust);
    const pizzaSize = $("select#size").val();
    let pizzaOrder = new Pizza(toppings, crust, pizzaSize);
    let pizzaOrderPrice = pizzaOrder.pizzaPrice();
    $("#pizzaPrice").append("<p>" + "Pizza Price: $" + pizzaOrderPrice + "</p>");
  })
});