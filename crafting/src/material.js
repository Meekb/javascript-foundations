class Material {
  constructor(material, cost, count, units) {
    this.name = material;
    this.price = cost;
    this.amount = count;
    this.units = units;
  }

  useMaterial(num) {
    if (this.amount < num) {
      return `You don't have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
    } else {
      this.amount -= num;
      return `You now have ${this.amount} ${this.units} of ${this.name} left.`
    }
  }

  calculateMaterialCost() {
    var total = this.price * this.amount;
    return total;
  }

};

module.exports = Material;
