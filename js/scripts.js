function Pizza(number,toppings, size) {
  this.numberOfToppings = number;
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.pizzaPrice = function() {
  const toppings1Small = "$10"
  const toppings3Small = "$15"
  const toppings1Medium = "$20"
  const toppings3Medium = "$25"
  const toppings1Large = "$30"
  const toppings3Large = "$35"
  if (this.numberOfToppings > 1 && this.size === "small") {
    return toppings3Small;
  } else if (this.numberOfToppings <= 1 && this.size === "small") {
    return toppings1Small;
  } else if (this.numberOfToppings <= 1 && this.size === "medium") {
    return toppings1Medium;
  } else if (this.numberOfToppings > 1 && this.size === "medium") {
    return toppings3Medium;
  } else if (this.numberOfToppings <= 1 && this.size === "large") {
    return toppings1Large;
  } else if (this.numberOfToppings > 1 && this.size === "large") {
    return toppings3Large;
  } else {
    return "Please enter pizza Info"
  }
}

let pizza1 = new Pizza("3", "pepperoni", "cheese", "pineapple", "small");
let pizza2 = new Pizza("3", "pepperoni", "small");