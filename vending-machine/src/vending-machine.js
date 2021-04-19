class VendingMachine {
  constructor(vendingObj) {
    this.id = vendingObj.id;
    this.isBroken = vendingObj.isBroken;
    this.snacks = [];
  }

  addSnacks(item) {
    if (this.snacks.includes(item.name)) {
      return 'Sorry, that snack is already stocked! Try adding a different snack.'
    } else {
      this.snacks.push(item);
      item.itemsInStock++
    }
  }



};

module.exports = VendingMachine;
