class Craft {
  constructor(craftObj) {
    this.name = craftObj.type;
    this.materials = craftObj.materials;
    this.completed = false;
  }

  completeCraft() {
    this.completed = !this.completed;
    return 'All done! It looks great!';
  }

  calculateProjectTotal() {
    for (var i = 0; i < this.materials.length; i++) {
      var total += this.materials[i].calculateMaterialCost());
    }
    return total;
  }


};

module.exports = Craft;
