class Snack {
  constructor(item, cost) {
    this.name = item;
    this.price = cost;
    this.itemsInStock = 0;
  }

  stockItems(num) {
    this.itemsInStock += num;
  }

  removeItem() {
    if (!this.itemsInStock) {
      return `Sorry, no ${this.name} left in stock!`
    }
    this.itemsInStock -= 1;
    return  `Item taken! There are now ${this.itemsInStock} items left.`
  }

};

module.exports = Snack;
